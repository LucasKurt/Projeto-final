(function () {
  "use strict";

  window.addEventListener(
    "load",
    function () {
      var forms = document.getElementsByClassName("needs-validation");

      Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }

            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $("#imgPlaceholder").attr("src", e.target.result);
    };

    reader.readAsDataURL(input.files[0]); // convert to base64 string
  }
}

$("#chooseFile").change(function () {
  readURL(this);
});

function atualizaDescricao() {
  let descricao = document.getElementById("descricao");
  let descricaoAnuncio = document.getElementById("descricaoAnuncio");
  if (descricao.value == "") {
    descricaoAnuncio.innerHTML = "O que? (breve descrição)";
  } else {
    descricaoAnuncio.innerHTML = descricao.value;
  }
}

function atualizaValor() {
  let valor = document.getElementById("valor");
  let valorAnuncio = document.getElementById("valorAnuncio");
  if (valor.value == "") {
    valorAnuncio.innerHTML = "Quanto? (Informe o preço)";
  } else {
    valorAnuncio.innerHTML = valor.value;
  }
}

const doacao = document.getElementById("doacao");
const aceitaDoacao = document.getElementById("aceitaDoacao");

doacao.addEventListener("change", (event) => {
  if (event.target.checked) {
    aceitaDoacao.innerHTML = "Aceito receber doação";
  } else {
    aceitaDoacao.innerHTML = "Aceita doação? (Marque a opção)";
  }
});

function editar(editarImg, editarDescricao, editarValor, editarId) {
  let titulo = document.getElementById("titulo");
  document.getElementById("chooseFile").required = false;
  let imgAnuncio = document.getElementById("imgPlaceholder");
  let descricao = document.getElementById("descricao");
  let descricaoAnuncio = document.getElementById("descricaoAnuncio");
  let valor = document.getElementById("valor");
  let valorAnuncio = document.getElementById("valorAnuncio");
  let butao = document.getElementById("butao");
  let idAnuncio = document.getElementById("idAnuncio");
  titulo.innerHTML = `Editar anúncio (${editarDescricao})`;
  imgAnuncio.src = `./images/imagens_anuncios/${editarImg}`;
  descricao.value = editarDescricao;
  descricaoAnuncio.innerHTML = editarDescricao;
  valor.value = editarValor;
  valorAnuncio.innerHTML = editarValor;
  idAnuncio.setAttribute("name", "id_anuncio");
  idAnuncio.value = editarId;
  butao.innerHTML = "Salvar";
}

function deletar(deletarId) {
  let deletar = document.getElementById("deletar");
  deletar.value = deletarId;
}
