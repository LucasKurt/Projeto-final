<?php

session_start();

$email = $_POST['email']; 
$senha = $_POST['senha'];

if (strlen($email) > 3 && strlen($senha) > 3) {
    $senha = md5($senha);

    require_once('bd_connect.php');

    // Execução da instrução SQL
    $resultado_consulta = $conn->query("SELECT * from cadastro where email = '$email' AND senha = '$senha'");

    // $anunciante = Retorno da consulta no banco de dados
    $anunciante = mysqli_fetch_assoc($resultado_consulta);

    $_SESSION['id'] = $anunciante["id"];
    $_SESSION['nome'] = $anunciante["nome"];
    $_SESSION['negocio'] = $anunciante["negocio"];
    $_SESSION['img_perfil'] = $anunciante["img_perfil"];

    header('Location: ../perfil.php');
}
else {
    echo "
        <script>
            alert('E-mail ou senha inválidos!')
            location.href = '../index.php'
        </script>
    ";
}