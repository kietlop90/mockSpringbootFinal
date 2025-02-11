$(document).ready(function () {
    let tabDom = $(".tab");
    if (tabDom.length > 0) {
        for (const index in tabDom) {
            let tabDomElement = tabDom[index];
            let indexTab = Number(index);
            if (typeof tabDomElement === "number") {
                break;
            }
            $(tabDomElement).on("click", function () {
                let tabActiveDom = $(".tab.active");
                for (const tabActiveDomElement of tabActiveDom) {
                    $(tabActiveDomElement).removeClass("active");
                }
                let tabBodyDom = $(".tab-body");
                for (const tabBodyDomElement of tabBodyDom) {
                    $(tabBodyDomElement).hide();
                }
                $(tabDomElement).addClass("active");
                $("#tab-body-" + (indexTab + 1)).show();
            });
            let tabBodyDom = $("#tab-body-" + (indexTab + 1));
            if (!tabBodyDom.hasClass("active")) {
                tabBodyDom.hide();
            }
        }
    }

    // set info user
    let userName = localStorage.getItem("user_name");
    $("#user-name").html(userName);
});
let token = localStorage.getItem("token");

let listError = {
    EM01: "User type is required. ",
    EM02: "Name is required. ",
    EM03: "Email address is required. ",
    EM04: "Email address is existed. Please check and input another email address.",
    EM05: "Email address is invalid. Please check and input again.",
    EM06: "Phone is required. ",
    EM07: "Phone is invalid. Please check and input again",
    EM08: "Date of birth is required. ",
    EM09: "User is created successfully.",
    EM10: "User is updated successfully.",
    EM11: "Role is updated successfully.",
    EM12: "Syllabus name is required. ",
    EM13: "Level is required. ",
    EM14: "Attendee number is required. ",
    EM15: "Technical requirement(s) is required. ",
    EM16: "Course objectives are required. ",
    EM17: "Unit name is required. ",
    EM18: "Content name is required. ",
    EM19: "Output standard is required. ",
    EM20: "Training time is required. ",
    EM21: "Delivery type is required. ",
    EM22: "Delete all content of the Day?",
    EM23: "Please input at least one day.",
    EM24: "Please input at least one unit into this day.",
    EM25: "Please input at least one content into this unit.",
    EM26: "The duration exceeds 8 hours per day. Please check again.",
    EM27: "Quiz is required. ",
    EM28: "Assignment is required. ",
    EM29: "Final is required. ",
    EM30: "Final Theory is required. ",
    EM31: "Final Practice is required. ",
    EM32: "GPA is required. ",
    EM33: "Total of all assessment is not 100%. Please check again.",
    EM34: "File is required. ",
    EM35: "Program name is required. ",
    EM36: "General information is required. ",
    EM37: "Syllabus is required. ",
    EM38: "List of syllabuses is required. ",
    EM39: "File is required. ",
    EM40: "File is invalid. Please check and upload again. ",
    EM41: "Class name is required. ",
    EM42: "Class time is required. ",
    EM43: "Location is required. ",
    EM44: "Trainer is required.",
    EM45: "Admin is required. ",
    EM46: "FSU is required.",
    EM47: "Time frame is required. ",
    EM48: "Training program is required",
    EM49: "If you change training program, list of syllabuses will be replaced by new training program",
    EM50: "Do you want to delete class? ",
    EM51: "Do you want to update schedule? This session of class only. All Session of this class.",
    EM52: "Token not found",
    EM53: "Phone number must be 10 digits",
    EM54: "Gender is required.",
    EM55: "Password must contain at least one letter, one digit, and be 8-12 characters long",
    EM56: "Token expires",
    EM57: "Token was confirmed",
    EM58: "Your link restore password has been sent to your email",
    EM59: "Your email or password does not exist",
    EM60: "Your password has been reset.",
    EM61: "Completed registration",
    EM62: "Page has no content because search value",
    EM63: "User not active",
}

function throwError(error) {
    switch (error) {
        case 402:
            alert("Email not found. ");
            break;
        default:
            alert("Unexpected error. ");
            break;
    }
}

let resultList;

//Method for get list admin and trainer for  class
function getList(url, prop) {
    return Promise.resolve(
        $.ajax({
            type: "GET",
            url: url,
            success: function (result) {
                if (prop) {
                    resultList = resultList ? resultList : {};
                    resultList[prop] = result;
                } else {
                    resultList = result;
                }
            },
            error: function (xhr, status, error) {
                throwError(xhr.responseJSON.message);
            }
        })
    ).then(data => {
        return data;
    });
}

let resultListWithKeyWord;

function getListWithKeyWord(url) {
    return Promise.resolve(
        $.ajax({
            type: "GET",
            url: url,
            success: function (result) {
                resultListWithKeyWord = result;
            },
            error: function (xhr, status, error) {
                throwError(xhr.responseJSON.message);
            }
        })
    ).then(data => {
        return data;
    });
}
//use 2 method WithKeyWord for đảm bảo không bị mất dữ liệu của biến chứa kết quả vì nó là biến global
let resultListSyllabusWithKeyWord;

function getListSyllabusWithKeyWord(url) {
    return Promise.resolve(
        $.ajax({
            type: "GET",
            url: url,
            success: function (result) {
                resultListSyllabusWithKeyWord = result;
            },
            error: function (xhr, status, error) {
                throwError(xhr.responseJSON.message);
            }
        })
    ).then(data => {
        return data;
    });
}


let resultGetItemById;

function getItemById(url, id) {
    $.ajax({
        type: "GET",
        url: url + id,
        success: function (result) {
            resultGetItemById = result;
        },
        error: function (xhr, status, error) {
            throwError(xhr.responseJSON.message);
        }
    });
}

let resultAddItem;

function addItem(url, data, redirect) {
    $.ajax({
        type: "POST",
        url: url,
        data: JSON.parse(JSON.stringify(data)),
        success: function (result) {
            resultAddItem = result;
            console.log(result)
            alert("Add new successfully !!!");
            if (redirect) {
                window.location.replace(redirect);
            }
        },
        error: function (xhr, status, error) {
            var errorAddUser = parseInt(xhr.responseJSON.message);
            if (errorAddUser === 404) {
                showErrorModal("All input is required")
            }
            if (errorAddUser === 400) {
                showErrorModal(listError.EM04)
            }
            if (errorAddUser === 501) {
                showErrorModal("Training program name is exist.")
                setTimeout(function () {
                    window.location.replace("/trainingProgram/add");
                }, 1300);
            }

            if (errorAddUser === 502) {
                showErrorModal("Class name is exist.")
                setTimeout(function () {
                    window.location.replace("/class/add");
                }, 1300);
            }
        },
    });
}

let resultUpdateItem;

function updateItem(url, data, redirect, isAlert = true) {
    $.ajax({
        type: "POST",
        url: url,
        headers: {
            Authorization: token // Thêm token vào header Authorization
        },
        data: data,
        success: function (result) {
            resultUpdateItem = result;
            //use sAlert if need change any so dont need display notify update success
            if (isAlert) {
                alert("Update successfully !!!");
            }
            if (redirect) {
                window.location.replace(redirect);
            }
        },
        error: function (xhr, status, error) {
            throwError(xhr.responseJSON.message);
        }
    });
}

let resultDetailItem;

function getItem(url, data, redirect) {
    return Promise.resolve(
        $.ajax({
            type: "GET",
            url: url,
            headers: {
                Authorization: token
            },
            data: data,
            success: function (result) {
                resultDetailItem = result;
            },
            error: function (xhr, status, error) {
                throwError(xhr.responseJSON.message);
            }
        })
    ).then(data => {
        return data;
    });
}

let resultDeleteItem;

function deleteItem(url, id, redirect) {
    $.ajax({
        type: "DELETE",
        url: url + "/" + id,
        headers: {
            Authorization: token
        },
        success: function (result) {
            resultDeleteItem = result;
            alert("Delete successfully !!!");
            if (redirect) {
                window.location.replace(redirect);
            }
        },
        error: function (xhr, status, error) {
            throwError(xhr.responseJSON.message);
        }
    });
}

function login() {
    let data = {
        username: $("#username-input").val(),
        password: $("#password-input").val(),
    }
    let errorInput = $("#error");
    if (!data.username) {
        errorInput.html(listError.EM03)
        return;
    }
    if (!data.password) {
        errorInput.html("Password cannot be empty");
        return;
    }

    $.ajax({
        type: "POST",
        url: "/user/login",
        data: JSON.parse(JSON.stringify(data)),
        success: function (result) {

            if (result.name) {
                localStorage.setItem("user_name", result.name);
                localStorage.setItem("token", result.token);
                localStorage.setItem("user_info", JSON.stringify(result));
                showSuccessModal("Login successfully !!!");
                //delay 2s to display modal
                setTimeout(function () {
                    window.location.replace("/user/list");
                }, 1000);
            } else {
                showErrorModal(listError.EM59)
            }
        },
        error: function (xhr) {
            var errorText = parseInt(xhr.responseJSON.message);
            if (errorText === 402) {
                showErrorModal(listError.EM59)
            }
        }
    });
}

//Modal notify error
function showErrorModal(errorMessage) {
    let errorNotified = $("#errorNotified");
    $("#title-model-error").text("Error");
    errorNotified.text(errorMessage);
    $("#errorModal").modal("show");
}

//Modal notify success
function showSuccessModal(successMessage) {
    let successNotified = $("#successNotified");
    $("#title-model-success").text("Success");
    successNotified.text(successMessage);
    $("#successModal").modal("show");
}

function logout() {
    // Lấy token từ localStorage
    const token = localStorage.getItem("token");

    // Kiểm tra xem token có tồn tại không
    if (token) {
        // Gửi yêu cầu đăng xuất đến backend
        $.ajax({
            type: "POST",
            url: "/user/logout",
            headers: {
                Authorization: token
            },
            success: function (result) {
                console.log("Logout successful");                // Sau khi xử lý, xóa token từ localStorage và chuyển hướng đến trang đăng nhập
                localStorage.clear();
                window.location.replace("/user/login");
            },
            error: function (error) {
                console.error("Logout failed", error);
            },
        });
    } else {
        // Nếu không có token, chỉ chuyển hướng đến trang đăng nhập
        window.location.replace("/user/login");
    }
}
