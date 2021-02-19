import React from 'react'

const Card = ({ img, imgPerfil, descricao, valor, opc, doacao , put }) => {
    // if (!img) {
    //     img =  '/images/imagens_anuncios/ponto-de-interrogação.jpeg'
    // }
    // if (put) {
    //     img = `http://localhost:3333/uploads/${img}`
    // }

    console.log(img)

    return (
        <div className="card mb-4 shadow-sm">
            <img id="imgPlaceholder" height={225} src={img === '' ? '/images/imagens_anuncios/ponto-de-interrogação.jpeg' : img} alt="Imagem do anuncio" />
            <div className="d-flex justify-content-center mt-3"><img style={{ boxShadow: '0px 0px 8px #000000' }} className="rounded-circle" width={50} height={50} src={imgPerfil} alt="Perfil vendedor" /></div>
            <div className="card-body">
                <p className="card-text text-center">{/*?php echo $negocio?*/}</p>
                <p id="descricaoAnuncio" className="card-text text-center">{descricao === '' ? 'O que? (breve descrição)' : descricao}</p>
                <p id="valorAnuncio" className="card-text text-center">{valor === '' ? 'Quanto? (Informe o preço)' : valor}</p>
                <p id="aceitaDoacao" className="card-text text-center">{doacao ? 'Aceito receber doaçao' : opc }</p>
            </div>
        </div>
    )
}

export default Card
