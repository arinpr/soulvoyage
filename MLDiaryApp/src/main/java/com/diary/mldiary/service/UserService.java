package com.diary.mldiary.service;

import com.diary.mldiary.core.businessobject.UserBO;

import java.util.List;

public interface UserService {

    UserBO saveUser(UserBO user);

    // read operation
    List<UserBO> fetchUsertList();

    // update operation
    UserBO updateUser(UserBO user, String email);

    // delete operation
    void deleteUserByEmail(String email);
}
