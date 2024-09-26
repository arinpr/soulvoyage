package com.diary.mldiary.service;

import com.diary.mldiary.core.businessobject.UserJournalEntryBO;

import java.util.List;

public interface UserJournalEntryService {

    public UserJournalEntryBO addUserJournalEntry (UserJournalEntryBO userStoriesBO);
    public List<UserJournalEntryBO> getAllUserJournalEntries (String userName);
    public UserJournalEntryBO updateUserJournalEntry (UserJournalEntryBO userStoriesBO);
    public String deleteUserJournalEntry (String journalId, String token);
}
