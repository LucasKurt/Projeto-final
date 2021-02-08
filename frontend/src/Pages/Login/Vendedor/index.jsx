import React from "react";

import Login from "../../../Components/Login";

import "./styles.css";

const LoginVendedor = () => {
    return(
        <form className="form-signin text-center"  action="#">
            <Login
                tipo="Login Vendedor"
                caminho="/cadastro/vendedor"
            />
        </form>
    );
}

export default LoginVendedor;