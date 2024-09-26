package com.diary.mldiary.core.datatransferobject;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@JsonIgnoreProperties(ignoreUnknown = true)
public class UserJournalEntryDTO {
    private String id;
    private String title;
    private String journalEntry;
    private Date createdDate;
    private Date modifiedDate;
    private String emotionAttached;
    private String userEmailAddress;
}
