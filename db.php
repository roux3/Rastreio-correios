<?php
$server = "localhost";
$username = "Estoque";
$password = "josafa2332";
$db = "rastreio";

try{
    $conn = new mysqli($server, $username, $password, $db);

    if ($conn->connect_error) {
        $conn = new mysqli($server, $username, $password);
        $sql = "CREATE DATABASE IF NOT EXISTS rastreio ";
        $conn->query($sql);
        $conn = new mysqli($server, $username, $password, $db);
      }
}
catch(Exception $e){
    
}


$table = "CREATE TABLE IF NOT EXISTS objetos(
    Nome varchar(50) NOT NULL,
    codigo varchar(16) NOT NULL
    )";
    $conn->query($table);


?>