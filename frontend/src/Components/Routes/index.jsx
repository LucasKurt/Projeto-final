import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from '../../Pages/Home';
import Entre from '../../Pages/Entre';
import LoginVendedor from "../../Pages/Login/Vendedor";
import LoginCliente from "../../Pages/Login/Cliente";
import CadastroVendedor from "../../Pages/Cadastro/Vendedor";
import CadastroCliente from "../../Pages/Cadastro/Cliente";
import Dicas from '../../Pages/Dicas';
import Perfil from "../../Pages/Perfil";
import Anuncios from "../../Pages/Anuncios";

const Routes = () => {
    const auth = localStorage.getItem('auth');
    console.log(auth);
    return(
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/entre' component={Entre}/>
            <Route path='/login/vendedor' component={LoginVendedor}/>
            <Route path='/login/cliente' component={LoginCliente}/>
            <Route path="/login">
                { <Redirect to="/" /> }
            </Route>
            <Route path='/cadastro/vendedor' component={CadastroVendedor}/>
            <Route path='/cadastro/cliente' component={CadastroCliente}/>
            <Route path="/cadastro">
                { <Redirect to="/" /> }
            </Route>
            <Route path="/dicas">
                { auth === "vendedor" ? <Dicas /> : <Redirect to="/" /> }
            </Route>
            <Route path='/perfil' component={Perfil}/>
            <Route path="/anuncios" component={Anuncios}/>
        </Switch>
    );
}

export default Routes;