<?php

    include('connect_database.php'); // connect to database
    include('config.php');

    // start the session
    session_start();

    // get login account information
    $login = $_SESSION['login'];

    // to send to other pages
    $_SESSION['login'] = $login; // pass login information to the next page

    // get date
    if (isset($_POST['reservationDateSelect'])) {
        $reservation_date = $_POST['reservationDateSelect'];
    } else {
        $reservation_date = NULL;
    }

    $sql_get_all_my_reservations = "SELECT * FROM $db_table_reservations WHERE login_account='$login' AND reservation_date='$reservation_date'";

    $result = mysqli_query($conn, $sql_get_all_my_reservations);

    // check if there are any results in the sql query
    if(mysqli_num_rows($result) == 0) { // no reservations were made
        $login_account = "";
        $field_number = "";
        $reservation_date = "";
        $reservation_hour = "";
    } else { // il y a une reservation
        $result = mysqli_fetch_array($result);
        $login_account = $result['login_account'];
        $field_number = $result['field_number'];
        $reservation_date = $result['reservation_date'];
        $reservation_hour = $result['reservation_hour'];
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
                listReservationsForADay(login, field_number, reservation_date, reservation_hour);
            </script>
        </div>

    </body>
</html>
