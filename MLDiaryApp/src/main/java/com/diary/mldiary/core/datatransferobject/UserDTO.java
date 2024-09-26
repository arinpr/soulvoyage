package com.diary.mldiary.core.datatransferobject;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder
@JsonIgnoreProperties (ignoreUnknown = true)
public class UserDTO {
    private String email;
    private String userName;
    private String password;
    private Date lastModified;
}
