package duongam.training.dto.request.forcreate;

import lombok.*;

import javax.validation.constraints.Size;
import java.sql.Timestamp;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class CRequestClass {
    private String name;
    private String code;
    private Integer duration;
    private Integer days;
    private Integer hours;
    private String status;
    private String location;
    private String fsu;
    private LocalDateTime startDate;
    private LocalDateTime endDate;
    private Long createdBy;
    private Timestamp createdDate;
    private Long modifiedBy;
    private Timestamp modifiedDate;
    private String trainingProgramName;
    private String attendee;
    private ArrayList<String> listOfClass;
}
