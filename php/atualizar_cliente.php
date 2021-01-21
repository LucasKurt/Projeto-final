<?php
session_start();
require_once('bd_connect.php');

$id = $_SESSION['id_cliente'];
$nome = $_POST['nome'];
$senha = $_POST['senha'];
$email = $_POST['email'];

echo $teste = $senha == "" ? $teste = "vazio" : $teste = "$senha";

if ($senha == "" && $nome != ""  && $email != "") {
    $sql = "UPDATE cliente SET nome = '$nome', email = '$email' WHERE id='$id'";
    $result = $conn->query($sql);
    $_SESSION['nome_cliente'] = $nome;
    $_SESSION['email_cliente'] = $email;
    echo "
        <script>
            alert('Seus dados foram alterados com sucesso!')
            location.href = '../perfil_cliente.php'
        </script>
    ";
} elseif ($senha != "" && $nome != ""  && $email != ""){
    $senha = md5($senha);
    $sql = "UPDATE cliente SET nome = '$nome', email = '$email', senha = '$senha' WHERE id='$id'";
    $result = $conn->query($sql);
    $_SESSION['nome_cliente'] = $nome;
    $_SESSION['email_cliente'] = $email;
    echo "
        <script>
            alert('Seus dados foram alterados com sucesso!')
            location.href = '../perfil_cliente.php'
        </script>
    ";
} else {
    echo "
        <script>
            location.href = '../perfil_cliente.php'
        </script>
    ";
}