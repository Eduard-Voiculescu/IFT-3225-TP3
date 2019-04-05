$(document).ready(function() {
    $('login_account').change(function () {
        // call ajax to check login in database
        validateLogin();
    });
});

function validateLogin () {
    var login = document.getElementById("login_account");
    $.ajax({
        type : "POST",
        url: "../php/login_validate.php",
        data : {
            login : login
        },
        success: function (result) {
            console.log(login);
            if (result == 0) {

            } else if (result == 1){

            }
        }
    });
}
