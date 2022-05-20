<?php
    include("db.php");
    $codigo = $_POST["cod"];
    $nome = $_POST["nome"];

    $objeto = "INSERT INTO objetos(nome,codigo) VALUES('{$nome}','{$codigo}')";
    $conn->query($objeto);
?>