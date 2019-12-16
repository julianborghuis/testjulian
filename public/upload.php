<?php
session_start();
//$which = $_SESSION[image];
$which = $_GET['file'];
/**
 *
 * Created by PhpStorm.
 * User: Niek
 * Date: 16-3-2019
 * Time: 19:23
 */
if (isset($_POST['submit'])) {

    $file = $_FILES['file'];
    $fileName = $_FILES['file']['name'];
    $fileTmp_Name = $_FILES['file']['tmp_name'];
    $fileSize = $_FILES['file']['size'];
    $fileError = $_FILES['file']['error'];
    $fileType = $_FILES['file']['type'];

    $fileExt = explode('.', $fileName);
    $fileActualExt = strtolower(end($fileExt));

    $allowed = array('png', 'jpg', 'jpeg');
    $fileNameNew = $which . "." . $fileActualExt;
    $fileDestination = 'uploads/' . $fileNameNew;

    if (in_array($fileActualExt, $allowed)) {
        if (!file_exists($fileDestination . "/" . $fileNameNew)) {
        }
        if ($fileError === 0) {
            if ($fileSize < 100000000000) {
//               $fileNameNew = uniqid('', true).".".$fileActualExt;
                move_uploaded_file($fileTmp_Name, $fileDestination);
                header("Location:testing.php?".$which);
            } else {
                echo "Your file is too big";
            }
        } else {
            echo "There was a error uploading your file!";
            echo $fileError;

        }
    } else {
        echo "You cannot upload files of this type!";
    }
} else {
    unlink($fileDestination."/".$fileNameNew);

}
