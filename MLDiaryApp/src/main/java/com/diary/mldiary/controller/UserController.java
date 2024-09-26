package com.diary.mldiary.controller;

import com.diary.mldiary.core.businessobject.*;
import com.diary.mldiary.core.datatransferobject.APIPayloadJSONDTO;
import com.diary.mldiary.core.datatransferobject.UserDTO;
import com.diary.mldiary.mapper.ClassMapper;
import com.diary.mldiary.service.UserService;
import com.diary.mldiary.util.JWTToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class UserController {

    // Annotation
    @Autowired
    private UserService userService;

    @Autowired
    private ClassMapper classMapper;

    // Save operation
    @PostMapping("/addUser")
    public APIPayloadJSONDTO saveUser(@Validated @RequestBody UserDTO userDTO) {
        APIPayloadJSONBO apiPayloadJSONBO = new APIPayloadJSONBO();
        try {
           apiPayloadJSONBO.setStatus("success");
           UserDTO newUser = classMapper.fromUserBusinessObjectToDTO(userService.saveUser(classMapper.fromUserDtoToBusinessObject(userDTO)));
           String token = JWTToken.generateToken(newUser.getEmail());
           UserWithJWTTokenBO userWithJWTTokenBO = new UserWithJWTTokenBO(token);
           userWithJWTTokenBO.setEmail(newUser.getEmail());
           userWithJWTTokenBO.setUserName(newUser.getUserName());
           userWithJWTTokenBO.setPassword(newUser.getPassword());
           userWithJWTTokenBO.setLastModified(newUser.getLastModified());
           apiPayloadJSONBO.setMessage(userWithJWTTokenBO);
        } catch (Exception e) {
            System.out.println("Following error found in the API: "+e.getMessage());
            apiPayloadJSONBO.setStatus("failed");
            apiPayloadJSONBO.setMessage(new APIFailedObjectBO(e.getMessage()));
        }
        return classMapper.fromAPIPayloadJSONBusinessObjectToDTO(apiPayloadJSONBO);
    }

    // Read operation
    @GetMapping("/getAllUsers")
    public APIPayloadJSONDTO fetchUserList(@RequestHeader(HttpHeaders.AUTHORIZATION) String validationToken) {
        APIPayloadJSONBO apiPayloadJSONBO = new APIPayloadJSONBO();
        try {
            if (validationToken instanceof String && JWTToken.validateToken(validationToken)) {
                apiPayloadJSONBO.setStatus("success");
                List<UserDTO> userLists = ((List<UserBO>) userService.fetchUsertList()).stream().map(userBO -> classMapper.fromUserBusinessObjectToDTO(userBO)).toList();
                apiPayloadJSONBO.setMessage(new UserListsBO(userLists));
            } else {
                throw new Exception("Your token has expired, please kindly log in again.");
            }
        } catch (Exception e) {
            System.out.println("Following error found in the API: "+e.getMessage());
            apiPayloadJSONBO.setStatus("failed");
            apiPayloadJSONBO.setMessage(new APIFailedObjectBO(e.getMessage()));
        }
        return classMapper.fromAPIPayloadJSONBusinessObjectToDTO(apiPayloadJSONBO);
    }

    // Update operation
    @PutMapping("/updateUser/{email}")
    public APIPayloadJSONDTO
    updateUserInfo(@RequestHeader(HttpHeaders.AUTHORIZATION) String validationToken, @RequestBody UserDTO userDTO, @PathVariable("email") String email) {
        APIPayloadJSONBO apiPayloadJSONBO = new APIPayloadJSONBO();
        try {
            if(!(validationToken instanceof String) || JWTToken.extractEmail(validationToken)!=userDTO.getEmail()) {
                throw new Exception("Token provided is invalid, kindly relogin again.");
            }
            else if (JWTToken.validateToken(validationToken)) {
                apiPayloadJSONBO.setStatus("success");
                UserDTO updatedUserDTO = classMapper.fromUserBusinessObjectToDTO(userService.updateUser(classMapper.fromUserDtoToBusinessObject(userDTO), email));
                apiPayloadJSONBO.setMessage(updatedUserDTO);
            } else  {
                throw new Exception("Your token has expired, please kindly log in again.");
            }
        } catch (Exception e) {
            System.out.println("\n\n\n\n\n\nFollowing error found in the API: "+e.getMessage());
            apiPayloadJSONBO.setStatus("failed");
            apiPayloadJSONBO.setMessage(new APIFailedObjectBO(e.getMessage()));
        }
        return classMapper.fromAPIPayloadJSONBusinessObjectToDTO(apiPayloadJSONBO);
    }

    // Delete operation
    @DeleteMapping("/dropUser/{email}")
    public String deleteUserByEmail(@PathVariable("email") String email) {
        userService.deleteUserByEmail(email);
        return "Deleted Successfully";
    }
}
