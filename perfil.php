<?php
session_start();
if (isset($_SESSION['id'])) {
    include_once('./php/bd_connect.php');
    $id = $_SESSION['id'];
    $nome = $_SESSION['nome'];
    $negocio = $_SESSION['negocio'];
    $img_perfil = $_SESSION['img_perfil'];
    if ($negocio == ""){
        $negocio = $nome;
    }
} else{
    header('Location: index.php');
    die();
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Perfil</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
    integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <!-- Custom styles for this template -->
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
    <?php require_once('./HTML/navbarSair.html'); ?>
    <main role="main">

        <!-- Main jumbotron for a primary marketing message or call to action -->
        <div class="jumbotron">
            <div class="container">
                <div class="row">
                    <div class="col-md-3 d-flex justify-content-center align-items-center">
                        <img width="250" height="250" class="rounded-circle" src="<?php echo $img_perfil?>" alt="">
                    </div>
                    <form method="post" class="form-group col-md-9 d-flex flex-column justify-content-center">
                        <h2 class="display-4"><?php echo $nome?></h2>
                        <div class="row d-flex vertical-align-center">
                        <input class="ml-3 col-8 form-control" placeholder="coloque o link da imagem aqui" type="text" name="img_perfil">
                            <button class="btn btn-primary btn-lg" type="submit">Trocar Foto</button>
                        </div>
                    </form>
                    <?php    
                        if (isset($_POST['img_perfil'])) {
                            $img = $_POST['img_perfil'];

                            if ($img == "") {
                                echo "<script>
                                alert('Insira um link para trocar a foto')
                                </script>
                            ";
                            } else {

                            $sql ="UPDATE cadastro SET img_perfil = '$img' WHERE id = '$id'";
                            $nova_img = $conn->query($sql);
                            $_SESSION['img_perfil'] = $img;
                            header("Refresh:0");
                            }
                        }
                    ?> 
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-md-4 d-flex justify-content-center align-items-center">
                    <div class="card mb-4 shadow-sm">
                        <img id="imgAnuncio" height="225" src="images\ponto-de-interrogação.jpeg" alt="Imagem do anuncio">
                        <div class="d-flex justify-content-center mt-3"><img style="box-shadow: 0px 0px 8px #000000;" class="rounded-circle" width="50" height="50" src="<?php echo $img_perfil?>" alt=""></div>
                        <div class="card-body">
                            <p class="card-text text-center"><?php echo $negocio?></p>
                            <p id="descricaoAnuncio" class="card-text text-center">O que? (breve descrição)</p>
                            <p id="valorAnuncio" class="card-text text-center">Quanto? (Informe o preço)</p>
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
                <div class="col-md-8">
                    <h3 class="text-center">Crie seu anúncio</h3>
                    <form class="needs-validation"  method="POST" action="php\publicar.php" novalidate>
                        <div class="row">
                            <div class="col-md mb-3">
                                <label for="img">Coloque o link da imagem</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="img"
                                    name="img"
                                    placeholder=""
                                    value=""
                                    required
                                    onchange="atualizaImg()"
                                />
                                <div class="invalid-feedback">Coloque a imagem do anúncio</div>
                            </div>
                        </div>
                        
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label for="descricao">Descrição</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="descricao"
                                    name="descricao"
                                    placeholder=""
                                    required
                                    onchange="atualizaDescricao()"
                                />
                                <div class="invalid-feedback">Escreva a descrição</div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="valor">Valor</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="valor"
                                    name="valor"
                                    value=""
                                    onkeypress="$(this).mask('R$ 00')"
                                    placeholder=""
                                    required
                                    onchange="atualizaValor()"
                                />
                                <div class="invalid-feedback">Informe o Valor</div>
                            </div>
                        </div>
                        <button class="btn btn-primary btn-lg btn-block" type="submit">Anunciar</button>
                    </form>
                </div>
            </div>
        </div>

        <div class="container">
            <!-- Example row of columns -->
            <div class="row">
                <div class="col-md-12">
                    <h2>Anúncios publicados</h2>
                    <hr>
                    <?php
                        $sql = "SELECT * FROM anuncios WHERE id_pessoa = '$id'";
                        $result = $conn->query($sql);
                        if ($anuncios = $result->num_rows >0) {
                            while ($anuncios = $result->fetch_assoc()) {
                                if($anuncios['valor']==""){$anuncios['valor']='Valor à combinar';}?>
                                <div class="row mb-2">
                                    <div class="col-md-3">
                                        <img height="150" src="<?php echo $anuncios['img'] ?>" alt="">
                                    </div>
                                    <div class="col-md-9 d-flex flex-column vertical-align-center justify-content-center">
                                        <p><?php echo utf8_encode($anuncios['descricao']) ?></p>
                                        <p><?php echo utf8_encode($anuncios['valor']) ?></p>
                                        <p><a class="btn btn-secondary" href="#" role="button">Editar</a></p>
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
        </div> <!-- /container -->
    </main>

  <!-- Footer -->
  <?php
  include_once('./HTML/footer.html');
  ?>
  <!-- Footer -->
  
    <script src="JS\perfil.js"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
    integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
    crossorigin="anonymous"></script>
    <!-- CDN da máscara do valor -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.15/jquery.mask.min.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
    integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
    crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
    integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
    crossorigin="anonymous"></script>
</body>
</html>