<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <meta name="description" content="" />
    <meta
      name="author"
      content="Mark Otto, Jacob Thornton, and Bootstrap contributors"
    />
    <meta name="generator" content="Jekyll v4.1.1" />
    <title>Cadastre-se</title>
    <!-- Bootstrap core CSS -->
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
      integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
      crossorigin="anonymous"
    />

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
    <!-- Custom styles for this template -->
    <link href="./CSS/cadastro.css" rel="stylesheet" />
  </head>
  <body class="bg-light">  
    <?php require_once('HTML\navbar.html');?>
    <div class="container mt-5">
      <div class="py-5 text-center">
        <img
          class="d-block mx-auto mb-2"
          src="./images/logo-comercio-amigavel.png"
          alt=""
          width="150"
          height="150"
        />
        <h2>Cadastre-se</h2>
        <!-- <p class="lead">
          Below is an example form built entirely with Bootstrap’s form
          controls. Each required form group has a validation state that can be
          triggered by attempting to submit the form without completing it.
        </p> -->
      </div>

      <div class="row">
        <!-- <div class="col-md-4 order-md-2 mb-4">
          <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-muted">Your cart</span>
            <span class="badge badge-secondary badge-pill">3</span>
          </h4>
          <ul class="list-group mb-3">
            <li
              class="list-group-item d-flex justify-content-between lh-condensed"
            >
              <div>
                <h6 class="my-0">Product name</h6>
                <small class="text-muted">Brief description</small>
              </div>
              <span class="text-muted">$12</span>
            </li>
            <li
              class="list-group-item d-flex justify-content-between lh-condensed"
            >
              <div>
                <h6 class="my-0">Second product</h6>
                <small class="text-muted">Brief description</small>
              </div>
              <span class="text-muted">$8</span>
            </li>
            <li
              class="list-group-item d-flex justify-content-between lh-condensed"
            >
              <div>
                <h6 class="my-0">Third item</h6>
                <small class="text-muted">Brief description</small>
              </div>
              <span class="text-muted">$5</span>
            </li>
            <li class="list-group-item d-flex justify-content-between bg-light">
              <div class="text-success">
                <h6 class="my-0">Promo code</h6>
                <small>EXAMPLECODE</small>
              </div>
              <span class="text-success">-$5</span>
            </li>
            <li class="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>$20</strong>
            </li>
          </ul>

          <form class="card p-2">
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                placeholder="Promo code"
              />
              <div class="input-group-append">
                <button type="submit" class="btn btn-secondary">Redeem</button>
              </div>
            </div>
          </form>
        </div> -->
        <div class="col-md-12">
          <h4 class="mb-3">Dados Pessoais</h4>
          <form class="needs-validation"  method="POST" action="php\confirma_cadastro.php" novalidate>
            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="nome">Nome Completo</label>
                <input
                  type="text"
                  class="form-control"
                  id="nome"
                  name="nome"
                  placeholder=""
                  value=""
                  required
                />
                <div class="invalid-feedback">Insira seu nome.</div>
              </div>
              <div class="col-md-6 mb-3">
                <label for="negocio"
                  >Nome do negócio
                  <span class="text-muted">(Opcional)</span></label
                >
                <input
                  type="text"
                  class="form-control"
                  id="negocio"
                  name="negocio"
                  placeholder=""
                  value=""
                />
              </div>
            </div>
            
            <div class="row">
              <div class="col-md-8 mb-3">
                <label for="endereco">Endereço</label>
                <input
                  type="text"
                  class="form-control"
                  id="endereco"
                  name="endereco"
                  placeholder=""
                  required
                />
                <div class="invalid-feedback">Digite o endereço</div>
              </div>
              <div class="col-md-4 mb-3">
                <label for="cpf">CPF <span class="text-muted">(Somente numeros)</span></label>
                <input
                  type="text"
                  class="form-control"
                  id="cpf"
                  name="cpf"
                  onkeypress="$(this).mask('000.000.000-00');"
                  placeholder=""
                  required
                />
                <div class="invalid-feedback">Digite o CPF</div>
              </div>
            </div>

            <div class="mb-3">
              <label for="categoria">Categoria</label>
              <select class="custom-select d-block w-100" id="categoria" name="categoria" required>
                <option value="">Escolha...</option>
                <option>Serviços</option>
                <option>Produtos</option>
              </select>
              <div class="invalid-feedback" style="width: 100%">
                Escolha uma categoria.
              </div>
            </div>

            <div class="mb-3">
              <label for="email">Email</label>
              <input
                type="email"
                class="form-control"
                id="email"
                name="email"
                placeholder="seuemail@exemplo.com.br"
                required
              />
              <div class="invalid-feedback">
                Digite um endereço de email válido.
              </div>
            </div>

            <div class="mb-3">
              <label for="senha">Senha</label>
              <input
                type="password"
                class="form-control"
                id="senha"
                name="senha"
                placeholder="digite sua senha"
                required
              />
              <div class="invalid-feedback">
                Digite uma senha válida.
              </div>
            </div>

            <div class="mb-3">
              <label for="conf_senha">Confirme sua senha</label>
              <input
                type="password"
                class="form-control"
                id="conf_senha"
                name="conf_senha"
                placeholder="Confirme sua senha"
                required
              />
              <div class="invalid-feedback">
                Digite uma senha válida.
              </div>
            </div>
            <!-- <hr class="mb-4" />
            <div class="custom-control custom-checkbox">
              <input
                type="checkbox"
                class="custom-control-input"
                id="same-address"
              />
              <label class="custom-control-label" for="same-address"
                >Shipping address is the same as my billing address</label
              >
            </div>
            <div class="custom-control custom-checkbox">
              <input
                type="checkbox"
                class="custom-control-input"
                id="save-info"
              />
              <label class="custom-control-label" for="save-info"
                >Save this information for next time</label
              >
            </div>
            <hr class="mb-4" />

            <h4 class="mb-3">Payment</h4>

            <div class="d-block my-3">
              <div class="custom-control custom-radio">
                <input
                  id="credit"
                  name="paymentMethod"
                  type="radio"
                  class="custom-control-input"
                  checked
                  required
                />
                <label class="custom-control-label" for="credit"
                  >Credit card</label
                >
              </div>
              <div class="custom-control custom-radio">
                <input
                  id="debit"
                  name="paymentMethod"
                  type="radio"
                  class="custom-control-input"
                  required
                />
                <label class="custom-control-label" for="debit"
                  >Debit card</label
                >
              </div>
              <div class="custom-control custom-radio">
                <input
                  id="paypal"
                  name="paymentMethod"
                  type="radio"
                  class="custom-control-input"
                  required
                />
                <label class="custom-control-label" for="paypal">PayPal</label>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="cc-name">Name on card</label>
                <input
                  type="text"
                  class="form-control"
                  id="cc-name"
                  placeholder=""
                  required
                />
                <small class="text-muted">Full name as displayed on card</small>
                <div class="invalid-feedback">Name on card is required</div>
              </div>
              <div class="col-md-6 mb-3">
                <label for="cc-number">Credit card number</label>
                <input
                  type="text"
                  class="form-control"
                  id="cc-number"
                  placeholder=""
                  required
                />
                <div class="invalid-feedback">
                  Credit card number is required
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-3 mb-3">
                <label for="cc-expiration">Expiration</label>
                <input
                  type="text"
                  class="form-control"
                  id="cc-expiration"
                  placeholder=""
                  required
                />
                <div class="invalid-feedback">Expiration date required</div>
              </div>
              <div class="col-md-3 mb-3">
                <label for="cc-cvv">CVV</label>
                <input
                  type="text"
                  class="form-control"
                  id="cc-cvv"
                  placeholder=""
                  required
                />
                <div class="invalid-feedback">Security code required</div>
              </div>
            </div>
            <hr class="mb-4" /> -->
            <button class="btn btn-primary btn-lg btn-block" type="submit">
              Confirmar cadastro
            </button>
          </form>
        </div>
      </div>
      <hr class="featurette-divider">
      <footer class="container">
        <p class="text-center">&copy; 2020 todos os direitos reservados ao squad 8. & Recode &middot;</p>
      </footer>
    </div>
    <script
      src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
      integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
      integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
      integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
      crossorigin="anonymous"
    ></script>
    <script src="./JS/cadastro.js"></script>
  </body>
</html>