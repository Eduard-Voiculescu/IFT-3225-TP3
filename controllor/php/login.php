<?php

    include('connect_database.php'); // connect to database
    include('config.php');

    // get login account information
    if (isset($_POST['login-info'])) {
        $login = $_POST['login-info'];
    } else {
        $login = NULL;
    }

    // get password
    if (isset($_POST['password-info'])) {
        $password = $_POST['password-info'];
    } else {
        $password = NULL;
    }

    // now lets check if username and password are correct in the database
    echo "login is $login";
    echo "<br />";
    echo "password is $password";







//    header( 'Location: ../../view/login.html' ) ;
?>
