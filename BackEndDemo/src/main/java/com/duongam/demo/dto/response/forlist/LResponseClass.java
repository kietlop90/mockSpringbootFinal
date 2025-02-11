package com.duongam.demo.dto.response.forlist;

import com.duongam.demo.entities.ClassForProject;
import com.duongam.demo.entities.ClassUser;
import com.duongam.demo.entities.TrainingProgram;
import com.duongam.demo.entities.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Setter
public class LResponseClass {
    private Long id;
    private String name;
    private String code;
    private Integer duration;
    private Integer days;
    private Integer hours;
    private String status;
    private String location;
    private String fsu;
    private String startDate;
    private String endDate;
    private String createdBy;
    private Timestamp createdDate;
    private String modifiedBy;
    private Timestamp modifiedDate;
    private String trainingProgramCode;
    private String trainingProgramName;
    private String attendee;
    private ArrayList<String> listOfClass;


    public LResponseClass(ClassForProject classForProject) {
        this.id = classForProject.getId();
        this.name = classForProject.getName();
        this.code = classForProject.getCode();
        this.duration = classForProject.getDuration();
        this.status = classForProject.getStatus();
        this.location = classForProject.getLocation();
        this.fsu = classForProject.getFSU();
        this.startDate =  classForProject.getStartDate() != null ? classForProject.getStartDate().format(DateTimeFormatter.ofPattern("dd/MM/yyyy")) : null;
        this.endDate = classForProject.getEndDate() != null ? classForProject.getEndDate().format(DateTimeFormatter.ofPattern("dd/MM/yyyy")) : null;;
        this.createdBy = classForProject.getCreatedBy().getName();
        this.createdDate = classForProject.getCreatedDate();
        this.modifiedBy = classForProject.getModifiedBy().getName();
        this.modifiedDate = classForProject.getModifiedDate();
    }

    public String formatDate() {
        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
        return sdf.format(createdDate);
    }
}
