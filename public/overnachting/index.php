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
$which = $_GET['place'];
$file = file_get_contents("../jsons/" . $which . ".json");
$json = json_decode($file, true);
?>
<html>
<head>
    <title>Vakantie 2019</title>
    <link rel="stylesheet" type="text/css" href="../style.css">
</head>
<body>
<div class="wrapper">
    <div class="nav">
        <ul>
            <li><a href="../home.php">Home</a></li>
            <li><a href="../schedule.php">Programma</a></li>
            <li><a href="../nights.php">Overnachtingen</a></li>
            <li><a href="../boat.php">Boot</a></li>
            <li><a href="../train.php">Trein</a></li>
            <li><a href="../logout.php">Log uit</a></li>
        </ul>
    </div>
</div>
<br/>
<h1><?php echo $json['name'];?></h1>
<h3>Adres: <?php echo $json['address'];?><br>
    Telefoon: <?php echo $json['telephone'];?><br/>
    Verblijfdatum: <?php echo $json['staydate'];?></h3><br/>
<h4><a href="<?php echo $json['site'];?>/">Website</a></h4>
</body>
</html>
