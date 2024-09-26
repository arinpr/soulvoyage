package com.diary.mldiary.repository;

import com.diary.mldiary.core.db.entity.UserJournalEntry;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface UserJournalEntryRepository extends MongoRepository<UserJournalEntry, String > {

    @Query(value = "{userEmailAddress: '?0'}")
    List<UserJournalEntry> findByUserEmailAddress (String userEmailAddress);
}
