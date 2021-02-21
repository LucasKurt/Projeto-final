import React from 'react'
import { useHistory } from 'react-router-dom'

const Card = ({ img, imgPerfil, descricao, valor, opc, doacao, id_vendedor, redirecionar }) => {
    // if (!img) {
    //     img =  '/images/imagens_anuncios/ponto-de-interrogação.jpeg'
    // }
    // if (put) {
    //     img = `http://localhost:3333/uploads/${img}`
    // }

    const history = useHistory()
    
    return (

        <div className="col" onClick={() => redirecionar && history.push(`/vendedor/${id_vendedor}`)}>
            <div className="card mb-4 shadow-sm">
                <img className="img-fluid" style={{maxHeight:255}} id="imgPlaceholder" src={img === '' ? 'http://localhost:3333/uploads/anuncio/ponto-de-interrogação.jpeg' : img} alt="Imagem do anuncio" />
                <div className="d-flex justify-content-center mt-3"><img style={{ boxShadow: '0px 0px 8px #000000' }} className="rounded-circle" width={50} height={50} src={`http://localhost:3333/uploads/perfil/${imgPerfil}`} alt="Perfil vendedor" /></div>
                <div className="card-body">
                    <p className="card-text text-center">{/*?php echo $negocio?*/}</p>
                    <p id="descricaoAnuncio" className="card-text text-center">{descricao === '' ? 'O que? (breve descrição)' : descricao}</p>
                    <p id="valorAnuncio" className="card-text text-center">{valor === '' ? 'Quanto? (Informe o preço)' : valor}</p>
                    <p id="aceitaDoacao" className="card-text text-center">{doacao ? 'Aceito receber doaçao' : opc}</p>
                </div>
            </div>
        </div>
    )
}

export default Card
