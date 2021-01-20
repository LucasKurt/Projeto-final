<?php
  session_start();
  include_once('./php/bd_connect.php');
?>
<!doctype html>
<html lang="pt-br">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="icon" type="image/x-icon" href="././images/favicon.ico">

  <title>Anúncios</title>
  <link rel="stylesheet" href="./CSS/produtos.css">

  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
    integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
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
  <?php
    if (isset($_SESSION['id_cliente'])) {
      require_once('./HTML/navbarSairCliente.html');
    } else if (isset($_SESSION['id_vendedor'])) {
      require_once('./HTML/navbarSair.html');
    } else {
      require_once('./HTML/navbar.html');
    }
  ?>

  <main role="main">

    <section class="jumbotron text-center">
      <div class="container mt-5">
        <p class="display-4">Veja todos os produtos cadastrados</p>
      </div>
    </section>

    <div class="album py-5 bg-light">
      <div class="container">

        <div class="row">
          <?php 
            $sql = "SELECT * FROM vendedor JOIN anuncios WHERE id_vendedor = vendedor.id ORDER BY anuncios.id DESC";
            $result = $conn->query($sql);
            if($result->num_rows >0){
              while ($anuncios = $result->fetch_assoc()) {
                if($anuncios['negocio']==""){$anuncios['negocio']=$anuncios['nome'];}
                if($anuncios['valor']==""){$anuncios['valor']='Valor à combinar';}
                $doacao = $anuncios['doacao']=="" ? $doacao = "<br>": $doacao = $anuncios['doacao'];?>
            <form action="./perfil.php" method="post" class="col-md-4" onclick=(this.submit())>
              <div class="card card-anuncio mb-4 shadow-sm">
                <img height="225" src="./images/imagens_anuncios/<?php echo $anuncios['img']?>" alt="">
                <div class="d-flex justify-content-center mt-3">
                  <img style="box-shadow: 0px 0px 8px #000000;" class="rounded-circle" width="50" height="50"
                    src="./images/perfil_vendedor/<?php echo $anuncios['img_perfil']?>" alt="">
                </div>
                <div class="card-body">
                  <p class="card-text text-center"><?php echo utf8_encode($anuncios['negocio'])?></p>
                  <p class="card-text text-center"><?php echo utf8_encode($anuncios['descricao'])?></p>
                  <p class="card-text text-center">R$ <?php echo utf8_encode($anuncios['valor'])?></p>
                  <p class="card-text text-center"><?php echo $doacao?></p>
                  <input type="hidden" name="id_anunciante" value="<?php echo $anuncios["id_vendedor"]?>">
                </div>
              </div>
            </form>

          <?php }
            } else {
              echo "<h1>Ainda não foram postados anuncios</h1>";
            }
          ?>

        </div>
      </div>
    </div>

  </main>

  <!-- Footer -->
  <?php
  include_once('./HTML/footer.html');
  ?>

  <script>
    function redireciona() {
      window.location.href = "./perfil.php";
    }
  </script>

  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
    integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous">
  </script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
    integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous">
  </script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
    integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous">
  </script>
</body>

</html>