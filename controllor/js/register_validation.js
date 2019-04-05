/**
 * This file validates the register information
 * 
 */

$(document).ready(function() {
    $('#login_account').change(function () {
        // call ajax to check login in database
        validateLogin();
    });
    $('#name').change(function() {
        // call ajax to validate name
        validName();
    });
    $('#last_name').change(function() {
        // call ajax to validate last name
        validLastName();
    });
    $('#password').change(function() {
        // call ajax to validate password
        validPassword();
    });
    $('#retype_password').change(function() {
        // call ajax to validate retype_password
        validRetypePassword();
    });

});

function validateLogin () {
    let login = document.getElementById("login_account");
    let login_account_span = document.getElementById('loginAccountMessage');

    let message = {
        login_account : {
            login_account_message : "Please enter a login account.",
            minLength : "Your login account must be atleast 4 characters long."
        }
    };

    let red_color = "#ff0000";

    // check login account
    if (login.value === "") { // invalid
        login_account_span.style.color = red_color;
        login_account_span.innerHTML = message["login_account"]["login_account_message"];
        return false;
    } else if (login.value.length < 4){ // invalid
        login_account_span.style.color = red_color;
        login_account_span.innerHTML = message["login_account"]["minLength"];
        return false;
    } else { // valid
        $.ajax({
            type : 'POST',
            url: '../controllor/php/login_validate.php',
            data : {
                login : login.value
            },
            success: function (response) {

                if (response == 0) { // login account is not in the database
                    login_account_span.innerHTML = "";
                } else if (response == 1){ // login account is in the database
                    login_account_span.innerHTML = "Login Account Already Exists";
                    login_account_span.style.color = "#ff0000";
                }
            }
        });
    }

    // Puisque $.ajax c'est un call asynchrone, faire un return dans le if...else if statement du success
    // c'est inutile, puisqu'on sera déja sorti de la fonction.
    if (login_account_span.innerHTML === "")
      return true;
    else
        return false;
}

function validName(){

    let name = document.getElementById('name');
    let name_span = document.getElementById('nameMessage');

    let message = {
        name : "Please enter your name."
    };

    let red_color = "#ff0000";

    // Check name
    if (name.value === "") { // invalid
        name_span.style.color = red_color;
        name_span.innerHTML = message["name"];
        return false;
    } else { // valid
        name_span.innerHTML = "";
        return true;
    }
}

function validLastName() {
    let last_name = document.getElementById('last_name');
    let last_name_span = document.getElementById('lastNameMessage');

    let message = {
        last_name : "Please enter your last name."
    };

    let red_color = "#ff0000";

    // Check name
    if (last_name.value === "") { // invalid
        last_name_span.style.color = red_color;
        last_name_span.innerHTML = message["last_name"];
        return false;
    } else { // valid
        last_name_span.innerHTML = "";
        return true;
    }
}

function validPassword() {
    let password = document.getElementById('password');
    let password_span = document.getElementById('passwordMessage');

    let message = {
        password : {
            password_message : "Please enter a password.",
            minLength : "Your password must be at least 4 characters long."
        }
    };

    let red_color = "#ff0000";

    // check password
    if (password.value === "") { // invalid
        password_span.style.color = red_color;
        password_span.innerHTML = message["password"]["password_message"];
        return false;
    } else if (password.value.length < 4){ // invalid
        password_span.style.color = red_color;
        password_span.innerHTML = message["password"]["minLength"];
        return false;
    } else { // valid
        password_span.innerHTML = "";
        return true;
    }
}

function validRetypePassword() {
    let retype_password = document.getElementById('retype_password');
    let retype_password_span = document.getElementById('retypePasswordMessage');
    let password = document.getElementById('password');

    let message = {
        retype_password : {
            retype_password_message : "Please enter a password",
            error_message : "Does not match above password.",
            minLength : "Your password must be at least 4 characters long."
        }
    };

    let red_color = "#ff0000";

    // check retype password
    if (retype_password.value === "") { // invalid
        retype_password_span.style.color = red_color;
        retype_password_span.innerHTML = message["retype_password"]["retype_password_message"];
        return false;
    } else if (retype_password.value.length < 4){ // invalid
        retype_password_span.style.color = red_color;
        retype_password_span.innerHTML = message["retype_password"]["minLength"];
        return false;
    } else { // valid
        retype_password_span.innerHTML = "";
    }

    if (password.value !== retype_password.value) {
        retype_password_span.style.color = red_color;
        retype_password_span.innerHTML = message["retype_password"]["error_message"];
        return false;
    }
    return true;

}

function validate() {

    let valid_form = false;
    let valid_form_num = 0;

    if (validName())
        valid_form_num++;
    console.log(valid_form_num);

    if (validLastName())
        valid_form_num++;
    console.log(valid_form_num);

    if (validateLogin())
        valid_form_num++;
    console.log(valid_form_num);

    if (validPassword())
        valid_form_num++;
    console.log(valid_form_num);

    if (validRetypePassword())
        valid_form_num++;

    console.log(valid_form_num);
    if (valid_form_num === 5){
        valid_form = true;
    }

    return valid_form;
}
