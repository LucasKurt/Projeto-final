<?php
session_start();
if (isset($_SESSION['id_vendedor'])) {
    include_once('./php/bd_connect.php');
    $id = $_SESSION['id_vendedor'];
    $nome = $_SESSION['nome_vendedor'];
    $negocio = $_SESSION['negocio_vendedor'];
    $img_perfil = $_SESSION['img_perfil_vendedor'];
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
    <?php require_once('./HTML/navbarSair.html'); ?>
    <main role="main">
        <div class="jumbotron">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-3 d-flex flex-column justify-content-between align-items-center">
                        <img width="250" height="250" class="rounded-circle" src="<?php echo $img_perfil?>" alt="">                        
                        <a class="btn-lg btn-primary mt-3" href="./editar_perfil_vendedor.php" role="buttom">Editar Perfil</a>                        
                    </div>
                    <div class="col-md-9 d-flex flex-column justify-content-start align-items-start border border-primary">
                        <h2 class="display-3"><?php echo $negocio?></h2>
                    </div>
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
                    <h3 class="text-center" id="titulo">Crie seu anúncio</h3>
                    <form class="needs-validation"  method="POST" action="php/publicar.php" novalidate>
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
                                <textarea class="form-control" name="descricao" id="descricao" onchange="atualizaDescricao()" required cols="30" rows="4"></textarea>
                                <div class="invalid-feedback">Escreva a descrição</div>
                            </div>
                            <div class="col-md-6 mb-3 d-flex flex-column justify-content-between">
                                <div class="row">
                                    <label for="valor">Valor</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="valor"
                                        name="valor"
                                        value=""
                                        onkeypress="$(this).mask('#.##0,00', {reverse: true});"
                                        placeholder="R$"
                                        required
                                        onchange="atualizaValor()"
                                    />
                                    <div class="invalid-feedback">Informe o Valor</div>
                                </div>
                                <div class="row d-flex align-items-baseline justify-content-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle-fill text-primary mr-3" viewBox="0 0 16 16">
                                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412l-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                                    </svg>
                                    <label for="">Aceita receber doação?</label>
                                    <div>
                                        <label class="switch ml-3 d-flex align-items-end">
                                            <input type="checkbox">
                                            <span class="slider round"></span>
                                        </label>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <input
                            type="hidden"
                            class="form-control"
                            id="idAnuncio"
                            value=""
                        />
                        <button class="btn btn-primary btn-lg btn-block" type="submit" id="butao">Anunciar</button>
                    </form>
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
                                        <img height="150" src="<?php echo $anuncios['img']?>" alt="" id="editarImg">
                                    </div>
                                    <div class="col-md-9 d-flex flex-column vertical-align-center justify-content-center">
                                        <p><?php echo utf8_encode($anuncios['descricao'])?></p>
                                        <p><?php echo utf8_encode($anuncios['valor'])?></p>
                                        <div class="btn-group">
                                            <a href="#foto"><button class="btn btn-secondary" onclick="editar('<?php echo $anuncios['img']?>','<?php echo utf8_encode($anuncios['descricao'])?>','<?php echo utf8_encode($anuncios['valor'])?>','<?php echo utf8_encode($anuncios['id'])?>')">Editar</button></a>
                                            <button class="btn btn-danger rounded ml-2" data-toggle="modal" data-target="#modalDeletar" onclick="deletar('<?php echo utf8_encode($anuncios['id'])?>')">Deletar</button>
                                        </div>
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
    
    <?php require_once('./HTML/modalDeletar.html'); ?>
    <?php include_once('./HTML/footer.html'); ?>

    <script src="JS\perfil.js"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
    integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
    crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.15/jquery.mask.min.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
    integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
    crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
    integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
    crossorigin="anonymous"></script>
</body>
</html>