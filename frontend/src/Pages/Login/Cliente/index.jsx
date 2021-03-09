import React from "react";

import Login from "../../../Components/Login";

const LoginCliente = () => {
    return(
        <Login
            tipo="cliente"
            titulo="Login Cliente"
            caminho="/cadastro/cliente"
        />
    );
}

export default LoginCliente;