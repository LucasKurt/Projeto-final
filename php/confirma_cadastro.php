<?php
    $nome = $_POST['nome'];
    $negocio =  $_POST['negocio'];
    $endereco = $_POST['endereco'];
    $cpf = ($_POST['cpf']);
    $telefone = $_POST['telefone'];
    $email = $_POST['email'];
    $senha = $_POST['senha'];
    $conf_senha = $_POST['conf_senha'];

if ($senha == $conf_senha && $nome != "" && $endereco != "" && $cpf != "" && $telefone != "" && $email != "" && $senha != "" && $conf_senha != "") {
    require_once('bd_connect.php');
    $sql = "SELECT * FROM vendedor";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        while ($negocios = $result->fetch_assoc()) {
            if ($negocio == $negocios['negocio']) {
                echo "<script>
                    alert('Nome fantasia já cadastrado!')
                    window.location.href = '../cadastro.php'
                    </script>
                ";
                exit;
            }
            
        }
        unset($result);
        $result = $conn->query($sql);
        while ($cpfs = $result->fetch_assoc()) {
            if ($cpf == $cpfs['cpf']) {
                echo "<script>
                    alert('CPF já cadastrado!')
                    window.location.href = '../cadastro.php'
                    </script>
                ";
                exit;
            }
            
        }
        unset($result);
        $result = $conn->query($sql);
        while ($telefones = $result->fetch_assoc()) {
            if ($telefone == $telefones['telefone']) {
                echo "<script>
                    alert('Telefone já cadastrado!')
                    window.location.href = '../cadastro.php'
                    </script>
                ";
                exit;
            }
            
        }
        unset($result);
        $result = $conn->query($sql);
        while ($emails = $result->fetch_assoc()) {
            if ($email == $emails['email']) {
                echo "<script>
                    alert('E-mail já cadastrado!')
                    window.location.href = '../cadastro.php'
                    </script>
                ";
                exit;
            }
            
        }
        unset($result);
        unset($sql);
        $senha = md5($senha);
        $sql = "INSERT INTO vendedor (nome,negocio,endereco,cpf,telefone,email,senha,img_perfil) VALUES ('$nome','$negocio','$endereco','$cpf','$telefone','$email','$senha','perfil-sem-foto.jpg')";
        $conn->query($sql);
        echo "<script>
            alert('Cadastro efetuado!')
            window.location.href = '../login.php'
            </script>
        ";
    } else {
        unset($sql);
        $senha = md5($senha);
        $sql = "INSERT INTO vendedor (nome,negocio,endereco,cpf,telefone,email,senha,img_perfil) VALUES ('$nome','$negocio','$endereco','$cpf','$telefone','$email','$senha','perfil-sem-foto.jpg')";
        $conn->query($sql);
        echo "<script>
            alert('Cadastro efetuado!')
            window.location.href = '../login.php'
            </script>
        ";
    }
} else if ($senha != $conf_senha){
    echo "<script>
        alert('As senhas não são iguais')
        location.href = '../cadastro.php'
    </script>";
}