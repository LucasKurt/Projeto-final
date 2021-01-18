<?php
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $senha = $_POST['senha'];
    $conf_senha = $_POST['conf_senha'];

if ($senha == $conf_senha && $nome != "" &&  $email != "" && $senha != "" && $conf_senha != "") {
    require_once('bd_connect.php');
    $sql = "SELECT * FROM cliente";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        while ($emails = $result->fetch_assoc()) {
            if ($email == $emails['email']) {
                echo "<script>
                    alert('E-mail já cadastrado!')
                    window.location.href = '../cadastro-cliente.php'
                    </script>
                ";
                exit;
            }
            
        }
        unset($result);
        unset($sql);
        $senha = md5($senha);
        $sql = "INSERT INTO cliente (nome,email,senha) VALUES ('$nome','$email','$senha')";
        $conn->query($sql);
        echo "<script>
            alert('Cadastro efetuado!')
            window.location.href = '../login-cliente.php'
            </script>
        ";
    } else {
        unset($sql);
        $senha = md5($senha);
        $sql = "INSERT INTO cliente (nome,email,senha) VALUES ('$nome','$email','$senha')";
        $conn->query($sql);
        echo "<script>
            alert('Cadastro efetuado!')
            window.location.href = '../login-cliente.php'
            </script>
        ";
    }
} else if ($senha != $conf_senha){
    echo "<script>
        alert('As senhas não são iguais')
        location.href = '../cadastro-cliente.php'
    </script>";
}