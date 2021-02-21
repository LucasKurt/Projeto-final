import React from 'react'
//import { Link } from "react-router-dom";

const ListaDeAnuncios = ({ img, descricao, valor, doacao, crud, put, id, setId, setPut, setValues, setToggle, setSelectedFileUrl }) => {
    const editar =() => {
        setId(id)
        setPut(!put)
        setToggle(doacao)
        setSelectedFileUrl(img)
        setValues({descricao,valor})
    }
    return (
        <>
            <div className="row mb-2">
                <div className="col-md-3">

                    <img className="img-fluid" src={`http://localhost:3333/uploads/anuncio/${img}`} alt="imagem do anuncio" id="editarImg" />
                </div>
                <div className="col-md-9 d-flex flex-column vertical-align-center justify-content-center">
                    <p>{descricao}</p>
                    <p>R$ {valor}</p>
                    <p>{doacao && 'Aceito receber doação'}</p>
                    {crud && <div className="btn-group">
                        <a href={"#foto"} className="btn btn-secondary rounded" onClick={editar}>Editar</a>
                        <button className="btn btn-danger rounded ml-2" data-toggle="modal" data-target="#modalDeletar">Deletar</button>
                    </div>}
                </div>
            </div>
            <hr/>
        </>
    )
}

export default ListaDeAnuncios
