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

    // get begin hour
    if (isset($_POST['availabilityHourSelectBegin'])) {
        $hour_begin = $_POST['availabilityHourSelectBegin'];
    } else {
        $hour_begin = NULL;
    }

    // get end hour
    if (isset($_POST['availabilityHourSelectEnd'])) {
        $hour_end = $_POST['availabilityHourSelectEnd'];
    } else {
        $hour_end = NULL;
    }

    if ($hour_begin == $hour_end) {
        echo "<script type=\"text/JavaScript\">
                alert(\"Begin hour and end hour cannot be the same.\");
                window.location.replace('admin.php');
             </script>";
    } else {

        $sql_list_available_fields_interval = "SELECT * FROM $db_table_reservations WHERE reservation_hour BETWEEN '$hour_begin' AND '$hour_end' AND reservation_date='$today'";

        $result_list_available_fields_interval = mysqli_query($conn, $sql_list_available_fields_interval);

        $tab_available_fields =  [
            1 => [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            2 => [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            3 => [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            4 => [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            5 => [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
        ];
        while ($row = mysqli_fetch_array($result_list_available_fields_interval)) {
            $reservation_hour = convertTimeToInt($row['reservation_hour']);
            $tab_available_fields[(int)$row['field_number']][$reservation_hour - 6] = 0;
        }

    }

    function convertTimeToInt($time) {
        if ($time == "06:00:00")
            return 6;
        if ($time == "07:00:00")
            return 7;
        if ($time == "08:00:00")
            return 8;
        if ($time == "09:00:00")
            return 9;
        if ($time == "10:00:00")
            return 10;
        if ($time == "11:00:00")
            return 11;
        if ($time == "12:00:00")
            return 12;
        if ($time == "13:00:00")
            return 13;
        if ($time == "14:00:00")
            return 14;
        if ($time == "15:00:00")
            return 15;
        if ($time == "16:00:00")
            return 16;
        if ($time == "17:00:00")
            return 17;
        if ($time == "18:00:00")
            return 18;
        if ($time == "19:00:00")
            return 19;
        if ($time == "20:00:00")
            return 20;
        return NULL;
    }

// $fields[$row["terrain"]][$row["time"] - 6]
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
                let array_availability = <?php echo json_encode($tab_available_fields)?>;
                let begin_hour = <?php echo json_encode($hour_begin)?>;
                let end_hour = <?php echo json_encode($hour_end)?>;
                listAvailableFieldsAdmin (array_availability, begin_hour, end_hour);
            </script>
        </div>

    </body>
</html>

