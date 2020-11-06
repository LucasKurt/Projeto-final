<?php
  session_start();
  include_once('php\bd_connect.php');
?>
<!doctype html>
<html lang="pt-br">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
  <meta name="generator" content="Jekyll v4.1.1">
  <title>Produtos e Serviços</title>
  <link rel="stylesheet" href="./CSS/produtos.css">
  <!-- Bootstrap core CSS -->
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
      if (isset($_SESSION['id'])) {
        require_once('HTML\navbarSair.html');
      } else {
        require_once('HTML\navbar.html');
      }
    ?>

  <main role="main">

    <section class="jumbotron text-center">
      <div class="container mt-4">
        <h1>Veja os produtos e serviços cadastrados</h1>
        <!-- <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator,
          etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p> -->
      </div>
    </section>

    <div class="album py-5 bg-light">
      <div class="container">

        <div class="row">
          <!--  -->
          <?php 
            $sql = "SELECT * FROM cadastro JOIN anuncios WHERE id_pessoa = cadastro.id ORDER BY anuncios.id DESC";
            $result = $conn->query($sql);
            if($result->num_rows >0){
              while ($anuncios = $result->fetch_assoc()) {
                if($anuncios['negocio']==""){$anuncios['negocio']=$anuncios['nome'];}
                if($anuncios['valor']==""){$anuncios['valor']='Valor à combinar';}?>
                <div class="col-md-4">
                  <div class="card mb-4 shadow-sm">
                    <img height="225" src="<?php echo $anuncios['img']?>" alt="">
                    <div class="d-flex justify-content-center mt-3"><img style="box-shadow: 0px 0px 8px #000000;" class="rounded-circle" width="50" height="50" src="<?php echo $anuncios['img_perfil']?>" alt=""></div>
                    <div class="card-body">
                      <p class="card-text text-center"><?php echo $anuncios['negocio']?></p>
                      <p class="card-text text-center"><?php echo $anuncios['descricao']?></p>
                      <p class="card-text text-center"><?php echo $anuncios['valor']?></p>
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                          <button type="button" class="btn btn-sm btn-outline-secondary">Ver mais</button>
                          <button type="button" class="btn btn-sm btn-outline-secondary">Entrar em contato</button>
                        </div>
                        <small class="text-muted">SP</small>
                      </div>
                    </div>
                  </div>
                </div>
              <?php }
            } else {
              echo "<h1>Ainda não foram postados anuncios</h1>";
            }         
          ?>
          
        </div>
      </div>
    </div>

  </main>

  <footer class="text-muted">
    <div class="container">
      <p class="float-right">
        <a href="#">Back to top</a>
      </p>
      <p>Album example is &copy; Bootstrap, but please download and customize it for yourself!</p>
      <p>New to Bootstrap? <a href="https://getbootstrap.com/">Visit the homepage</a> or read our <a
          href="../getting-started/introduction/">getting started guide</a>.</p>
    </div>
  </footer>
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
    integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
    crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
    integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
    crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
    integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
    crossorigin="anonymous"></script>
</body>

</html>