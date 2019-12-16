<?php
    session_start();
    if($_SESSION['user'] == 'admin'){
        echo "Welkom op deze pagina, je kan dingen bewerken";
    } else if($_SESSION['user'] == 'normal') {
        echo "Welkom op deze pagina";
    } else {
        header("Location:index.php");
    }
    $which = $_GET['day'];
$file = file_get_contents("../jsons/" . $which . ".json");
$json = json_decode($file, true);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Vakantie 2019</title>
    <link rel="stylesheet" type="text/css" href="../table.css">
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
<table>
    <tr>
        <th>Dag: </th>
        <th>Datum: </th>
        <th>Reisroute/Activiteit: </th>
        <th>Aantal km: </th>
        <th>Reistijd: </th>
        <th>Overnachting: </th>
    </tr>
    <tr>
        <td><?php echo $json['day']?></td>
        <td><?php echo $json['date']?></td>
        <td><?php echo $json['route']?></td>
        <td><?php echo $json['km']?></td>
        <td><?php echo $json['time']?></td>
        <td><a href="../overnachtingen/<?php echo $json['place']?>"><?php echo $json['place']?></a></td>
    </tr>
</table>
    <img class="img" src="../uploads/<?php echo $json['number']?>1.png" alt="1">
    <?php if($_SESSION['user'] == 'admin') {
        echo '<form action="../upload.php?file=" . $json['number'] . "1" method="post" enctype="multipart/form-data">;';
        echo '<input type="file" name="file">';
        echo '<button type="submit" name="submit">Upload Image</button>';
        echo '</form>';}?>
    <img class="img" src="../uploads/<?php echo $json['number']?>2.png" alt="2">
    <?php if($_SESSION['user'] == 'admin') {
        echo '<form action="../upload.php?file=" . $json['number'] . "2 method="post" enctype="multipart/form-data">;';
        echo '<input type="file" name="file">';
        echo '<button type="submit" name="submit">Upload Image</button>';
        echo '</form>';}?>
    <img class="img" src="../uploads/<?php echo $json['number']?>3.jpg" alt="3">
    <?php if($_SESSION['user'] == 'admin') {
        echo '<form action="../upload.php?file=" . $json['number'] . "3" method="post" enctype="multipart/form-data">;';
        echo '<input type="file" name="file">';
        echo '<button type="submit" name="submit">Upload Image</button>';
        echo '</form>';}?>
    <img class="img" src="../uploads/<?php echo $json['number']?>4.png" alt="4">
    <?php if($_SESSION['user'] == 'admin') {
        echo '<form action="../upload.php?file=" . $json['number'] . "4" method="post" enctype="multipart/form-data">;';
        echo '<input type="file" name="file">';
        echo '<button type="submit" name="submit">Upload Image</button>';
        echo '</form>';}?>
    <img class="img" src="../uploads/<?php echo $json['number']?>5.png" alt="5">
    <?php if($_SESSION['user'] == 'admin') {
        echo '<form action="../upload.php?file=" . $json['number'] . "5" method="post" enctype="multipart/form-data">;';
        echo '<input type="file" name="file">';
        echo '<button type="submit" name="submit">Upload Image</button>';
        echo '</form>';}?>
</body>
</html>
