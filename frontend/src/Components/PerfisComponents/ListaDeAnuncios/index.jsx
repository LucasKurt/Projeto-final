import React from 'react'

import { enviarDados } from "../../../functions/database";

const ListaDeAnuncios = ({ imgAnuncio, imgAnuncioKey, descricao, valor, doacao, crud , values, setValues, img, setImg, id_anuncio, setDataForm }) => {
    const editar =() => {
        setImg({
            ...img,
            imgUrl: imgAnuncio,
            key: imgAnuncioKey

        })
        setValues({

            ...values,

            descricao,
            valor,
            toggle: doacao,
            put: true,
            id_anuncio 
        })
    }
    const obj = {
        key: imgAnuncioKey,
    }

    return (
        <>
            <div className="row mb-2">
                <div className="col-md-3">

                    <img className="img-fluid" style={{height: 150}} src={imgAnuncio} alt="imagem do anuncio"/>

                </div>
                <div className="col-md-9 d-flex flex-column vertical-align-center justify-content-center">
                    <p>{descricao}</p>
                    <p>R$ {valor}</p>
                    <p>{doacao && 'Aceito receber doação'}</p>
                    {crud && <div className="btn-group">
                        <a href={"#foto"} className="btn btn-secondary rounded" onClick={editar}>Editar</a>
                        <form onSubmit={enviarDados(`${process.env.REACT_APP_API_URL}/anuncios/${id_anuncio}`,obj,setDataForm,'DELETE')} > <button className="btn btn-danger rounded ml-2" type='submit' >Deletar</button> </form>
                    </div>}
                </div>
            </div>
            <hr/>
        </>
    )
}

export default ListaDeAnuncios
