<?php if (isset($_GET['source'])) die(highlight_file(__FILE__, 1)); ?>
<?php
try {
    // config.php
    $db_user = "root";
    $db_host = "localhost";
    $db_name = "cepsum";
    $db_table_users = "users";
    $db_table_reservations = "reservations";
//    $db_user = "voiculee";
//    $db_host = "www-ens.iro.umontreal.ca";
//    $db_password = "leep114V";
//    $db_name = "voiculee_cepsum";
//    $db_table_users = "users";
//    $db_table_reservations = "reservations";
} catch (Exception $e) {
    // config.php
    $db_user = "root";
    $db_host = "localhost";
    $db_name = "cepsum";
    $db_table_users = "users";
    $db_table_reservations = "reservations";
}
//$db_user = "voiculee";
//$db_host = "www-ens.iro.umontreal.ca";
//$db_password = "Lexar4zq";
//$db_password = "recette quelle a donnée";
//$db_name = "voiculee_cepsum";
//$db_table_users = "users";
//$db_table_reservations = "reservations";

?>
