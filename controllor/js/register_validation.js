$(document).change(function () {
    validate();
});
/**
 * This file validates the register information
 * 
 */

function validate() {

    var valid_form = false;
    var valid_form_num = 0;

    var messages = {
        name : "Please enter your name.",
        last_name : "Please enter your last name.",
        login_account : {
            login_account_message : "Please enter a login account.",
            minLength : "Your login account must be atleast 4 characters long."
        },
        password : {
            password_message : "Please enter a password.",
            minLength : "Your password must be atleast 4 characters long."
        },
        retype_password : {
            retype_password_message : "Please enter a password",
            error_message : "Does not match above password.",
            minLength : "Your password must be atleast 4 characters long."
        }
    };

    var red_color = "#ff0000";
    
    // input variables 
    var name = document.getElementById('name');
    var last_name = document.getElementById('last_name');
    var login_account = document.getElementById('login_account');
    var password = document.getElementById('password');
    var retype_password = document.getElementById('retype_password');

    // span variables 
    var name_span = document.getElementById('nameMessage');
    var last_name_span = document.getElementById('lastNameMessage');
    var login_account_span = document.getElementById('loginAccountMessage');
    var password_span = document.getElementById('passwordMessage');
    var retype_password_span = document.getElementById('retypePassordMessage');

    // Check name
    if (name.value == "") { // invalid
        name_span.style.color = red_color;
        name_span.innerHTML = messages["name"];
    } else { // valid
        name_span.innerHTML = "";
        valid_form_num++;
    }

    // check last name
    if (last_name.value == "") { // invalid 
        last_name_span.style.color = red_color;
        last_name_span.innerHTML = messages["last_name"];
    } else { // valid 
        last_name_span.innerHTML = "";
        valid_form_num++;
    }

    // check login account
    if (login_account.value == "") { // invalid 
        login_account_span.style.color = red_color;
        login_account_span.innerHTML = messages["login_account"]["login_account_message"];
    } else if (login_account.value.length < 4){ // invalid
        login_account_span.style.color = red_color;
        login_account_span.innerHTML = messages["login_account"]["minLength"];
    } else { // valid
        // ajouter AJAX ?
        login_account_span.innerHTML = "";
        valid_form_num++;
    }

    // check password 
    if (password.value == "") { // invalid
        password_span.style.color = red_color;
        password_span.innerHTML = messages["password"]["password_message"];
    } else if (password.value.length < 4){ // invalid 
        password_span.style.color = red_color;
        password_span.innerHTML = messages["password"]["minLength"];
    } else { // valid 
        password_span.innerHTML = "";
        valid_form_num++;
    }

    // check retype password 
    if (retype_password.value == "") { // invalid
        retype_password_span.style.color = red_color;
        retype_password_span.innerHTML = messages["password"]["password_message"];
    } else if (retype_password.value.length < 4){ // invalid 
        retype_password_span.style.color = red_color;
        retype_password_span.innerHTML = messages["password"]["minLength"];
    } else { // valid 
        retype_password_span.innerHTML = "";
        valid_form_num++;
    }

    // check if password == retype password
    if (password.value != retype_password.value && valid_form_num == 5) {
        retype_password_span.style.color = red_color;
        retype_password_span.innerHTML = messages["retype_password"]["error_message"];
        valid_form_num--;
    }

    // check if logn exists in database 
    

    if (valid_form_num == 5){
        valid_form = true;
    }

    return valid_form;
}
