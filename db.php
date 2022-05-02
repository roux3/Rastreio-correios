<?php
$server = "localhost";
$username = "root";
$password = "teste";
$db = "rastreio";

try{
    $conn = new mysqli($server, $username, $password, $db);
}
catch(Exception $e){
    $conn = new mysqli($server, $username, $password);
    $sql = "CREATE DATABASE IF NOT EXISTS rastreio ";
    $conn->query($sql);
    $conn = new mysqli($server, $username, $password, $db);
}


$table = "CREATE TABLE IF NOT EXISTS objetos(
    Nome varchar(50) NOT NULL,
    codigo varchar(16) NOT NULL
    )";
    $conn->query($table);


?>