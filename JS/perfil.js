// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation')

        // Loop over them and prevent submission
        Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
    }, false)
})()

function atualizaImg(){
    let img = document.getElementById('img');
    let imgAnuncio = document.getElementById('imgAnuncio');
    if (img.value == "") {
        imgAnuncio.src = "../images/ponto-de-interrogação.jpeg"
    } else {
        imgAnuncio.src = img.value;  
    }
}

function atualizaDescricao(){
    let descricao = document.getElementById('descricao');
    let descricaoAnuncio = document.getElementById('descricaoAnuncio');
    if (descricao.value == "") {
        descricaoAnuncio.innerHTML = "O que? (breve descrição)"
    } else {
        descricaoAnuncio.innerHTML = descricao.value;  
    }
}

function atualizaValor(){
    let valor = document.getElementById('valor');
    let valorAnuncio = document.getElementById('valorAnuncio');
    if (valor.value == "") {
        valorAnuncio.innerHTML = "Quanto? (Informe o preço)"
    } else {
        valorAnuncio.innerHTML = valor.value;
    } 
}