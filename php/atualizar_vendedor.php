<?php
session_start();
require_once('bd_connect.php');

$id = $_SESSION['id_vendedor'];
$nome  = $_POST['nome'];
$negocio  = $_POST['negocio'];
$endereco = $_POST['endereco'];
$email = $_POST['email'];
$telefone = $_POST['telefone'];

if(isset($_FILES["fileUpload"])) {
    // Set image placement folder
    $target_dir = "../images/perfil_vendedor/";
    // Get file path
    $target_file = $target_dir . basename($_FILES["fileUpload"]["name"]);
    // Get file extension
    $imageExt = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));
    // Allowed file types
    $allowd_file_ext = array("jpg", "jpeg", "png","webp");
    // Rename img 
    $target_name = md5(time()) . "." . $imageExt;

    if (!file_exists($_FILES["fileUpload"]["tmp_name"])) {
        $resMessage = array(
            "status" => "alert-danger",
            "message" => "Select image to upload."
        );
    } else if (!in_array($imageExt, $allowd_file_ext)) {
        $resMessage = array(
            "status" => "alert-danger",
            "message" => "Allowed file formats .jpg, .jpeg, .png and .webp."
        );            
    } else if ($_FILES["fileUpload"]["size"] > 2097152) {
        $resMessage = array(
            "status" => "alert-danger",
            "message" => "File is too large. File size should be less than 2 megabytes."
        );
    } else if (file_exists($target_name)) {
        $resMessage = array(
            "status" => "alert-danger",
            "message" => "File already exists."
        );
    } else {
        if (move_uploaded_file($_FILES["fileUpload"]["tmp_name"], $target_dir.$target_name)) {
            $sql = "UPDATE vendedor SET img_perfil ='$target_name' WHERE id='$id'";
            $result = $conn->query($sql);
            $_SESSION['img_perfil_vendedor'] = $target_name;
        } else {
            $resMessage = array(
                "status" => "alert-danger",
                "message" => "Image coudn't be uploaded."
            );
        }
    }
}

if ($nome != "" && $endereco != "" && $telefone != "" && $email != "") {
    $sql = "UPDATE vendedor SET nome = '$nome', negocio = '$negocio', endereco = '$endereco', telefone = '$telefone', email = '$email' WHERE id='$id'";
    $result = $conn->query($sql);
    $_SESSION['nome_vendedor'] = $nome;
    $_SESSION['negocio_vendedor'] = $negocio;
    $_SESSION['endereco_vendedor'] = $endereco;
    $_SESSION['email_vendedor'] = $email;
    $_SESSION['telefone_vendedor'] = $telefone;
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