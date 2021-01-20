<?php

session_start();

$email = $_POST['email']; 
$senha = $_POST['senha'];

if (strlen($email) > 3 && strlen($senha) > 3) {
    $senha = md5($senha);

    require_once('bd_connect.php');

    // Execução da instrução SQL
    $resultado_consulta = $conn->query("SELECT * from cliente where email = '$email' AND senha = '$senha'");

    // $cliente = Retorno da consulta no banco de dados
    $cliente = mysqli_fetch_assoc($resultado_consulta);

    $_SESSION['id_cliente'] = $cliente["id"];
    $_SESSION['nome_cliente'] = $cliente["nome"];
    $_SESSION['email_cliente'] = $cliente["email"];

    header('Location: ../perfil_cliente.php');
}
else {
    echo "
        <script>
            alert('E-mail ou senha inválidos!')
            location.href = '../index.php'
        </script>
    ";
}