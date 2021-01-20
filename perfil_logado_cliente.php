<?php
if (isset($_SESSION['id_cliente'])) {
  include_once('./php/bd_connect.php');
  $id = $_SESSION['id_anunciante'];
  $resultado_consulta = $conn->query("SELECT * from vendedor where id = '$id'");
  $anunciante = mysqli_fetch_assoc($resultado_consulta);
  $nome = $anunciante["nome"];
  $negocio = $anunciante["negocio"];
  $telefone = $anunciante['telefone'];
  $img_perfil = $anunciante["img_perfil"];    
  if ($negocio == ""){
    $negocio = $nome;
  }
} else{
  header('Location: index.php');
  die();
}
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" type="image/x-icon" href="././images/favicon.ico">

  <title>Perfil de Vendedor</title>

  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
    integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

  <link href="./CSS/perfil.css" rel="stylesheet">
  <link href="./CSS/toggle-switch.css" rel="stylesheet">
  <style>
  .bd-placeholder-img {
    font-size: 1.125rem;
    text-anchor: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  @media (min-width: 768px) {
    .bd-placeholder-img-lg {
      font-size: 3.5rem;
    }
  }
  </style>
</head>

<body>
  <?php require_once('./HTML/navbarSairCliente.html'); ?>
  <main role="main">
    <div class="jumbotron">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-3 d-flex flex-column justify-content-between align-items-center">
            <img width="250" height="250" class="rounded-circle" src="./images/perfil_vendedor/<?php echo $img_perfil?>"
              alt="">
          </div>
          <div class="col-md-9 d-flex flex-column justify-content-start align-items-start">
            <h2 class="display-3"><?php echo $negocio?></h2>
            <div class="row ml-1 my-4 align-items-start">
              <img src="./images/rating-stars.png" alt="Rating Stars">
              <p class="col d-flex flex-column align-items-end" style="font-size: 32px;">4.6</p>
            </div>
            <div class="row ml-1 align-items-start">
              <img src="./images/whats-logo.png" alt="WhatsApp Logo">
              <p class="col d-flex flex-column align-items-end" style="font-size: 32px;"><?php echo $telefone?></p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2>Anúncios publicados</h2>
          <hr>
          <?php
            $sql = "SELECT * FROM anuncios WHERE id_vendedor = '$id'";
            $result = $conn->query($sql);
            if ($anuncios = $result->num_rows >0) {
              while ($anuncios = $result->fetch_assoc()) {
                if($anuncios['valor']==""){$anuncios['valor']='Valor à combinar';}?>
                <div class="row mb-2">
                  <div class="col-md-3">
                    <img height="150" src="./images/imagens_anuncios/<?php echo $anuncios['img']?>" alt="" id="editarImg">
                  </div>
                  <div class="col-md-9 d-flex flex-column vertical-align-center justify-content-center">
                    <p><?php echo utf8_encode($anuncios['descricao'])?></p>
                    <p>R$ <?php echo utf8_encode($anuncios['valor'])?></p>
                  </div>
                </div>
                <hr>
              <?php }
            } else {
              echo "<p class='font-weight-bold'>Nenhum anuncio publicado</p>";
              echo "<br>";
            }
          ?>
        </div>
      </div>
    </div>
  </main>

  <?php include_once('./HTML/footer.html'); ?>

  <script src="JS\perfil.js"></script>
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
    integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous">
  </script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.15/jquery.mask.min.js"></script>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
    integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous">
  </script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
    integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous">
  </script>
</body>

</html>