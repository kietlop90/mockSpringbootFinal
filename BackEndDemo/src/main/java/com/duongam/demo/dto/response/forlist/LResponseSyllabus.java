package com.duongam.demo.dto.response.forlist;

import com.duongam.demo.entities.User;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.beans.factory.annotation.Value;

import javax.persistence.Column;
import java.sql.Timestamp;

public interface LResponseSyllabus {

    String getTopicCode();

    String getTopicName();

    String getTechnicalGroup();

    String getVersion();

    String getTopicOutline();

    String getTrainingMaterials();

    String getTrainingPrinciples();

    Boolean getStatus();

    @Value("#{target.createdBy}")
    String getCreatedBy();

    Timestamp getCreatedDate();

    Long getModifiedBy();

    Timestamp getModifiedDate();

}
