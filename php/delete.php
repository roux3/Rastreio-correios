<?php
    include("db.php");
    $cod = $_POST['cod'];
    echo $cod;
    $delete = "DELETE FROM objetos WHERE codigo ='$cod'";
    $conn->query($delete);

    if ($conn->query($delete) === TRUE) {
        echo "Record deleted successfully";
      } else {
        echo "Error deleting record: " . $conn->error;
      }
    
?>