<?php
    include('connect_database.php'); // connect to database
    include('config.php');

    // start the session
    session_start();

    // get login account information
    $login = $_SESSION['login'];

    // get is admin
    $admin = $_SESSION['is_admin'];

    // to send to other pages
    $_SESSION['login'] = $login; // pass login information to the next page
    $_SESSION['is_admin'] = $admin;

    // get today date
    $today = date("Y-m-d");

    $sql_list_all_booked_fields = "SELECT * FROM $db_table_reservations WHERE reservation_date='$today'";

    $result_list_all_booked_fields = mysqli_query($conn, $sql_list_all_booked_fields);

    // array to put in the information of the users that have booked a field today
    $tab_login = array();

    // array of the field number that was booked
    $tab_field_number = array();

    // array of the reservation hour that was booked
    $tab_reservation_hour = array();

    // array of the reservation hour that was booked
    $tab_reservation_date = array();

    if (mysqli_num_rows($result_list_all_booked_fields) != 0) { // there is a booked field today
        while ($row = mysqli_fetch_array($result_list_all_booked_fields)) {
            array_push($tab_login, $row['login_account']);
            array_push($tab_field_number, $row['field_number']);
            array_push($tab_reservation_hour, $row['reservation_hour']);
            array_push($tab_reservation_date, $row['reservation_date']);
        }
    }

    // create tables containing information of each user that booked a field
    $tab_name = array();
    $tab_last_name = array();
    $tab_password = array();
    $tab_isAdmin = array();

    foreach ($tab_login as $val) {
        $sql_get_information_from_users = "SELECT * FROM $db_table_users WHERE login='$val'";
        $result_get_information_from_users = mysqli_query($conn, $sql_get_information_from_users);

        if (mysqli_num_rows($result_get_information_from_users) != 0) {
            $row = mysqli_fetch_array($result_get_information_from_users);
            array_push($tab_name, $row['name']);
            array_push($tab_last_name, $row['last_name']);
            array_push($tab_password, $row['password']);
            array_push($tab_isAdmin, $row['is_admin']);
        }
    }

?>

<html>
    <head>
        <!-- Begin css stylesheets-->
        <link rel="stylesheet" type="text/css" href="../../view/style/user.css"/>
        <link rel="stylesheet" href="../../view/style/bootstrap/css/bootstrap.min.css">
        <!-- End css stylesheets-->

        <!-- Being JavaScript -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
        <script src="../../view/style/bootstrap/js/bootstrap.min.js"></script>
        <script src="../js/generate_user_html_template.js"></script>
        <script src="../js/generate_admin_html_template.js"></script>
        <script src="../js/generate_my_reservations_html.js"></script>
        <script src="../js/divContentInformation.js"></script>
        <script src="../js/generate_book_a_reservation_html.js"></script>
        <script src="../js/generate_cancel_reservation_html.js"></script>
        <script src="../js/generate_availability.js"></script>
        <!-- End JavaScript -->

        <title>
            CEPSUM - <?php echo $login; ?>
        </title>
    </head>
    <body>
        <script>
            generate_admin_html_template();
        </script>
        <div class="container" id="main_div">
            <script type="text/javascript">
                let array_login = <?php echo json_encode($tab_login); ?>;
                let array_field_number = <?php echo json_encode($tab_field_number); ?>;
                let array_reservation_hour = <?php echo json_encode($tab_reservation_hour); ?>;
                let array_reservation_date = <?php echo json_encode($tab_reservation_date); ?>;
                let array_name = <?php echo json_encode($tab_name); ?>;
                let array_last_name = <?php echo json_encode($tab_last_name); ?>;
                let array_password = <?php echo json_encode($tab_password); ?>;
                let array_isAdmin = <?php echo json_encode($tab_isAdmin); ?>;
                listAllBookedFields(array_login, array_field_number, array_reservation_hour, array_reservation_date, array_name, array_last_name, array_password, array_isAdmin);
            </script>
        </div>

    </body>
</html>
