/**
 * This file validates the login information
 *
 */

$(document).ready(function () {

    let login_field = false;
    let password_field = false;

    $('#login-info').change(function () {
        login_field = validate_login_information();
    });
    $('#password-info').change(function () {
        password_field = validate_password_information()
    });

    return login_field && password_field;
});

function validate_login_information() {
    // login
    let login = document.getElementById('login-info');
    let login_span = document.getElementById('login_info_message');

    let messages = {
        login_account_info: "Please enter a login account.",
        password_account_info: "Please enter a password."
    };

    let red_color = "#ff0000";

    if (login.value === "") { // no entry in the login field
        login_span.innerHTML = messages["login_account_info"];
        login_span.style.color = red_color;
        return false;
    } else {
        $.ajax({
            type : 'POST',
            url: '../controllor/php/login_validate.php',
            data : {
                login : login.value
            },
            success: function (response) {
                /**
                 * login_validate.php will return a response of 1 if login is in data base
                 * and a 0 if user is not in database
                 * */
                if (response == 0) { // login account is not in the database

                    login_span.innerHTML = "Login Account does not exist.";
                    login_span.style.color = "#ff0000";

                } else if (response == 1){ // login account is in the database

                    login_span.innerHTML = "";

                }
            }
        });
    }

    // Puisque $.ajax c'est un call asynchrone, faire un return dans le if...else if statement du success
    // c'est inutile, puisqu'on sera déja sorti de la fonction.
    if (login_span.innerHTML === "")
        return true;
    else
        return false;

}

function validate_password_information() {
    // password
    let password = document.getElementById('password-info');
    let password_span = document.getElementById('password_info_message');

    let message = {
        password_account_info: "Please enter a password."
    };

    let red_color = "#ff0000";

    // check the password field
    if (password.value === "") { // simply check if password field is empty
        password_span.innerHTML = message['password_account_info'];
        password_span.style.color = red_color;
        return false;
    } else {
        password_span.innerHTML = "";
        return true;
    }

}