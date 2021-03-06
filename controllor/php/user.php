<?php

    // start the session
    session_start();

    // get login account information
    $login = $_SESSION['login'];

    // get is admin
    $admin = $_SESSION['is_admin'];

    // to send to other pages
    $_SESSION['login'] = $login; // pass login information to the next page
    $_SESSION['is_admin'] = $admin;

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
            let login_check = "<?php echo $admin; ?>";
            if (login_check === "1") {
                generate_admin_html_template();
            } else {
                generate_user_html_template();
            }
        </script>
        <div class="container" id="main_div"></div>
    </body>
</html>
