<?php
session_start();
if($_SESSION['user'] == 'admin'){
} else if($_SESSION['user'] == 'normal') {
} else {
    header("Location:index.php");
}
?>
<!DOCTYPE html>
<html>
    <head>
        <title>Vakantiesite - trein</title>
        <link rel="stylesheet" href="style.css">
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
        <br>
        <br>
        <br>
        <br>
        <div id="traininfo">
            <h3>Maatschappij: //</h3>
            <h3>Trein: //</h3>
            <h3>Vetrekttijd: //</h3>
            <h3>Aankomsttijd: //</h3>
            <h3>Stoelnummbers: //</h3>
            <h3>Treinstelnummer: //</h3>
            <h3><a href="//">Stations</a></h3>
        </div>
    </body>
</html>
