<?php
/**
 * Created by PhpStorm.
 * User: Niek
 * Date: 16-3-2019
 * Time: 11:14
 */
session_start();
if($_SESSION['user'] == 'admin') {
} else if($_SESSION['user'] == 'normal') {
} else {
    header("Location:index.php");
}
?>
<html>
    <head>
        <title>Vakantie 2019 - programma</title>
        <link rel="stylesheet" type="text/css" href="style.css">
        <link rel="stylesheet" type="text/css" href="table.css">

    </head>
    <body>
        Dagprogramma
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
        <table>
            <tr>
                <th>Dag: </th>
                <th>Datum: </th>
                <th>Reisroute/Activiteit: </th>
                <th>Overnachting: </th>
                <th>Aantal km: </th>
                <th>Reistijd: </th>
            </tr>
            <tr>
                <td>Maandag</td>
                <td>1 April</td>
                <td>Vertrek naar london</td>
                <td><a href="//">Hoi</a></td>
                <td>10</td>
                <td>10</td>
            </tr>
        </table>
    </body>
</html>
