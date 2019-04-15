<?php
    include('config.php'); //config
    // Connect to the database
//    $conn = mysqli_connect($db_host, $db_user, "", $db_name) or die(mysqli_connect_error()); // pour localhost
    $conn = mysqli_connect($db_host, $db_user, $db_password, $db_name) or die(mysqli_connect_error());
    if (is_null($conn)) 
      die("problème de connection ". mysqli_error());
    
?>