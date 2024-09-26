package com.diary.mldiary.core.businessobject;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@JsonIgnoreProperties(ignoreUnknown = true)
public class UserJournalEntryBO {
    private String id;
    private String title;
    private String journalEntry;
    private Date createdDate;
    private Date modifiedDate;
    private String emotionAttached;
    private String userEmailAddress;
}
