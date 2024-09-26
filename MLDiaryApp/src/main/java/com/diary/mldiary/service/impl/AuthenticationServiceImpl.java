package com.diary.mldiary.service.impl;

import com.diary.mldiary.core.businessobject.APIFailedObjectBO;
import com.diary.mldiary.core.businessobject.AuthJSONPayloadBO;
import com.diary.mldiary.core.businessobject.AuthenticationMessageBO;
import com.diary.mldiary.core.businessobject.UserBO;
import com.diary.mldiary.core.db.entity.User;
import com.diary.mldiary.mapper.ClassMapper;
import com.diary.mldiary.repository.UserRepository;
import com.diary.mldiary.service.AuthenticationService;
import com.diary.mldiary.util.JWTToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationServiceImpl implements AuthenticationService {

    @Autowired
    private ClassMapper classMapper;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    private String generateJWTToken(String email, String password) {
        return "JWTToken";
    }
    public AuthJSONPayloadBO handleLogin(UserBO user) {
        AuthJSONPayloadBO authPayload = new AuthJSONPayloadBO();
        User backenduser = userRepository.findUserByEmail(user.getEmail());
        if (backenduser != null) {
            if (!passwordEncoder.matches(user.getPassword(), backenduser.getPassword())) {
                authPayload.setStatus("failed");
                authPayload.setMessage(new APIFailedObjectBO("Incorrect password provided !!"));
                return authPayload;
            }
            else {
                authPayload.setStatus("success");
                authPayload.setMessage(new AuthenticationMessageBO(backenduser.getEmail(), backenduser.getUserName(), JWTToken.generateToken(backenduser.getEmail())));
            }
        } else {
            authPayload.setStatus("failed");
            authPayload.setMessage(new APIFailedObjectBO("User doesn't exist !!"));
//            throw new IOException("incorrect credentials provide");
        }

        return authPayload;
    }
}
