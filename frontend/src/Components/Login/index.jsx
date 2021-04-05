import React from 'react'
import { Link, useHistory } from 'react-router-dom';

import { enviarDados } from "../../functions/database";

import "./styles.css";

const Login = (props) => {
    const [dados,setDados] = React.useState('')
    const [email,setEmail] = React.useState('')
    const [senha,setSenha] = React.useState('')
    const history = useHistory()
    var alert = false
    const obj = {
        email,
        senha,
        tipo: props.tipo
    }
    console.log(dados)
    if (dados.tipo === "vendedor") {
        localStorage.setItem('auth',dados.tipo);
        localStorage.setItem('id',dados.id);
        history.push("/dicas");
    }
    if (dados.tipo === "cliente") {
        localStorage.setItem('auth',dados.tipo)
        localStorage.setItem('id',dados.id);
        history.push("/perfil");
    }
    if(dados === 'login ou senha invalidos'){
        alert = true
    } else{
        alert = false
    } 
    return(
        <form className="form-signin text-center" onSubmit={enviarDados(`${process.env.REACT_APP_API_URL}/login`,obj,setDados)}>
            <img  src="/images/logo-comercio-amigavel.png" alt="Logo" width={150} height={150} />
            <h1 className="h3 mb-3 font-weight-normal">{props.titulo}</h1>
            <label htmlFor="email" className="sr-only">Email address</label>
            <input 
                className="form-control"
                type="email" 
                id="email" 
                name="email" 
                value={email}
                onChange={event => setEmail(event.target.value)}  
                placeholder="Email" 
                required 
                autoFocus 
            />
            <label htmlFor="senha" className="sr-only">Password</label>
            <input 
                type="password" 
                id="senha" 
                name="senha"
                value={senha}
                onChange={event => setSenha(event.target.value)} 
                className="form-control" 
                placeholder="Senha" 
                required 
            />
            { alert && <div className="alert alert-danger alert-dismissible fade show" role="alert">
                Login ou senha invalidos 
                {/* <button type="button" onClick={() => alert = false } className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button> */}
            </div> }
            <button className="btn btn-lg btn-primary btn-block" type="submit">Entre</button>
            <br />
            <Link to={props.caminho}>Cadastre-se</Link>
        </form>
    );
}

export default Login;