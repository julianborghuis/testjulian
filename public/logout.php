<?php
/**
 * Created by PhpStorm.
 * User: Niek
 * Date: 16-3-2019
 * Time: 10:50
 */

session_start();
if($_SESSION['user'] == 'admin') {
    $_SESSION['user'] = "normal";
    header("Location:home.php");
    }
else if($_SESSION['user'] == 'normal') {
    $_SESSION['user'] = "none";
    header("Location:index.php");
} else if($_SESSION['user'] == 'nome') {
    header("Location:index.php");
}
?>