<?php
  session_start();
  if (isset($_SESSION['id_vendedor'])) {
      $id = $_SESSION['id_vendedor'];
      $nome = $_SESSION['nome_vendedor'];
      $negocio = $_SESSION['negocio_vendedor'];
      $endereco = $_SESSION['endereco_vendedor'];
      $email = $_SESSION['email_vendedor'];
      $telefone = $_SESSION['telefone_vendedor'];
      $img_perfil = $_SESSION['img_perfil_vendedor'];
  } else{
      header('Location: index.php');
      die();
  }
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <link rel="icon" type="image/x-icon" href="././images/favicon.ico">

  <title>Edição de perfil</title>
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
  <?php require_once('./HTML/navbarSair.html'); ?>
  <div class="container mt-5">
    <div class="py-5 text-center">
      <img class="d-block mx-auto mb-2" src="./images/perfil_vendedor/<?php echo $img_perfil?>" id="imgPlaceholder" alt="" width="200"
        height="200" />
      <br>
      <h2>Editar perfil</h2>

    </div>

    <div class="row">

      <div class="col-md-12">
        <form class="needs-validation" method="POST" action="./PHP/atualizar_vendedor.php" enctype="multipart/form-data" novalidate>
          <div class="custom-file mb-3">
            <input type="file" name="fileUpload" class="custom-file-input" id="chooseFile">
            <label class="custom-file-label" for="chooseFile">Selecione uma foto</label>
          </div>
          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="nome">Nome Completo</label>
              <input type="text" class="form-control" id="nome" name="nome" placeholder="" value="<?php echo $nome?>"
                required />
              <div class="invalid-feedback">Insira seu nome.</div>
            </div>
            <div class="col-md-6 mb-3">
              <label for="negocio">Nome do negócio
                <span class="text-muted">(Opcional)</span></label>
              <input type="text" class="form-control" id="negocio" name="negocio" placeholder=""
                value="<?php echo $negocio?>" />
            </div>
          </div>

          <div>
            <div class="mb-3">
              <label for="endereco">Endereço</label>
              <input type="text" class="form-control" id="endereco" name="endereco" value="<?php echo $endereco?>"
                placeholder="" required />
              <div class="invalid-feedback">Digite o endereço</div>
            </div>
          </div>

          <div class="mb-3">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email" name="email" value="<?php echo $email?>"
              placeholder="seuemail@exemplo.com.br" required />
            <div class="invalid-feedback">
              Digite um endereço de email válido.
            </div>
          </div>

          <div class="mb-3">
            <label for="telefone">Telefone</label>
            <input type="text" class="form-control" id="telefone" name="telefone"
              onkeypress="$(this).mask('(00) 00000-0000')" value="<?php echo $telefone?>" placeholder="(00) 00000-0000"
              required />
            <div class="invalid-feedback">
              Digite um telefone válido.
            </div>
          </div>

          <br>
          <button class="btn btn-primary btn-lg btn-block" type="submit">
            Salvar
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
  <!-- CDN para funcionar a mascara dos campos de CPF e Telefone -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.15/jquery.mask.min.js"></script>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
    integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous">
  </script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
    integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous">
  </script>
  <script src="./JS/cadastro.js"></script>
  <script src="JS/atualizar.js"></script>

</body>

</html>