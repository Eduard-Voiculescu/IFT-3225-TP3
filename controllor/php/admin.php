<?php

    // start the session
    session_start();

    // get login account information
    $login = $_SESSION['login'];

    // get password
    $password = $_SESSION['password'];

    echo "Welcome $login";
    echo "<br />";
    echo "Your password is $password";

    //    session_destroy(); // don't forget to destroy the session once everything is generated



?>