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
    if (isset($_POST['availabilityDateSelect'])) {
        $availability_date = $_POST['availabilityDateSelect'];
    } else {
        $availability_date = NULL;
    }

    // get hour
    if (isset($_POST['availabilityHourSelect'])) {
        $availability_hour = $_POST['availabilityHourSelect'];
    } else {
        $availability_hour = NULL;
    }

    $sql_show_availabilities = "SELECT field_number, reservation_date, reservation_hour from $db_table_reservations 
        WHERE reservation_date='$availability_date' AND reservation_hour='$availability_hour'";

    $result_show_availabilities = mysqli_query($conn, $sql_show_availabilities);

    $tab_available = array('1', '2', '3', '4', '5');
    $field_1 = "1";
    $field_2 = "2";
    $field_3 = "3";
    $field_4 = "4";
    $field_5 = "5";

    if (mysqli_num_rows($result_show_availabilities) != 0) { // there is at least 1 reservation for the date and hour chosen
        while ($row = $result_array = mysqli_fetch_array($result_show_availabilities)) {
            $field_number = (int) $result_array['field_number'];
            unset($tab_available[$field_number - 1]);
            if ($field_number == 1)
                $field_1 = NULL;
            if ($field_number == 2)
                $field_2 = NULL;
            if ($field_number == 3)
                $field_3 = NULL;
            if ($field_number == 4)
                $field_4 = NULL;
            if ($field_number == 5)
                $field_5 = NULL;
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
        <script src="../js/generate_availability.js"></script>
        <!-- End JavaScript -->

        <title>
            CEPSUM - <?php echo $login; ?>
        </title>
    </head>
    <body>
    <script>
        let login_check = "<?php echo $login; ?>";
        if (login_check === "admin") {
            generate_admin_html_template();
        } else {
            generate_user_html_template();
        }
    </script>
        <div class="container" id="main_div">
            <script type="text/javascript">
                let field1 = "<?php echo $field_1; ?>";
                let field2 = "<?php echo $field_2; ?>";
                let field3 = "<?php echo $field_3; ?>";
                let field4 = "<?php echo $field_4; ?>";
                let field5 = "<?php echo $field_5; ?>";
                let date = "<?php echo $availability_date; ?>";
                let hour = "<?php echo $availability_hour; ?>";
                listAvailableFields(field1, field2, field3, field4, field5, date, hour);
            </script>
        </div>
    </body>
</html>
