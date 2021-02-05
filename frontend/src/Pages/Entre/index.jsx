import React from "react";

import "./styles.css";

const Entre = () => {
    return(
        <div className="content container-fluid">
            <form className="form-signin text-center" method="post" action="#">
                <img className="mb-4" src="./images/logo-comercio-amigavel.png" alt="Logo" width={150} height={150} />
                <h1 className="h3 mb-3 font-weight-normal">Entrar</h1>
                <br />
                <a className="btn btn-lg btn-primary btn-block btn-vendedor" style={{textDecoration: 'none'}} href="login.php" role="button">Vendedor</a>
                <a className="btn btn-lg btn-primary btn-block btn-cliente" style={{textDecoration: 'none'}} href="login-cliente.php" role="button">Cliente</a>                
            </form>
        </div>
    );
}

export default Entre;