package com.diary.mldiary.controller;

import com.diary.mldiary.core.businessobject.UserJournalEntryBO;
import com.diary.mldiary.core.datatransferobject.UserJournalEntryDTO;
import com.diary.mldiary.mapper.ClassMapper;
import com.diary.mldiary.service.UserJournalEntryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class UserJournalEntryController {

    @Autowired
    private UserJournalEntryService userJournalEntryService;

    @Autowired
    private ClassMapper classMapper;

    @GetMapping("/getAllJournalEntries/{userEmail}")
    public List<UserJournalEntryDTO> getAllUser (@PathVariable("userEmail") String userEmail) {
        return ((List<UserJournalEntryBO>)userJournalEntryService.getAllUserJournalEntries(userEmail)).stream().map(entity -> classMapper.fromUserJournalEntryBusinessObjectToDTO(entity)).toList();
    }

    @PostMapping("/addJournal")
    public UserJournalEntryDTO addJournal (@RequestBody @Validated UserJournalEntryDTO userJournalEntryDTO) {
        return classMapper.fromUserJournalEntryBusinessObjectToDTO(userJournalEntryService.addUserJournalEntry(classMapper.fromUserJournalEntryDtoToBusinessObject(userJournalEntryDTO)));
    }

    @PatchMapping("/updateJournal/{journalId}")
    public UserJournalEntryDTO updateJournal (@PathVariable("journalId") String journalId, @RequestBody @Validated UserJournalEntryDTO userJournalEntryDTO) {
        UserJournalEntryBO userJournalEntryBO = classMapper.fromUserJournalEntryDtoToBusinessObject(userJournalEntryDTO);
        userJournalEntryBO.setId(journalId); // Set the id from the path variable
        return classMapper.fromUserJournalEntryBusinessObjectToDTO(userJournalEntryService.updateUserJournalEntry(userJournalEntryBO));

    }

    @DeleteMapping("/deleteJournal/{journalId}")
    public void deleteJournal (@PathVariable("journalId") String journalId, @RequestHeader("Authorization") String token){
        try {
            userJournalEntryService.deleteUserJournalEntry(journalId, token);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }


}
