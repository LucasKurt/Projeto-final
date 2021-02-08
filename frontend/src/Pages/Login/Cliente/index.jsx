import React from "react";

import Login from "../../../Components/Login";

import "./styles.css";

const LoginVendedor = () => {
    return(
        <form className="form-signin text-center"  action="#">
            <Login
                tipo="Login Cliente"
                caminho="/cadastro/cliente"
            />
        </form>
    );
}

export default LoginVendedor;