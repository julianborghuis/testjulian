<?php
    error_reporting(E_ERROR);
    session_start();
    if($_SESSION['user'] == 'admin'){
        echo "Welkom op deze pagina, je kan dingen bewerken";
    } else if($_SESSION['user'] == 'normal') {
        echo "Welkom op deze pagina";
    } else {
        header("Location:index.php");
    }
?>
<html>
    <head>
        <title>Vakantie 2019</title>
        <link rel="stylesheet" type="text/css" href="style.css">
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
    <a href="testing.php">test</a>
    <?php
            $days = array("77", "201","202", "203", "204", "205", "206", "207",
                "208", "209", "210", "211", "212", "213","214",
                "215", "216", "217", "218", "219", "220", "221");
            $mydate=getdate(date("U"));
            $yday = $mydate[yday];
        if(in_array($yday, $days)) {
            $_SESSION['opvak'] = "nu";
        } else {
            $_SESSION['opvak'] = "niet";
        }
        echo "Het is vandaag $mydate[weekday], $mydate[mday] $mydate[month], $mydate[year]";
        echo "<br/>";
        echo "Je bent " . $_SESSION['opvak'] . " op vakantie!";
    ?>
    </body>
</html>
