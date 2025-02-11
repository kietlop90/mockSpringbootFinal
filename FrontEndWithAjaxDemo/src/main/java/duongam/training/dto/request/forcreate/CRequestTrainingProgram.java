package duongam.training.dto.request.forcreate;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Size;
import java.util.List;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class CRequestTrainingProgram {
    @Size(min = 6, max = 20, message = "Length of Program Name should be from 6 to 20")
    private String name;
    private String email;
    private String[] listSyllabusCode;
    private String status;
}