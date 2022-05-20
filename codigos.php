<?php
    include("db.php");
    $select = "SELECT * FROM objetos";
    $result = $conn->query($select);
    $data = array();
    while($row = mysqli_fetch_assoc($result)){
        $data[] = $row;
    }
    echo json_encode($data);
?>