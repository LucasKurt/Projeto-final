import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from '../../Pages/Home';
import Sair from '../../Pages/Sair';
import Entre from '../../Pages/Entre';
import LoginVendedor from "../../Pages/Login/Vendedor";
import LoginCliente from "../../Pages/Login/Cliente";
import CadastroVendedor from "../../Pages/Cadastro/Vendedor";
import CadastroCliente from "../../Pages/Cadastro/Cliente";
import Dicas from '../../Pages/Dicas';
import Perfil from "../../Pages/Perfil";
import Anuncios from "../../Pages/Anuncios";
import Vendedor from '../../Pages/Vendedor';
import EditarPerfilVendedor from "../../Pages/EditarPerfilVendedor";
import PrivateRoute from '../Private/PrivateRoute';

const Routes = () => {
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
            <PrivateRoute path="/dicas" component={Dicas}/>
            <Route path='/perfil' component={Perfil}/>
            <Route path="/anuncios" component={Anuncios}/>
            <Route path="/sair" component={Sair}/>
            <Route path='/vendedor/:id' component={Vendedor}/>
            <PrivateRoute path="/editar/perfil/vendedor" component={EditarPerfilVendedor}/>
        </Switch>
    );
}

export default Routes;