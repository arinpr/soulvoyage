package com.diary.mldiary.mapper;

import com.diary.mldiary.core.businessobject.*;
import com.diary.mldiary.core.datatransferobject.*;
import com.diary.mldiary.core.db.entity.User;
import com.diary.mldiary.core.db.entity.UserJournalEntry;
import org.bson.types.ObjectId;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;

@Mapper(componentModel = "spring")
public interface ClassMapper {

    @Named("fromObjectId")
    default String fromObjectId(ObjectId objectId) {
        return objectId != null ? objectId.toHexString() : null;
    }

    @Named("fromString")
    default ObjectId fromString(String id) {
        return id != null ? new ObjectId(id) : null;
    }

    UserBO fromUserDtoToBusinessObject(UserDTO userDTO);

    User fromUserBusinessObjectToEntity(UserBO userBO);

    UserBO fromUserEntityToBusinessObject(User user);

    UserDTO fromUserBusinessObjectToDTO(UserBO userBO);

    UserJournalEntryBO fromUserJournalEntryDtoToBusinessObject(UserJournalEntryDTO userJournalEntryDTO);

    @Mapping(source = "id", target = "id", qualifiedByName = "fromString")
    UserJournalEntry fromUserJournalEntryBusinessObjectToEntity(UserJournalEntryBO userJournalEntryBO);

    @Mapping(source = "id", target = "id", qualifiedByName = "fromObjectId")
    UserJournalEntryBO fromUserJournalEntryEntityToBusinessObject(UserJournalEntry userJournalEntry);

    UserJournalEntryDTO fromUserJournalEntryBusinessObjectToDTO(UserJournalEntryBO userJournalEntryBO);

    AuthenticationMessageDTO fromAuthenticationPayloadBusinessObjectToDTO(AuthenticationMessageBO authBO);

    AuthenticationMessageBO fromAuthenticationPayloadDTOToBusinessObject(AuthenticationMessageDTO authDTO);

    @Mapping(source = "message", target = "message")
    AuthJSONPayloadDTO fromAuthenticationPayloadBusinessObjectToDTO(AuthJSONPayloadBO authJPBO);

    @Mapping(source = "message", target = "message")
    AuthJSONPayloadBO fromAuthenticationPayloadDTOToBusinessObject(AuthJSONPayloadDTO authJPDTO);

    @Mapping(source = "message", target = "message")
    APIPayloadJSONBO fromAPIPayloadJSONDTOToBusinessObject(APIPayloadJSONDTO apiPayloadJSONDTO);

    @Mapping(source = "message", target = "message")
    APIPayloadJSONDTO fromAPIPayloadJSONBusinessObjectToDTO(APIPayloadJSONBO apiPayloadJSONBO);

}
