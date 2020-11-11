<?php
    $nome = $_POST['nome'];
    $negocio =  $_POST['negocio'];
    $endereco = $_POST['endereco'];
    $cpf = intval($_POST['cpf']);
    $categoria = $_POST['categoria'];
    $email = $_POST['email'];
    $senha = $_POST['senha'];
    $conf_senha = $_POST['conf_senha'];

if (!is_string($cpf) && $senha == $conf_senha && $nome != "" && $endereco != "" && $cpf != "" && $categoria != "" && $email != "" && $senha != "" && $conf_senha != "") {
    require_once('bd_connect.php');
    $sql = "SELECT * FROM cadastro";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        while ($negocios = $result->fetch_assoc()) {
            if ($email == $negocios['email']) {
                echo "<script>
                    alert('Nome já cadastrado!')
                    window.location.href = '../cadastro.php'
                    </script>
                ";
                exit;
            }
            
        }
        while ($cpfs = $result->fetch_assoc()) {
            if ($email == $cpfs['email']) {
                echo "<script>
                    alert('CPF já cadastrado!')
                    window.location.href = '../cadastro.php'
                    </script>
                ";
                exit;
            }
            
        }
        while ($emails = $result->fetch_assoc()) {
            if ($email == $emails['email']) {
                echo "<script>
                    alert('Email já cadastrado!')
                    window.location.href = '../cadastro.php'
                    </script>
                ";
                exit;
            }
            
        }
        unset($sql);
        $senha = md5($senha);
        $sql = "INSERT INTO cadastro (nome,negocio,endereco,cpf,categoria,email,senha,img_perfil) VALUES ('$nome','$negocio','$endereco','$cpf','$categoria','$email','$senha','images/perfil-sem-foto.jpg')";
        $conn->query($sql);
        echo "<script>
            alert('Cadastro efetuado!')
            window.location.href = '../login.php'
            </script>
        ";
    } else {
        unset($sql);
        $senha = md5($senha);
        $sql = "INSERT INTO cadastro (nome,negocio,endereco,cpf,categoria,email,senha,img_perfil) VALUES ('$nome','$negocio','$endereco','$cpf','$categoria','$email','$senha','images/perfil-sem-foto.jpg')";
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
} else if (is_string($cpf)){
    echo "<script>
        alert('digite apenas numeros no CPF!!')
        location.href = '../cadastro.php'
    </script>";
} else {
    echo "<script>
        alert('deu ruim')
        //location.href = '../cadastro.php'
    </script>";
}
echo "<a href='../cadastro.php'>voltar</a>";