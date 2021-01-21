<?php
session_start();
if (isset($_SESSION['id_cliente'])) {
    include_once('./php/bd_connect.php');
    $id = $_SESSION['id_cliente'];
    $nome = $_SESSION['nome_cliente'];
    $email = $_SESSION['email_cliente'];
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

  <title>Perfil de Cliente</title>

  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
    integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

  <link href="./CSS/perfil.css" rel="stylesheet">
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
      <div class="container">
        <h2 class="display-4"><?php echo $nome?></h2>
      </div>
    </div>

    <div class="container mb-5">
      <div class="py-5 text-center">
        <h2>Editar perfil</h2>
      </div>
      <div class="row">
        <div class="col-md-12">
          <form class="needs-validation" method="POST" action="./PHP/atualizar_cliente.php" enctype="multipart/form-data" novalidate>

              <div class="mb-3">
                <label for="nome">Nome</label>
                <input type="text" class="form-control" id="nome" name="nome" placeholder="" value="<?php echo $nome?>" required />
                <div class="invalid-feedback">Digite um nome</div>
              </div>

              <div class="mb-3">
                <label for="senha">Nova senha</label>
                <input type="text" class="form-control" id="senha" name="senha" placeholder="" value=""/>
                <div class="invalid-feedback">Digite nova senha</div>
              </div>

              <div class="mb-3">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" name="email" value="<?php echo $email?>"
                  placeholder="seuemail@exemplo.com.br" required />
                <div class="invalid-feedback">
                  Digite novo email.
                </div>
              </div>
              <br>
              <button class="btn btn-primary btn-lg btn-block mb-5" type="submit">
                Salvar
              </button>
          </form>
        </div>
      </div>
      <hr class="featurette-divider">
    </div>
  </main>

  <?php include_once('./HTML/footer.html');?>

  <script src="JS\perfil.js"></script>
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
    integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous">
  </script>
  <!-- CDN da máscara do valor -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.15/jquery.mask.min.js"></script>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
    integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous">
  </script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
    integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous">
  </script>
</body>

</html>