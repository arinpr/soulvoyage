package com.diary.mldiary.controller;

import com.diary.mldiary.core.businessobject.APIFailedObjectBO;
import com.diary.mldiary.core.businessobject.AuthJSONPayloadBO;
import com.diary.mldiary.core.datatransferobject.AuthJSONPayloadDTO;
import com.diary.mldiary.core.datatransferobject.UserDTO;
import com.diary.mldiary.mapper.ClassMapper;
import com.diary.mldiary.service.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController @RequestMapping("api/auth")
@CrossOrigin(origins = "*")
public class AuthenticationController {

    @Autowired
    private ClassMapper classMapper;

    @Autowired
    private AuthenticationService authService;
    @PostMapping("/login")
    public AuthJSONPayloadDTO handleLogin(@Validated @RequestBody UserDTO userDTO) {
        try {
            return classMapper.fromAuthenticationPayloadBusinessObjectToDTO((AuthJSONPayloadBO) authService.handleLogin(classMapper.fromUserDtoToBusinessObject(userDTO)));
        } catch (Exception e) {
            System.out.println(e.getMessage());
            AuthJSONPayloadBO authJSONPayloadBO = new AuthJSONPayloadBO("failed", new APIFailedObjectBO(e.getMessage()));
//            authPayload.setStatus("failed");
//            authPayload.setMessage(null);
            return classMapper.fromAuthenticationPayloadBusinessObjectToDTO(authJSONPayloadBO);
        }
    }
}
