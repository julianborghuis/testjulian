<?php
$to = "";
$subject = "Een klein mailtje";
$txt = $_GET['bericht'];
$headers = "From: prive";

mail($to,$subject,$txt,$headers);
?>