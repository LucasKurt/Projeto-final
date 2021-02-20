import React from 'react'

import { enviarDados } from "../../../functions/database";

function CadastroCliente() {
    //const [dados,setDados] = React.useEffect('');
    const [nome,setNome] = React.useState('');
    const [email,setEmail] = React.useState('');
    const [senha,setSenha] = React.useState('');
    const [confSenha,setConfSenha] = React.useState('');
    const [dados,setDados] = React.useState('');
    const obj ={
        nome,
        email,
        senha,
        confSenha
    }
    return (
        <>
            <div className="container pt-5">
                <div className="text-center">
                    <img className="d-block mx-auto mb-2" src="/images/logo-comercio-amigavel.png" alt="logo" width={150} height={150} />
                    <h2>Cadastro de Cliente</h2>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h4 className="mb-3">Dados Pessoais</h4>
                        <form className="needs-validation" onSubmit={enviarDados('http://localhost:3333/cliente', obj, setDados)} noValidate>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="nome">Nome Completo</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        id="nome" 
                                        name="nome"
                                        value={nome}
                                        onChange={event => setNome(event.target.value)} 
                                        placeholder="" 
                                        required 
                                    />
                                    <div className="invalid-feedback">Insira seu nome.</div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="email">E-mail</label>
                                    <input 
                                        type="email" 
                                        className="form-control" 
                                        id="email" 
                                        name="email" 
                                        value={email}
                                        onChange={event => setEmail(event.target.value)}
                                        placeholder="seuemail@exemplo.com.br"
                                        required 
                                    />
                                    {false && <p className="text-danger d-none">{dados.errors[1].msg}</p>}
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="senha">Senha</label>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    id="senha" 
                                    name="senha"
                                    value={senha}
                                    onChange={event => setSenha(event.target.value)} 
                                    placeholder="Digite sua senha" 
                                    required 
                                />
                                <div className="invalid-feedback">
                                    Digite uma senha válida.
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="conf_senha"> Confirme sua senha</label>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    id="conf_senha" 
                                    name="conf_senha"
                                    value={confSenha}
                                    onChange={event => setConfSenha(event.target.value)} 
                                    placeholder="Confirme sua senha" 
                                    required 
                                />
                                <div className="invalid-feedback">
                                    As senhas devem ser iguais.
                                </div>
                            </div>
                            <br />
                            <button className="btn btn-primary btn-lg btn-block" type="submit">
                                Confirmar cadastro
                            </button>
                        </form>
                    </div>
                </div>
                <hr className="featurette-divider" />
            </div>

        </>
    )
}

export default CadastroCliente
