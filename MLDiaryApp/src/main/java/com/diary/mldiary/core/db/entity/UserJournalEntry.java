package com.diary.mldiary.core.db.entity;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
@Document("userJournalEntry")
public class UserJournalEntry {

    @Id
    private ObjectId id;

    private String title;

    private String journalEntry;

    private Date createdDate;

    private Date modifiedDate;

    private String emotionAttached;

    private String userEmailAddress;
}
