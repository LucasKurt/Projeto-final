import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

const Entre = () => {
    return(
        <div className="content container-fluid">
            <form className="form-signin text-center" method="post" action="#">
                <img className="mb-4" src="./images/logo-comercio-amigavel.png" alt="Logo" width={150} height={150} />
                <h1 className="h3 mb-3 font-weight-normal">Entrar</h1>
                <br />
                <Link className="btn btn-lg btn-primary btn-block btn-vendedor" style={{textDecoration: 'none'}} to='/login/vendedor' role="button">Vendedor</Link>
                <Link className="btn btn-lg btn-primary btn-block btn-cliente" style={{textDecoration: 'none'}} to='/login/cliente' role="button">Cliente</Link>                
            </form>
        </div>
    );
}

export default Entre;