<?php

    include('connect_database.php'); // connect to database
    include('config.php');

    // start the session
    session_start();

    // get login account information
    $login = $_SESSION['login'];

    // to send to other pages
    $_SESSION['login'] = $login; // pass login information to the next page

    // get login account
    if (isset($_POST['inputLogin'])) {
        $login_account = $_POST['inputLogin'];
    } else {
        $login_account = NULL;
    }

    // get field number
    if (isset($_POST['inputField'])) {
        $field_number = $_POST['inputField'];
    } else {
        $field_number = NULL;
    }

    // get reservation date
    if (isset($_POST['inputReservationDate'])) {
        $reservation_date = $_POST['inputReservationDate'];
    } else {
        $reservation_date = NULL;
    }

    // get reservation hour
    if (isset($_POST['inputReservationHour'])) {
        $reservation_hour = $_POST['inputReservationHour'];
    } else {
        $reservation_hour = NULL;
    }

    echo $login_account;
    echo $field_number;
    echo $reservation_date;
    echo $reservation_hour;

?>