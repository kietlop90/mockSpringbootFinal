package com.duongam.demo.dto.request.forcreate;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Id;
import java.time.LocalDate;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class CRequestUser {
    private String roleId;
    private String name;
    private String username;
    private String email;
    private String password;
    private String phone;
    private String dob;
    private String gender;
    private Boolean status;
    private LocalDate createdDate;
    private LocalDate modifiedDate;
}
