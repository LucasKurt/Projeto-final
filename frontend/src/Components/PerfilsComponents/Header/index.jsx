import React from 'react'

import StarRating from '../../StarRating'

const PerfilHeader = ({ img,editar,negocio,telefone }) => {
    return (
        <div className="jumbotron">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 d-flex flex-column justify-content-between align-items-center">
                        <img width={250} height={250} className="rounded-circle" src={`/images/perfil_vendedor/${img}`} alt="Foto de perfil" />
                        {editar && <a className="btn-lg btn-primary mt-3" id="foto" href="./editar_perfil_vendedor.php" role="buttom">Editar perfil</a>}
                    </div>
                    <div className="col-md-9 d-flex flex-column justify-content-start align-items-start">
                        <h2 className="display-3">{negocio}</h2>
                        <StarRating/>
                        {/* <div className="row ml-1 my-4 align-items-start">
                            <img src="/images/rating-stars.png" alt="Rating Stars" />
                            <p className="col d-flex flex-column align-items-end" style={{ fontSize: 32 }}>4.6</p>
                        </div> */}
                        <div className="row ml-1 align-items-start">
                            <img src="/images/whats-logo.png" alt="WhatsApp Logo" />
                            <p className="col d-flex flex-column align-items-end" style={{ fontSize: 32 }}>{telefone}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PerfilHeader
