<?php

    include('connect_database.php'); // connect to database
    include('config.php');

    // get name
    if (isset($_POST['name'])) {
        $name = $_POST['name'];
    } else {
        $name = NULL;
    }

    // get last name
    if (isset($_POST['last_name'])) {
        $last_name = $_POST['last_name'];
    } else {
        $last_name = NULL;
    }

    // get login account
    if (isset($_POST['login_account'])) {
        $login_account = $_POST['login_account'];
    } else {
        $login_account = NULL;
    }

    // get password
    if (isset($_POST['password'])) {
        $password = $_POST['password'];
    } else {
        $password = NULL;
    }

    // users table -> (name, last_name, login, password, is_admin)
    // to add an admin uncomment first line
    //    $sql_insert_request = "INSERT into $db_table_users (name, last_name, login, password, is_admin) VALUES ('$name', '$last_name', '$login_account', '$password', TRUE)";
    $sql_insert_request = "INSERT into $db_table_users (name, last_name, login, password, is_admin) VALUES ('$name', '$last_name', '$login_account', '$password', FALSE)";
    mysqli_query($conn, $sql_insert_request);

    // mysli_close($conn);

    header("Location: ../../view/index.html");

?>