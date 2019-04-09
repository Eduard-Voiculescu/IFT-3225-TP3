<?php
    session_start();

    // destroy the session, have to log back in
    if(session_destroy()) {
        header("Location: ../../view/index.html");
    }

?>