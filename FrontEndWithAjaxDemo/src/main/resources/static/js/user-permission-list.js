$(document).ready(function () {
    $("#btn-save").on("click", function () {
        for (let i = 1; i <= 4; i++) {
            let syllabus = $("#syllabus" + i).val(); // lấy value từ id bên html (jquery)
            let program = $("#program" + i).val();
            let aClass = $("#class" + i).val();
            let learning = $("#learning" + i).val();
            let name = $("#hidden" + i).text();
            let description = $("#hidden" + i).text();
            let data = {
                id: i,
                name: name,
                description: description,
                syllabus: syllabus,
                trainingProgram: program ? program : "View",
                classForProject: aClass ? aClass : "View",
                learningMetarial: learning ? learning : "View",
            }
            updateItem("/role/update", data, "/role/list", false);
        }
    });
})