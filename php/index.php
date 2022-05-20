<?php
    include('db.php');
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap" rel="stylesheet">
    <title>Rastreio</title>
</head>
<body>
    
    <div class="menu">
        <h1>Rastreio Correios</h1>
    </div>
    <div class="submenu">
        <ul>
            <a href="index.php"><li>Rastrear</li></a>
            <a href="salvos.php"> <li>Codigos</li></a>
        </ul>
    </div>
    <section class="corpo">
        <div class="entrada">

        <div>
                <input class="texto" type="text" placeholder="Digite o código aqui..." name="cod">
                <button class="botao">Enviar</button>
        </div>
        </div>

    </section>
    <section class="resultado">
        <ul class="estado">
            <li class="step">
                <img src="https://rastreamento.correios.com.br/static/rastreamento-internet/imgs/correios-sf.png" alt="" width="35px">
                <h3>Prime importação</h3>
            </li>
        </ul>
    </section>
    <section class="save-div">
        <h3 class="msg"></h3>
        <div class="salvar">
            <input class="nome" type="text" type="text" placeholder="Digite o nome do objeto aqui" >
            <button class="botao">Salvar</button>
        </div>
    </section>
    <script src="test.js"></script>
</body>
</html>

