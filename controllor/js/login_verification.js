$(document).ready(function() {
    $('#login_account').change(function () {
        // call ajax to check login in database
        validateLogin();
    });
});

function validateLogin () {
    var login = document.getElementById("login_account").value;
    $.ajax({
        type : 'POST',
        url: '../controllor/php/login_validate.php',
        data : {
            login : login
        },
        success: function (response) {            
            
            if (response == 0) { // login account is not in the database
                document.getElementById('loginAccountMessage').innerHTML = "";
            } else if (response == 1){ // login account is in the database
                document.getElementById('loginAccountMessage').innerHTML = "Login Account Already Exists";
                document.getElementById('loginAccountMessage').style.color = "#ff0000";
            }            
        }
    });
}
