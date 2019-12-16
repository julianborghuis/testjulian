<?php
session_start();
if(isset($_POST['password'])){
    if($_POST['password'] == '1'){
        header("Location:home.php");
        $_SESSION['user'] = 'normal';
    }
    else if($_POST['password'] == '2'){
        header("Location:home.php");
        $_SESSION['user'] = 'admin';
    }
    else {
        header("Location:index.php");
    }
} else {
    header("Location:index.php");
}
?>