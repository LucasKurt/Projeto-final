<?php

session_start();

$email = $_POST['email']; 
$senha = $_POST['senha'];

if (strlen($email) > 3 && strlen($senha) > 3) {
    $senha = md5($senha);

    require_once('bd_connect.php');

    // Execução da instrução SQL
    $resultado_consulta = $conn->query("SELECT * from vendedor where email = '$email' AND senha = '$senha'");

    // $anunciante = Retorno da consulta no banco de dados
    $anunciante = mysqli_fetch_assoc($resultado_consulta);

    $_SESSION['id_vendedor'] = $anunciante["id"];
    $_SESSION['nome_vendedor'] = $anunciante["nome"];
    $_SESSION['negocio_vendedor'] = $anunciante["negocio"];
    $_SESSION['img_perfil_vendedor'] = $anunciante["img_perfil"];

    header('Location: ../dicas.php');
}
else {
    echo "
        <script>
            alert('E-mail ou senha inválidos!')
            location.href = '../index.php'
        </script>
    ";
}