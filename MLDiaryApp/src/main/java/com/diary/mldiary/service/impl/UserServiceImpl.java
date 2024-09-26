package com.diary.mldiary.service.impl;

import com.diary.mldiary.core.businessobject.UserBO;
import com.diary.mldiary.core.db.entity.User;
import com.diary.mldiary.mapper.ClassMapper;
import com.diary.mldiary.repository.UserRepository;
import com.diary.mldiary.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ClassMapper classMapper;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Override
    public UserBO saveUser(UserBO userDo) {
        userDo.setLastModifiedToCurrentDate();
        userDo.setPassword(passwordEncoder.encode(userDo.getPassword()));
        return classMapper.fromUserEntityToBusinessObject(userRepository.insert(classMapper.fromUserBusinessObjectToEntity(userDo)));
    }

    @Override
    // read operation
    public List<UserBO> fetchUsertList() {
        return ((List<User>) userRepository.findAll()).stream().map(entity -> classMapper.fromUserEntityToBusinessObject(entity)).toList();
    }

    @Override
    // update operation
    public UserBO updateUser(UserBO userBO, String email) {
        UserBO userByEmail = classMapper.fromUserEntityToBusinessObject(userRepository.findUserByEmail(email));
        userByEmail.setUserName(userBO.getUserName());
        userByEmail.setEmail(userBO.getEmail());
        userByEmail.setPassword(userBO.getPassword());
//        userByEmail.setLastModified(userBO.getLastModified());
        userByEmail.setLastModifiedToCurrentDate();
        return classMapper.fromUserEntityToBusinessObject(userRepository.save(classMapper.fromUserBusinessObjectToEntity(userByEmail)));
    }

    @Override
    // delete operation
    public void deleteUserByEmail(String email) {
        userRepository.deleteUserByEmail(email);
    }
}
