import React from "react";

import Login from "../../../Components/Login";

const LoginVendedor = () => {
    return(    
        <Login
            tipo="vendedor"
            titulo="Login Vendedor"
            caminho="/cadastro/vendedor"
        />  
    );
}

export default LoginVendedor;