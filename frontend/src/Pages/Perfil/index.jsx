import React from 'react'
import { Redirect } from 'react-router-dom';

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
            <Redirect to='/' />
        );
    }
}

export default Perfil
