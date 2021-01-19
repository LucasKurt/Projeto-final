<?php
session_start();
if (!isset($_SESSION['id_vendedor'])) {
    header('Location: index.php');
    die();
}
?>
<!doctype html>
<html lang="pt-br">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="././images/favicon.ico">

  <title>Conheça o MEI</title>

  <!-- Bootstrap core CSS -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
    integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

  <style>
  .bd-placeholder-img {
    font-size: 1.125rem;
    text-anchor: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }

  @media (min-width: 768px) {
    .bd-placeholder-img-lg {
      font-size: 3.5rem;
    }
  }
  </style>

  <link href="https://fonts.googleapis.com/css?family=Playfair&#43;Display:700,900&amp;display=swap" rel="stylesheet">

  <link href="./CSS/dicas.css" rel="stylesheet">
</head>

<body>
  <?php require_once('./HTML/navbarDicas.html'); ?>
  <main class="container">
    <div class="p-4 p-md-5 mb-4 text-white rounded bg-dark">
      <div class="col-md-6 px-0">
        <h1 class="display-4 font-italic">As vantagens de ser MEI</h1>
        <p class="lead my-3">Todas as dicas desta página serão atualizadas semanalmente, indicaremos cursos, incentivos
          para que você possa garantir seus direitos sendo MEI e dicas para que você possa impulsionar o seu negócio.
        </p>
      </div>
    </div>

    <div class="row mb-2">
      <div class="col-md-6">
        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div class="col p-4 d-flex flex-column position-static">
            <h3 class="mb-0">Por que ser MEI?</h3>
            <br>
            <p class="card-text mb-auto">Com ele, você garante alguns direitos reservados ao trabalhador
              como por exemplo aposentadoria, auxílio-maternidade, direito de afastamento em caso de
              problemas relacionados a saúde e entre outros.</p>
            <a href="https://www.sebrae.com.br/sites/PortalSebrae/ufs/am/banner/conheca-as-vantagens-de-ser-mei,d5d95f83b3cef610VgnVCM1000004c00210aRCRD"
              class="stretched-link" target="_blank">Saiba mais</a>
          </div>
          <div class="col-auto d-none d-lg-block">
            <img src="./images/pq-mei.png" alt="Imagem por que ser MEI">
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div class="col p-4 d-flex flex-column position-static">
            <h3 class="mb-0">Como ser MEI</h3>
            <br>
            <p class="mb-auto">O processo é simples, gratuito e precisa ser feito online. Para se
              formalizar, clique no link abaixo e crie sua conta.</p>
            <a href="https://sso.acesso.gov.br/login?client_id=redesim.gov.br&authorization_id=177089bf52f"
              class="stretched-link" target="_blank">Saiba mais</a>
          </div>
          <div class="col-auto d-none d-lg-block">
            <img src="./images/como-mei.png" alt="Imagem como ser MEI">

          </div>
        </div>
      </div>
    </div>
    <hr class="featurette-divider">

    <div class="row featurette">
      <div class="col-md-7">
        <h2 class="featurette-heading">Como expandir seu negócio.</h2>
        <p class="lead">Conhecer os direitos e deveres do Microempreendedor Individual e da Microempresa, identificando
          as diferenças entre o MEI e a ME.</p>
        <a href="https://www.sebrae.com.br/sites/PortalSebrae/cursosonline/como-expandir-seu-negocio,6468b71da3b00710VgnVCM1000004c00210aRCRD"
          class="stretched-link" target="_blank">Acesse o Curso</a>
      </div>
      <div class="col-md-5">
        <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500"
          height="500" src="./images/como-expandir-seu-negocio.webp" alt="Como expandir seu negócio.">
      </div>
    </div>

    <hr class="featurette-divider">

    <div class="row featurette">
      <div class="col-md-7 order-md-2">
        <h2 class="featurette-heading">Como formalizar seu negócio como microempreendedor individual </h2>
        <p class="lead">Conheça os benefícios e os passo a passo de se formalizar como microempreendedor individual e
          quais os riscos em manter uma empresa informal.</p>
        <a href="https://www.sebrae.com.br/sites/PortalSebrae/cursoseeventos/como-formalizar-seu-negocio-como-mei,3180b8a6a28bb610VgnVCM1000004c00210aRCRD"
          class="stretched-link" target="_blank">Acesse o Curso</a>
      </div>
      <div class="col-md-5 order-md-1">
        <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500"
          height="500" src="./images/MEI.webp">
      </div>
    </div>

    <hr class="featurette-divider">

    </div>
  </main>

  <?php include_once('./HTML/footerDicas.html'); ?>

</body>

</html>