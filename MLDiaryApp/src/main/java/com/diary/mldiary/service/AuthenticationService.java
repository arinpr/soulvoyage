package com.diary.mldiary.service;

import com.diary.mldiary.core.businessobject.AuthJSONPayloadBO;
import com.diary.mldiary.core.businessobject.UserBO;

public interface AuthenticationService {

    AuthJSONPayloadBO handleLogin(UserBO user);
}
