import React from 'react'
import { Link } from 'react-router-dom';


const Login = (props) => {
    return(
        <>
            <img className="mt-4" src="/images/logo-comercio-amigavel.png" alt="Logo" width={150} height={150} />
            <h1 className="h3 mb-3 font-weight-normal">{props.tipo}</h1>
            <label htmlFor="email" className="sr-only">Email address</label>
            <input type="email" id="email" name="email" className="form-control" placeholder="Email" required autoFocus />
            <label htmlFor="senha" className="sr-only">Password</label>
            <input type="password" id="senha" name="senha" className="form-control" placeholder="Senha" required />
            <button className="btn btn-lg btn-primary btn-block" type="submit">Entre</button>
            <br />
            <Link to={props.caminho}>Cadastre-se</Link>
        </>
    );
}

export default Login;