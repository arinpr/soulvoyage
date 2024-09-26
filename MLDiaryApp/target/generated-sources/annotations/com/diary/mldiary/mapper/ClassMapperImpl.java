package com.diary.mldiary.mapper;

import com.diary.mldiary.core.businessobject.APIPayloadJSONBO;
import com.diary.mldiary.core.businessobject.AuthJSONPayloadBO;
import com.diary.mldiary.core.businessobject.AuthenticationMessageBO;
import com.diary.mldiary.core.businessobject.UserBO;
import com.diary.mldiary.core.businessobject.UserJournalEntryBO;
import com.diary.mldiary.core.datatransferobject.APIPayloadJSONDTO;
import com.diary.mldiary.core.datatransferobject.AuthJSONPayloadDTO;
import com.diary.mldiary.core.datatransferobject.AuthenticationMessageDTO;
import com.diary.mldiary.core.datatransferobject.UserDTO;
import com.diary.mldiary.core.datatransferobject.UserJournalEntryDTO;
import com.diary.mldiary.core.db.entity.User;
import com.diary.mldiary.core.db.entity.UserJournalEntry;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-06-20T22:56:31-0700",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 21.0.3 (Amazon.com Inc.)"
)
@Component
public class ClassMapperImpl implements ClassMapper {

    @Override
    public UserBO fromUserDtoToBusinessObject(UserDTO userDTO) {
        if ( userDTO == null ) {
            return null;
        }

        UserBO.UserBOBuilder userBO = UserBO.builder();

        userBO.email( userDTO.getEmail() );
        userBO.userName( userDTO.getUserName() );
        userBO.password( userDTO.getPassword() );
        userBO.lastModified( userDTO.getLastModified() );

        return userBO.build();
    }

    @Override
    public User fromUserBusinessObjectToEntity(UserBO userBO) {
        if ( userBO == null ) {
            return null;
        }

        User.UserBuilder user = User.builder();

        user.email( userBO.getEmail() );
        user.userName( userBO.getUserName() );
        user.password( userBO.getPassword() );
        user.lastModified( userBO.getLastModified() );

        return user.build();
    }

    @Override
    public UserBO fromUserEntityToBusinessObject(User user) {
        if ( user == null ) {
            return null;
        }

        UserBO.UserBOBuilder userBO = UserBO.builder();

        userBO.email( user.getEmail() );
        userBO.userName( user.getUserName() );
        userBO.password( user.getPassword() );
        userBO.lastModified( user.getLastModified() );

        return userBO.build();
    }

    @Override
    public UserDTO fromUserBusinessObjectToDTO(UserBO userBO) {
        if ( userBO == null ) {
            return null;
        }

        UserDTO.UserDTOBuilder<?, ?> userDTO = UserDTO.builder();

        userDTO.email( userBO.getEmail() );
        userDTO.userName( userBO.getUserName() );
        userDTO.password( userBO.getPassword() );
        userDTO.lastModified( userBO.getLastModified() );

        return userDTO.build();
    }

    @Override
    public UserJournalEntryBO fromUserJournalEntryDtoToBusinessObject(UserJournalEntryDTO userJournalEntryDTO) {
        if ( userJournalEntryDTO == null ) {
            return null;
        }

        UserJournalEntryBO.UserJournalEntryBOBuilder userJournalEntryBO = UserJournalEntryBO.builder();

        userJournalEntryBO.id( userJournalEntryDTO.getId() );
        userJournalEntryBO.title( userJournalEntryDTO.getTitle() );
        userJournalEntryBO.journalEntry( userJournalEntryDTO.getJournalEntry() );
        userJournalEntryBO.createdDate( userJournalEntryDTO.getCreatedDate() );
        userJournalEntryBO.modifiedDate( userJournalEntryDTO.getModifiedDate() );
        userJournalEntryBO.emotionAttached( userJournalEntryDTO.getEmotionAttached() );
        userJournalEntryBO.userEmailAddress( userJournalEntryDTO.getUserEmailAddress() );

        return userJournalEntryBO.build();
    }

    @Override
    public UserJournalEntry fromUserJournalEntryBusinessObjectToEntity(UserJournalEntryBO userJournalEntryBO) {
        if ( userJournalEntryBO == null ) {
            return null;
        }

        UserJournalEntry.UserJournalEntryBuilder userJournalEntry = UserJournalEntry.builder();

        userJournalEntry.id( fromString( userJournalEntryBO.getId() ) );
        userJournalEntry.title( userJournalEntryBO.getTitle() );
        userJournalEntry.journalEntry( userJournalEntryBO.getJournalEntry() );
        userJournalEntry.createdDate( userJournalEntryBO.getCreatedDate() );
        userJournalEntry.modifiedDate( userJournalEntryBO.getModifiedDate() );
        userJournalEntry.emotionAttached( userJournalEntryBO.getEmotionAttached() );
        userJournalEntry.userEmailAddress( userJournalEntryBO.getUserEmailAddress() );

        return userJournalEntry.build();
    }

    @Override
    public UserJournalEntryBO fromUserJournalEntryEntityToBusinessObject(UserJournalEntry userJournalEntry) {
        if ( userJournalEntry == null ) {
            return null;
        }

        UserJournalEntryBO.UserJournalEntryBOBuilder userJournalEntryBO = UserJournalEntryBO.builder();

        userJournalEntryBO.id( fromObjectId( userJournalEntry.getId() ) );
        userJournalEntryBO.title( userJournalEntry.getTitle() );
        userJournalEntryBO.journalEntry( userJournalEntry.getJournalEntry() );
        userJournalEntryBO.createdDate( userJournalEntry.getCreatedDate() );
        userJournalEntryBO.modifiedDate( userJournalEntry.getModifiedDate() );
        userJournalEntryBO.emotionAttached( userJournalEntry.getEmotionAttached() );
        userJournalEntryBO.userEmailAddress( userJournalEntry.getUserEmailAddress() );

        return userJournalEntryBO.build();
    }

    @Override
    public UserJournalEntryDTO fromUserJournalEntryBusinessObjectToDTO(UserJournalEntryBO userJournalEntryBO) {
        if ( userJournalEntryBO == null ) {
            return null;
        }

        UserJournalEntryDTO.UserJournalEntryDTOBuilder userJournalEntryDTO = UserJournalEntryDTO.builder();

        userJournalEntryDTO.id( userJournalEntryBO.getId() );
        userJournalEntryDTO.title( userJournalEntryBO.getTitle() );
        userJournalEntryDTO.journalEntry( userJournalEntryBO.getJournalEntry() );
        userJournalEntryDTO.createdDate( userJournalEntryBO.getCreatedDate() );
        userJournalEntryDTO.modifiedDate( userJournalEntryBO.getModifiedDate() );
        userJournalEntryDTO.emotionAttached( userJournalEntryBO.getEmotionAttached() );
        userJournalEntryDTO.userEmailAddress( userJournalEntryBO.getUserEmailAddress() );

        return userJournalEntryDTO.build();
    }

    @Override
    public AuthenticationMessageDTO fromAuthenticationPayloadBusinessObjectToDTO(AuthenticationMessageBO authBO) {
        if ( authBO == null ) {
            return null;
        }

        AuthenticationMessageDTO.AuthenticationMessageDTOBuilder authenticationMessageDTO = AuthenticationMessageDTO.builder();

        authenticationMessageDTO.JWTToken( authBO.getJWTToken() );
        authenticationMessageDTO.userName( authBO.getUserName() );
        authenticationMessageDTO.email( authBO.getEmail() );

        return authenticationMessageDTO.build();
    }

    @Override
    public AuthenticationMessageBO fromAuthenticationPayloadDTOToBusinessObject(AuthenticationMessageDTO authDTO) {
        if ( authDTO == null ) {
            return null;
        }

        AuthenticationMessageBO.AuthenticationMessageBOBuilder authenticationMessageBO = AuthenticationMessageBO.builder();

        authenticationMessageBO.email( authDTO.getEmail() );
        authenticationMessageBO.userName( authDTO.getUserName() );
        authenticationMessageBO.JWTToken( authDTO.getJWTToken() );

        return authenticationMessageBO.build();
    }

    @Override
    public AuthJSONPayloadDTO fromAuthenticationPayloadBusinessObjectToDTO(AuthJSONPayloadBO authJPBO) {
        if ( authJPBO == null ) {
            return null;
        }

        AuthJSONPayloadDTO.AuthJSONPayloadDTOBuilder authJSONPayloadDTO = AuthJSONPayloadDTO.builder();

        authJSONPayloadDTO.message( authJPBO.getMessage() );
        authJSONPayloadDTO.status( authJPBO.getStatus() );

        return authJSONPayloadDTO.build();
    }

    @Override
    public AuthJSONPayloadBO fromAuthenticationPayloadDTOToBusinessObject(AuthJSONPayloadDTO authJPDTO) {
        if ( authJPDTO == null ) {
            return null;
        }

        AuthJSONPayloadBO.AuthJSONPayloadBOBuilder authJSONPayloadBO = AuthJSONPayloadBO.builder();

        authJSONPayloadBO.message( authJPDTO.getMessage() );
        authJSONPayloadBO.status( authJPDTO.getStatus() );

        return authJSONPayloadBO.build();
    }

    @Override
    public APIPayloadJSONBO fromAPIPayloadJSONDTOToBusinessObject(APIPayloadJSONDTO apiPayloadJSONDTO) {
        if ( apiPayloadJSONDTO == null ) {
            return null;
        }

        APIPayloadJSONBO.APIPayloadJSONBOBuilder aPIPayloadJSONBO = APIPayloadJSONBO.builder();

        aPIPayloadJSONBO.message( apiPayloadJSONDTO.getMessage() );
        aPIPayloadJSONBO.status( apiPayloadJSONDTO.getStatus() );

        return aPIPayloadJSONBO.build();
    }

    @Override
    public APIPayloadJSONDTO fromAPIPayloadJSONBusinessObjectToDTO(APIPayloadJSONBO apiPayloadJSONBO) {
        if ( apiPayloadJSONBO == null ) {
            return null;
        }

        APIPayloadJSONDTO.APIPayloadJSONDTOBuilder aPIPayloadJSONDTO = APIPayloadJSONDTO.builder();

        aPIPayloadJSONDTO.message( apiPayloadJSONBO.getMessage() );
        aPIPayloadJSONDTO.status( apiPayloadJSONBO.getStatus() );

        return aPIPayloadJSONDTO.build();
    }
}
