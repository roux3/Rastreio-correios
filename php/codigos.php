<?php
if(isset($_POST['nome'])){
    $nome = $_POST['nome'];

    if($nome=="all"){
        $select = "SELECT * FROM objetos";
    }
    else{
        $select = "SELECT * FROM objetos WHERE Nome LIKE '%$nome%'";
        
    }
    include("db.php");
    
    $result = $conn->query($select);
    $data = array();
    while($row = mysqli_fetch_assoc($result)){
        $data[] = $row;
    }
    echo json_encode($data);
}
?>