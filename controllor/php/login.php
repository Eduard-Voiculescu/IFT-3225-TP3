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

    $sql_request = "SELECT * FROM $db_table_users WHERE login='$login'";

    $result = mysqli_query($conn, $sql_request);
    $result = mysqli_fetch_array($result);

    if ($result['password'] == $password) { // password is the same as the one in the database
        session_start();
        $_SESSION['login'] = $login; // pass login information to the next page
        $_SESSION['is_admin'] = $result['is_admin'];

        if ($login == "admin") { // the admin
            header( 'Location: admin.php');
        } else { // any other user
            header( 'Location: user.php');
        }

    } else { // now lets check if username and password are correct in the database
        // montrer un message quon peut pas se connecter
        echo "<script type=\"text/JavaScript\">
                alert(\"You have entered the wrong password. Please try again.\");
                window.location.replace('../../view/index.html');
             </script>";
    }

?>
