<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <link rel="icon" type="image/x-icon" href="././images/favicon.ico">

  <title>Cadastro de Cliente</title>
  <!-- Bootstrap core CSS -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
    integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous" />

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

  <link href="./CSS/cadastro.css" rel="stylesheet" />
</head>

<body class="bg-light">
  <?php require_once('./HTML/navbar.html');?>
  <div class="container mt-5">
    <div class="py-5 text-center">
      <img class="d-block mx-auto mb-2" src="./images/logo-comercio-amigavel.png" alt="" width="150" height="150" />
      <h2>Cadastro de Cliente</h2>

    </div>

    <div class="row">

      <div class="col-md-12">
        <h4 class="mb-3">Dados Pessoais</h4>
        <form class="needs-validation" method="POST" action="php\confirma_cadastro_cliente.php" novalidate>
          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="nome">Nome Completo</label>
              <input type="text" class="form-control" id="nome" name="nome" placeholder="" value="" required />
              <div class="invalid-feedback">Insira seu nome.</div>
            </div>
            <div class="col-md-6 mb-3">
              <label for="email">E-mail</label>
              <input type="email" class="form-control" id="email" name="email" placeholder="seuemail@exemplo.com.br"
                value="" />
            </div>
          </div>

          <div class="mb-3">
            <label for="senha">Senha</label>
            <input type="password" class="form-control" id="senha" name="senha" placeholder="Digite sua senha"
              required />
            <div class="invalid-feedback">
              Digite uma senha válida.
            </div>
          </div>

          <div class="mb-3">
            <label for="conf_senha">Confirme sua senha</label>
            <input type="password" class="form-control" id="conf_senha" name="conf_senha"
              placeholder="Confirme sua senha" required />
            <div class="invalid-feedback">
              As senhas devem ser iguais.
            </div>
          </div>
          <br>
          <button class="btn btn-primary btn-lg btn-block" type="submit">
            Confirmar cadastro
          </button>
        </form>
      </div>
    </div>
    <hr class="featurette-divider">

    <!-- Footer -->
    <?php
      include_once('./HTML/footer.html');
      ?>

  </div>
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
    integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous">
  </script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
    integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous">
  </script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
    integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous">
  </script>
  <script src="./JS/cadastro.js"></script>
</body>

</html>