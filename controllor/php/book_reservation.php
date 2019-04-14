<?php

    include('connect_database.php'); // connect to database
    include('config.php');

    // start the session
    session_start();

    // get login account information
    $login = $_SESSION['login'];

    // to send to other pages
    $_SESSION['login'] = $login; // pass login information to the next page

    // reservations table layout [login_number (varchar 100), field_number (varchar 1), reservation_date (date), reservation_hour (varchar 10)]

    // get field number
    if (isset($_POST['fieldNumberSelect'])) {
        $field_number = $_POST['fieldNumberSelect'];
    } else {
        $field_number = NULL;
    }

    // get reservation date
    if (isset($_POST['reservationDateSelect'])) {
        $reservation_date = $_POST['reservationDateSelect'];
    } else {
        $reservation_date = NULL;
    }

    // get reservation hour
    if (isset($_POST['reservationHourSelect'])) {
        $reservation_hour = $_POST['reservationHourSelect'];
    } else {
        $reservation_hour = NULL;
    }

    // valid_insert is by default true
    $valid_insert = true;
    $valid_insert_available = true;

    // check that the user has not already made a reservation that day
    $sql_insert_check_constraints_login_account = "SELECT * from $db_table_reservations WHERE login_account='$login'";
    $result_insert_check_constraints_login = mysqli_query($conn, $sql_insert_check_constraints_login_account);


    if ($result_insert_check_constraints_login) { // there is an entry of that login account in the reservations table
        while ($row = mysqli_fetch_array($result_insert_check_constraints_login)) { // check each entry of that login
            if ($row['reservation_date'] == $reservation_date) {
                $valid_insert = false;
                break;
            }
        }
    }

    // check that the field is not already booked at the date and that hour
    $sql_insert_check_constraints_reservation_not_already_made = "SELECT * from $db_table_reservations 
                WHERE field_number='$field_number' AND reservation_date='$reservation_date' AND reservation_hour='$reservation_hour'";
    $result_insert_check_constraints_reservation_not_already_made = mysqli_query($conn, $sql_insert_check_constraints_reservation_not_already_made);

    if (mysqli_num_rows($result_insert_check_constraints_reservation_not_already_made) != 0) { // a reservation has already been made on that specific date and hour
        $valid_insert_available = false;
    }

    if ($valid_insert_available) {
        if ($valid_insert) {
            $sql_insert_into_reservation = "INSERT into $db_table_reservations (login_account, field_number, reservation_date, reservation_hour) VALUES ('$login', '$field_number', '$reservation_date', '$reservation_hour')";
            $result = mysqli_query($conn, $sql_insert_into_reservation);
            header("Location: user.php");
        } else {
            echo "<script type=\"text/JavaScript\">
                alert(\"You have already made a reservation for today and cannot make another one. Please cancel a reservation, should you want to make another one.\");
                window.location.replace('user.php');
             </script>";
        }
    } else {
        $booked_message = "The field $field_number at $reservation_hour on $reservation_date has already been booked.";
        echo "<script type=\"text/JavaScript\">
                alert('$booked_message');
                window.location.replace('user.php');
             </script>";
    }

?>

