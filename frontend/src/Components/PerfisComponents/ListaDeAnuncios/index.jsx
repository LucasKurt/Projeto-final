import React from 'react'

import api from '../../../functions/services'

const ListaDeAnuncios = ({ imgAnuncio, descricao, valor, doacao, crud , values, setValues, img, setImg, id_anuncio, setDataForm }) => {
    const editar =() => {
        setValues({
            ...values,            
            descricao,
            valor,
            toggle: doacao,
            put: true,
            id_anuncio 
        })
        setImg({
            ...img,
            imgUrl: `http://localhost:3333/uploads/${imgAnuncio}`
        })
    }
    const deletar = (event) => {
        event.preventDefault();
        api.delete(`http://localhost:3333/anuncios/${id_anuncio}`)
        .then(response => setDataForm(response.data))
        .catch(error => setDataForm(error.response.data.errors));
    }
    return (
        <>
            <div className="row mb-2">
                <div className="col-md-3">
                    <img className="img-fluid" style={{height: 150}} src={`http://localhost:3333/uploads/${imgAnuncio}`} alt="imagem do anuncio"/>
                </div>
                <div className="col-md-9 d-flex flex-column vertical-align-center justify-content-center">
                    <p>{descricao}</p>
                    <p>R$ {valor}</p>
                    <p>{doacao && 'Aceito receber doação'}</p>
                    {crud && <div className="btn-group">
                        <a href={"#foto"} className="btn btn-secondary rounded" onClick={editar}>Editar</a>
                        <form onSubmit={deletar} > <button className="btn btn-danger rounded ml-2" type='submit' >Deletar</button> </form>
                    </div>}
                </div>
            </div>
            <hr/>
        </>
    )
}

export default ListaDeAnuncios
