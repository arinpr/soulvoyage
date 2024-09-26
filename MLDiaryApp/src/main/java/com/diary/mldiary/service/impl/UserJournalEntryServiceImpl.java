package com.diary.mldiary.service.impl;

import com.diary.mldiary.core.businessobject.UserJournalEntryBO;
import com.diary.mldiary.core.db.entity.UserJournalEntry;
import com.diary.mldiary.mapper.ClassMapper;
import com.diary.mldiary.repository.UserJournalEntryRepository;
import com.diary.mldiary.service.MachineLearningService;
import com.diary.mldiary.service.UserJournalEntryService;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.crypto.Cipher;
import javax.crypto.spec.SecretKeySpec;
import java.security.Key;
import java.util.Base64;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import java.util.List;

@Service
public class UserJournalEntryServiceImpl implements UserJournalEntryService {

    @Autowired
    private UserJournalEntryRepository userStoriesRepository;

    @Autowired
    private ClassMapper classMapper;

    @Autowired
    private MachineLearningService machineLearningService;

    private static final String ALGORITHM = "AES";

    @Value("${encryption.key}")
    private String KEY;

    private byte[] KEY_VALUE;

    @PostConstruct
    public void init() {
        KEY_VALUE = KEY.getBytes();
    }

    private String encrypt(String data) throws Exception {
        Key key = generateKey();
        Cipher c = Cipher.getInstance(ALGORITHM);
        c.init(Cipher.ENCRYPT_MODE, key);
        byte[] encVal = c.doFinal(data.getBytes());
        return Base64.getEncoder().encodeToString(encVal);
    }

    private String decrypt(String encryptedData) throws Exception {
        Key key = generateKey();
        Cipher c = Cipher.getInstance(ALGORITHM);
        c.init(Cipher.DECRYPT_MODE, key);
        byte[] decodedValue = Base64.getDecoder().decode(encryptedData);
        byte[] decValue = c.doFinal(decodedValue);
        return new String(decValue);
    }

    private Key generateKey() throws Exception {
        return new SecretKeySpec(KEY_VALUE, ALGORITHM);
    }

    public UserJournalEntryBO addUserJournalEntry (UserJournalEntryBO userStoriesBO) {

        if (!userStoriesBO.getJournalEntry().isEmpty()) {
            String emotion = machineLearningService.getEmotionFromText(userStoriesBO.getJournalEntry());
            userStoriesBO.setEmotionAttached(emotion);
            try {
                String encryptedJournalEntry = encrypt(userStoriesBO.getJournalEntry());
                userStoriesBO.setJournalEntry(encryptedJournalEntry);
                String encryptedTitle = encrypt(userStoriesBO.getTitle());
                userStoriesBO.setTitle(encryptedTitle);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
       
        return classMapper.fromUserJournalEntryEntityToBusinessObject(userStoriesRepository.insert(classMapper.fromUserJournalEntryBusinessObjectToEntity(userStoriesBO)));
    }
    public List<UserJournalEntryBO> getAllUserJournalEntries (String userEmailAddress) {
        List<UserJournalEntry> test = userStoriesRepository.findByUserEmailAddress(userEmailAddress);
        List<UserJournalEntryBO> userJournalEntries = (test.stream().map(entity -> classMapper.fromUserJournalEntryEntityToBusinessObject(entity)).toList());

        for (UserJournalEntryBO userJournalEntry : userJournalEntries) {
            try {
                String decryptedJournalEntry = decrypt(userJournalEntry.getJournalEntry());
                userJournalEntry.setJournalEntry(decryptedJournalEntry);
                String decryptedTitle = decrypt(userJournalEntry.getTitle());
                userJournalEntry.setTitle(decryptedTitle);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }

        return userJournalEntries;
    }
    public UserJournalEntryBO updateUserJournalEntry (UserJournalEntryBO userStoriesBO) {
        if (userStoriesRepository.findById(userStoriesBO.getId()).isPresent()) {
            UserJournalEntry userJournalEntry = userStoriesRepository.findById(userStoriesBO.getId()).get();
            try {
                userJournalEntry.setJournalEntry(encrypt(userStoriesBO.getJournalEntry()));
                userJournalEntry.setTitle(encrypt(userStoriesBO.getTitle()));
                userJournalEntry.setEmotionAttached(machineLearningService.getEmotionFromText(userStoriesBO.getJournalEntry()));
                userJournalEntry.setModifiedDate(userStoriesBO.getModifiedDate());
                userStoriesRepository.save(userJournalEntry);
            } catch (Exception e) {
                e.printStackTrace();
            }
            return classMapper.fromUserJournalEntryEntityToBusinessObject(userJournalEntry);
        }
        return null;
    }
    public String deleteUserJournalEntry (String journalId, String token) {
        try {
            String regex = "^Bearer (\\S+) \\| .*$";
            Pattern pattern = Pattern.compile(regex);
            Matcher matcher = pattern.matcher(token);
            String userEmailAddress;
            if (matcher.find()) {
                userEmailAddress = matcher.group(1);
                if (userStoriesRepository.findById(journalId).isPresent()) {
                    UserJournalEntryBO userJournalEntry = classMapper.fromUserJournalEntryEntityToBusinessObject(userStoriesRepository.findById(journalId).get());
                    if (userJournalEntry.getUserEmailAddress().equals(userEmailAddress)) {
                        userStoriesRepository.deleteById(journalId);
                        return "Journal entry deleted successfully";
                    } else {
                        return "User not authorized to delete the journal entry";
                    }
                }
                else {
                    return "Journal entry not found";
                }
            }
            return "User not authorized to delete the journal entry";
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "Journal entry not found";
    }
}
