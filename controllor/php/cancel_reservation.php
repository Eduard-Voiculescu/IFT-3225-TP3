<?php

    include('connect_database.php'); // connect to database
    include('config.php');

    // start the session
    session_start();

    // get login account information
    $login = $_SESSION['login'];

    // to send to other pages
    $_SESSION['login'] = $login; // pass login information to the next page

    // show a list of all the reservations
    $date = date("Y-m-d");

    $sql_show_all_reservation_for_today_cancel = "SELECT * FROM $db_table_reservations WHERE login_account='$login' AND reservation_date='$date'";
    $result_show_all_reservation_for_today_cancel = mysqli_query($conn, $sql_show_all_reservation_for_today_cancel);

    // check if there are any results in the sql query
    if(mysqli_num_rows($result_show_all_reservation_for_today_cancel) == 0) { // no reservations were made
        $login_account = "";
        $field_number = "";
        $reservation_date = "";
        $reservation_hour = "";
    } else { // il y a une reservation
        $result_show_all_reservation_for_today_cancel = mysqli_fetch_array($result_show_all_reservation_for_today_cancel);
        $login_account = $result_show_all_reservation_for_today_cancel['login_account'];
        $field_number = $result_show_all_reservation_for_today_cancel['field_number'];
        $reservation_date = $result_show_all_reservation_for_today_cancel['reservation_date'];
        $reservation_hour = $result_show_all_reservation_for_today_cancel['reservation_hour'];
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
        <script>generate_user_html_template();</script>
        <div class="container" id="main_div">
            <script type="text/javascript">
                let login = "<?php echo $login_account; ?>";
                let field_number = "<?php echo $field_number; ?>";
                let reservation_date = "<?php echo $reservation_date; ?>";
                let reservation_hour = "<?php echo $reservation_hour; ?>";
                cancelReservationHTML(login, field_number, reservation_date, reservation_hour);
            </script>
        </div>

    </body>
</html>
