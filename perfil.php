<?php
session_start();
if (isset($_POST['id_anunciante'])) {
  $_SESSION['id_anunciante'] = $_POST['id_anunciante'];
}
if (!isset($_SESSION["id_cliente"]) && !isset($_SESSION["id_vendedor"])){
  require_once('./perfil_deslogado.php');
} else if (isset($_SESSION['id_cliente'])){
  require_once('./perfil_logado_cliente.php');
} else if (isset($_SESSION['id_vendedor'])) {
  if (isset($_POST['id_anunciante'])) {
    if($_SESSION['id_vendedor'] == $_POST['id_anunciante']){
      require_once('./perfil_vendedor.php');
    } else {
      require_once('./perfil_logado_vendedor.php');
    }
  } else {
    require_once('./perfil_vendedor.php');
  }
}

