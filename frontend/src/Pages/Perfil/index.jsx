import React from 'react'

import PerfilVendedor from "../../Components/Perfis/Vendedor";
import PerfilCliente from "../../Components/Perfis/Cliente";

import './styles.css'

const Perfil = () => {
    const auth = localStorage.getItem('auth');
    if (auth) {
        if (auth === 'vendedor') {
            return <PerfilVendedor/>
        } else {
            return <PerfilCliente/>  
        }
    } else {
        return (
            <p> <br/> <center>Deslogado</center> <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> </p>
        );
    }
}

export default Perfil
