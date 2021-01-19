<?php
session_start();
print_r($_POST);

require_once('bd_connect.php');
$id = $_SESSION['id_vendedor'];
$nome  = $_POST['nome'];
$negocio  = $_POST['negocio'];
$endereco = $_POST['endereco'];
$email = $_POST['email'];
$telefone = $_POST['telefone'];


if ($nome != "" && $endereco != "" && $telefone != "" && $email != "") {
    $sql = "UPDATE vendedor SET nome = '$nome', negocio = '$negocio', endereco = '$endereco', telefone = '$telefone', email = '$email' WHERE id='$id'";
    $result = $conn->query($sql);
    echo "
        <script>
            alert('Sua publicação foi alterada com sucesso!')
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