package com.duongam.demo.dto.request.forcreate;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class CRequestTrainingProgram {
    private String name;
    private List<String> listSyllabusCode;
    private String status;
}
