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
public class UserBO {

    public void setLastModified(Date lastModified) {
        this.lastModified = lastModified;
    }
    public void setLastModifiedToCurrentDate() {
        this.lastModified = new Date();
    }


    private String email;
    private String userName;
    private String password;
    private Date lastModified;
}
