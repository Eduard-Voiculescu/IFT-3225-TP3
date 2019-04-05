<?php

    include('connect_database.php'); // connect to database
    include('config.php');

    // get login account
    if (isset($_POST['login'])) {
        $login_account = $_POST['login'];
    } else {
        $login_account = NULL;
    }

    $sql_reguest = "SELECT name FROM $db_table_users WHERE login='$login_account";
    
    $result = mysqli_query($conn, $sql_insert_request);

    if ($result != NULL) { // login already in database 
        echo json_encode(0);
    } else { // login not in database
        echo json_encode(1);
    }

    // mysqli_close($conn);

?>