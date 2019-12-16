<?php
session_start();
if($_SESSION['user'] == 'admin'){
} else if($_SESSION['user'] == 'normal') {
} else {
    header("Location:index.php");
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Vakantie 2019</title>
    <link rel="stylesheet" type="text/css" href="style.css">
    <link rel="stylesheet" type="text/css" href="table.css">
</head>
<body>
<div class="wrapper">
    <div class="nav">
        <ul>
            <li><a href="home.php">Home</a></li>
            <li><a href="schedule.php">Programma</a></li>
            <li><a href="nights.php">Overnachtingen</a></li>
            <li><a href="boat.php">Boot</a></li>
            <li><a href="train.php">Trein</a></li>
            <li><a href="logout.php">Log uit</a></li>
        </ul>
    </div>
</div>
<br/>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <div id="boatinfo">
    <table align="center">
        <tr>
            <td>Vertrektijd: </td>
            <td>Aankomsttijd: </td>
            <td>Boot: </td>
            <td>Ontbijt: </td>
            <td>Vertrekhaven: </td>
            <td>Aankomsthaven: </td>
        </tr>
        <tr>
            <td>//</td>
            <td>//</td>
            <td>//</td>
            <td>//</td>
            <td><a href="//">//</a></td>
            <td><a href="//">//</a></td>
        </tr>
    </table>
    </div>
</body>
</html>