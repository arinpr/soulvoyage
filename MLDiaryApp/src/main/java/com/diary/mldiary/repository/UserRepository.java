package com.diary.mldiary.repository;

import com.diary.mldiary.core.db.entity.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;


public interface UserRepository extends MongoRepository<User, String> {
    @Query(value = "{email:'?0'}")
    User findUserByEmail(String email);

    @Query(value = "{email: '?0' }", delete = true)
    void deleteUserByEmail(String email);

    @Query(value = "{email: '?0', password: '?1' }", count = true)
    Long validateUserCredentials(String email, String password);
}
