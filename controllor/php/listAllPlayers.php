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

    $sql_show_all_players = "SELECT * from $db_table_users";

    $result_list_all_players = mysqli_query($conn, $sql_show_all_players);

    $tab_name = array();
    $tab_last_name = array();
    $tab_login = array();
    $tab_password = array();
    $tab_isAdmin = array();

    if (mysqli_num_rows($result_list_all_players) != 0) { // there is at least 1 user
        while ($row = mysqli_fetch_array($result_list_all_players)) {
            array_push($tab_name, $row['name']);
            array_push($tab_last_name, $row['last_name']);
            array_push($tab_login, $row['login']);
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
<script>generate_admin_html_template();</script>
<div class="container" id="main_div">
    <script type="text/javascript">
        let array_name = <?php echo json_encode($tab_name); ?>;
        let array_last_name = <?php echo json_encode($tab_last_name); ?>;
        let array_login = <?php echo json_encode($tab_login); ?>;
        let array_password = <?php echo json_encode($tab_password); ?>;
        let array_isAdmin = <?php echo json_encode($tab_isAdmin); ?>;
        listAllPlayers(array_name, array_last_name, array_login, array_password, array_isAdmin);
    </script>
</div>
</body>
</html>
