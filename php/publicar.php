<?php
session_start();
require_once('bd_connect.php');
if (isset($_POST['id_anuncio'])) {
    #put"
    $img = $_POST['img'];
    $descricao  = $_POST['descricao'];
    $valor = $_POST['valor'];
    $id = $_POST['id_anuncio'];

    if ($img != "" && $descricao != "" && $valor != "") {
        $sql = "UPDATE anuncios SET img = '$img', descricao = '$descricao', valor = '$valor' WHERE id='$id'";
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

} else if (isset($_POST['deletar'])){
    #delete
    $id = $_POST['deletar'];
    $sql = "DELETE FROM anuncios WHERE id = '$id'";
    $result = $conn->query($sql);
    echo "
        <script>
            alert('Sua publicação foi deletada com sucesso!')
            location.href = '../perfil.php'
        </script>
    ";
} else {
    #post
    $id_vendedor = $_SESSION['id_vendedor'];
    $img = $_POST['img'];
    $descricao  = $_POST['descricao'];
    $valor = $_POST['valor'];
    if ($img != "" && $descricao != "" && $valor != "") {
        $sql = "INSERT INTO anuncios (id_vendedor, img, descricao, valor) VALUES ('$id_vendedor', '$img', '$descricao', '$valor')";
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
}

