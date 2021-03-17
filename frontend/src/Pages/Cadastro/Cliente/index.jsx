import React from "react";

import Input from "../../../Components/Input";
import { enviarDados } from "../../../functions/database";

import ShowAlert from '../../../Components/Alerts/Cliente';

const CadastroCliente = () => {

    const initialState = () => {
        return(
            {
                nome: '',
                email: '',
                senha: '',
                confsenha: '',
            }
        );
    }

    const erros = {
        nome: false,
        email: false,
        senha: false,
        confsenha: false,
    }

    const [values,setValues] = React.useState(initialState);
    const [dados,setDados] = React.useState('');

    const showAlert = () => {
        const alert = document.getElementById('alert');
        alert.classList.toggle('d-none',false);
    }

    const atualizar = (event) => {
        const {name,value} = event.target
        setValues({
            ...values,
            [name]: value
        })
    } 

    if(dados) {
        for (const dado of dados) {
            erros[dado.param] = true
        }
        if(dados[0].tipo) {
            showAlert()
        } 
    }
    

    return (
        <>
            <div className="container pt-5">
                <div className="text-center">
                    <img className="d-block mx-auto" src="/images/logo-comercio-amigavel.png" alt="logo" width={150} height={150} />
                    <h2>Cadastro de cliente</h2>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h4 className="mb-3">Dados Pessoais</h4>

                        <form className="needs-validation" onSubmit={enviarDados(`${process.env.REACT_APP_API_URL}/cliente`, values, setDados)} noValidate>

                            <div className="row">
                                <Input
                                    type="text"
                                    className="col-md-6 mb-3"
                                    label="Nome completo"
                                    name="nome"
                                    placeholder="Digite seu nome"
                                    value={values.nome}
                                    onChange={atualizar}
                                    erro={erros.nome}
                                    msgErro={'* Campo obrigatório'}
                                />
                                
                                <Input
                                    type="email"
                                    className="col-md-6 mb-3"
                                    label="Email"
                                    name="email"
                                    placeholder="seuemail@exemplo.com.br"
                                    value={values.email}
                                    onChange={atualizar}
                                    erro={erros.email}
                                    msgErro={'* Campo obrigatório'}
                                />
                            </div>


                            <Input
                                type="password"
                                className="mb-3"
                                label="Senha"
                                name="senha"
                                placeholder="Digite uma senha forte"
                                value={values.senha}
                                onChange={atualizar}
                                erro={erros.senha}
                                msgErro={'* Campo obrigatório'}

                            />
                            
                            <Input
                                type="password"
                                className="mb-3"
                                label="Confirme a sua senha"
                                name="confSenha"
                                placeholder="Confirme sua senha"
                                value={values.confSenha}
                                onChange={atualizar}
                                erro={erros.confsenha}
                                msgErro={'As senhas devem ser iguais'}
                            />
                            
                            <br />
                            
                            <div id="alert" className="alert d-none" role="alert">
                                <ShowAlert/>
                            </div>

                            <button className="btn btn-primary btn-lg btn-block" type="submit">
                                Confirmar cadastro
                            </button>
                        </form>
                    </div>
                </div>
                <hr className="featurette-divider" />
            </div>
        </>
    );
}

export default CadastroCliente;