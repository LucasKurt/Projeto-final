<?php
session_start();
require_once('bd_connect.php');
$id_pessoa = $_SESSION['id'];
$img = $_POST['img'];
$descricao  = $_POST['descricao'];
$valor = $_POST['valor'];

if ($img != "" && $descricao != "" && $valor != "") {
    $sql = "INSERT INTO anuncios (id_pessoa, img, descricao, valor) VALUES ('$id_pessoa', '$img', '$descricao', '$valor')";
    $result = $conn->query($sql);
    echo "
        <script>
            alert('Sua publicação foi feita com sucesso!')
            location.href = '../perfil.php'
        </script>
    ";
} else {
    echo "
        <script>
            location.href = '../perfil.php'
        </script>
    ";
}
