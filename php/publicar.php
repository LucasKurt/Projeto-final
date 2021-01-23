<?php
session_start();
require_once('bd_connect.php');

if (isset($_POST['id_anuncio'])) {
    #put    
    $descricao  = $_POST['descricao'];
    $valor = $_POST['valor'];
    $id = $_POST['id_anuncio'];
    $target_name = $_FILES["fileUpload"]["name"];
    // Set image placement folder
    $target_dir = "../images/imagens_anuncios/";
    // Get file path
    $target_file = $target_dir . basename($_FILES["fileUpload"]["name"]);
    // Get file extension
    $imageExt = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));
    // Allowed file types
    $allowd_file_ext = array("jpg", "jpeg", "png","webp");

    if (!file_exists($_FILES["fileUpload"]["tmp_name"])) {
        if ($descricao != "" && $valor != "") {
            $sql = "UPDATE anuncios SET descricao = '$descricao', valor = '$valor' WHERE id='$id'";
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
            $resMessage = array(
                "status" => "alert-danger",
                "message" => "Image coudn't be uploaded."
            );
        }
    } else if (!in_array($imageExt, $allowd_file_ext)) {
        $resMessage = array(
            "status" => "alert-danger",
            "message" => "Allowed file formats .jpg, .jpeg and .png."
        );            
    } else if ($_FILES["fileUpload"]["size"] > 2097152) {
        $resMessage = array(
            "status" => "alert-danger",
            "message" => "File is too large. File size should be less than 2 megabytes."
        );
    } else if (file_exists($target_file)) {
        $resMessage = array(
            "status" => "alert-danger",
            "message" => "File already exists."
        );
    } else {
        if (move_uploaded_file($_FILES["fileUpload"]["tmp_name"], $target_file) && $descricao != "" && $valor != "") {
            $sql = "UPDATE anuncios SET img = '$target_name', descricao = '$descricao', valor = '$valor' WHERE id='$id'";
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
            $resMessage = array(
                "status" => "alert-danger",
                "message" => "Image coudn't be uploaded."
            );
        }
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
    $descricao  = $_POST['descricao'];
    $valor = $_POST['valor']; 
    $target_name = $_FILES["fileUpload"]["name"];
    // Set image placement folder
    $target_dir = "../images/imagens_anuncios/";
    // Get file path
    $target_file = $target_dir . basename($_FILES["fileUpload"]["name"]);
    // Get file extension
    $imageExt = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));
    // Allowed file types
    $allowd_file_ext = array("jpg", "jpeg", "png","webp");
    if (!file_exists($_FILES["fileUpload"]["tmp_name"])) {
        print_r($resMessage = array(
            "status" => "alert-danger",
            "message" => "Select image to upload."
        ));
    } else if (!in_array($imageExt, $allowd_file_ext)) {
        print_r($resMessage = array(
            "status" => "alert-danger",
            "message" => "Allowed file formats .jpg, .jpeg and .png."
        ));            
    } else if ($_FILES["fileUpload"]["size"] > 2097152) {
        print_r($resMessage = array(
            "status" => "alert-danger",
            "message" => "File is too large. File size should be less than 2 megabytes."
        ));
    } else if (file_exists($target_file)) {
        print_r($resMessage = array(
            "status" => "alert-danger",
            "message" => "File already exists."
        ));
    } else {
        if (move_uploaded_file($_FILES["fileUpload"]["tmp_name"], $target_file) && $descricao != "" && $valor != "") {
            if (isset($_POST['doacao'])) {
                $doacao = "Aceito receber doação";
                $sql = "INSERT INTO anuncios (id_vendedor, img, descricao, valor, doacao) VALUES ('$id_vendedor', '$target_name', '$descricao', '$valor', '$doacao')";
                $result = $conn->query($sql);
                echo "
                    <script>
                        alert('Sua publicação foi feita com sucesso!')
                        location.href = '../perfil.php'
                    </script>
                ";
            } else {
                $sql = "INSERT INTO anuncios (id_vendedor, img, descricao, valor) VALUES ('$id_vendedor', '$target_name', '$descricao', '$valor')";
                $result = $conn->query($sql);
                echo "
                    <script>
                        alert('Sua publicação foi feita com sucesso!')
                        location.href = '../perfil.php'
                    </script>
                ";
            }
        } else {
            echo "
                <script>
                    location.href = '../perfil.php'
                </script>
            ";
            print_r($resMessage = array(
                "status" => "alert-danger",
                "message" => "Image coudn't be uploaded."
            ));
        }
    }
}