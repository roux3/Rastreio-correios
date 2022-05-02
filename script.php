<?php
    if(isset ($_POST["cod"]) && !empty($_POST['cod']) && $_SERVER['REQUEST_METHOD'] == 'POST'){
    $codigo = (isset($_POST['cod'])) ? $_POST['cod'] : '';

    $req = file_get_contents("https://proxyapp.correios.com.br/v1/sro-rastro/".$codigo);
    echo "\n".$req;
    unset($codigo);
    }

    
?>

