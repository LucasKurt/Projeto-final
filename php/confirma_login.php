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

    //print_r($anunciante);

    $_SESSION['id_vendedor'] = $anunciante["id"];
    $_SESSION['nome_vendedor'] = $anunciante["nome"];
    $_SESSION['negocio_vendedor'] = $anunciante["negocio"];
    $_SESSION['endereco_vendedor'] = $anunciante["endereco"];
    $_SESSION['telefone_vendedor'] = $anunciante["telefone"];
    $_SESSION['email_vendedor'] = $anunciante["email"];
    $_SESSION['senha_cripto_vendedor'] = $anunciante["senha"];
    $_SESSION['img_perfil_vendedor'] = $anunciante["img_perfil"];
    $_SESSION['doacao'] = $doacao["doacao"];

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