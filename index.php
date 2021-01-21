<?php
  session_start();
?>
<!doctype html>
<html lang="pt-br">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="icon" type="image/x-icon" href="././images/favicon.ico">

  <title>Comércio Amigável</title>

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
  <link href="./CSS/carousel.css" rel="stylesheet">
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

    <div id="myCarousel" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="./images/carrossel-1.jpg" alt="Primeiro Slide">
          <div class="container">
            <div class="carousel-caption text-left" style="text-shadow: 2px 2px 4px #000000;">
              <h1>Divulgue seu negócio através do nosso site</h1>
              <p>Aqui você pode mostrar seus produtos e serviços.</p>
              <p><a class="btn btn-lg btn-primary" href="cadastro.php" role="button">Cadastre-se</a></p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="./images/carrossel-2.jpeg" alt="Segundo Slide">
          <div class="container">
            <div class="carousel-caption text-left" style="text-shadow: 2px 2px 4px #000000;">
              <h1>Compre do pequeno negócio</h1>
              <p>Incentive o comerciante comprando os nossos produtos</p>
              <p><a class="btn btn-lg btn-primary" href="produtos.php" role="button">Veja os produtos</a></p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="./images/carrossel-3.jpeg" alt="Terceiro Slide">
          <div class="container">
            <div class="carousel-caption text-left" style="text-shadow: 2px 2px 4px #000000;">
              <h1>Incentivamos o pequeno produtor a sair da informalidade</h1>
              <p>Orientação, divulgação, educação corporativa</p>
              <p><a class="btn btn-lg btn-primary" href="https://www.sebrae.com.br/sites/PortalSebrae/ufs/sp?codUf=26"
                  target="_blank" role="button">Saiba Mais</a></p>
            </div>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>

    <div class="container marketing">

      <div class="row">
        <div class="col-lg-4">
          <a href="#"><img class="bd-placeholder-img rounded-circle" width="140" height="140"
              src="./images/panos.jpeg"></a>
          <h2>Panos bordados</h2>

        </div>
        <div class="col-lg-4">
          <a href="#"><img class="bd-placeholder-img rounded-circle" width="140" height="140"
              src="./images/brinco.jpeg"></a>
          <h2>Brincos</h2>

        </div>
        <div class="col-lg-4">
          <a href="#"><img class="bd-placeholder-img rounded-circle" width="140" height="140"
              src="./images/colar.webp"></a>
          <h2>Colares</h2>

        </div>
      </div>
      <div class="row mt-5">
        <div class="col-lg-4">
          <a href="#"><img class="bd-placeholder-img rounded-circle" width="140" height="140"
              src="./images/filtroSonhos.jpeg"></a>
          <h2>Filtro dos sonhos</h2>

        </div>
        <div class="col-lg-4">
          <a href="#"><img class="bd-placeholder-img rounded-circle" width="140" height="140" src="./images/orgonite.jpeg">
              </a>
          <h2>Orgonites</h2>

        </div>
        <div class="col-lg-4">
          <a href="#"><img class="bd-placeholder-img rounded-circle" width="140" height="140"
              src="https://images.pexels.com/photos/3760978/pexels-photo-3760978.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></a>
          <h2>Moringa de barro</h2>

        </div>
      </div>

      <hr class="featurette-divider">

      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">Faça como Ana <span class="text-muted">que conseguiu impulsionar seu
              negócio.</span>
          </h2>
          <p class="lead">Foi através da plataforma<bold> Comércio amigável<bold/> que João se destacou no ramo do artesanato.
          </p>
        </div>
        <div class="col-md-5">
          <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500"
            height="500"
            src="./images/pulseiras.jpg">
        </div>
      </div>

      <hr class="featurette-divider">

      <div class="row featurette">
        <div class="col-md-7 order-md-2">
          <h2 class="featurette-heading">História do projeto <span class="text-muted">iniciativa social.</span></h2>
          <p class="lead">Foi através da Recode que tivemos a iniciativa deste projeto social,
            somos um grupo composto por 6 integrantes: Lucas, Audrey, Gabriela, Tayane, Eduardo e Wilson.
          </p>
        </div>
        <div class="col-md-5 order-md-1">
          <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500"
            height="500"
            src="https://images.pexels.com/photos/2422293/pexels-photo-2422293.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
        </div>
      </div>

      <hr class="featurette-divider">

    </div>
  </main>

  <!-- Footer -->
  <?php
  include_once('./HTML/footer.html');
  ?>

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