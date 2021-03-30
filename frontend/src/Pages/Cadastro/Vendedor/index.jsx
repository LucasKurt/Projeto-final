import React from "react";

import Input from "../../../Components/Input";
import { enviarDados } from "../../../functions/database";

import ShowAlert from '../../../Components/Alerts/Vendedor';

const CadastroVendedor = () => {

    const initialState = () => {
        return(
            {
                nome: '',
                negocio: '',
                endereco: '',
                cpf: '',
                email: '',
                telefone: '',
                senha: '',
                confsenha: '',
            }
        );
    }

    const erros = {
        nome: false,
        negocio: false,
        endereco: false,
        cpf: false,
        email: false,
        telefone: false,
        senha: false,
        confsenha: false,
    }

    const [values,setValues] = React.useState(initialState)
    const [dados,setDados] = React.useState('')

    const atualizar = (event) => {
        const {name,value} = event.target
        setValues({
            ...values,
            [name]: value
        })
    }
    
    const showAlert = () => {
        const alert = document.getElementById('alert');
        alert.classList.toggle('d-none',false);
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
                    <h2>Cadastro de Vendedor</h2>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h4 className="mb-3">Dados Pessoais</h4>

                        <form className="needs-validation" onSubmit={enviarDados(`${process.env.REACT_APP_API_URL}/vendedor`, values, setDados)} noValidate>

                            <div className="row">
                                <Input
                                    type="text"
                                    className="col-md-6 mb-3"
                                    label="Nome"
                                    name="nome"
                                    placeholder=""
                                    value={values.nome}
                                    onChange={atualizar}
                                    erro={erros.nome}
                                    msgErro={'* Campo obrigatório'}
                                />
                                
                                <Input
                                    type="text"
                                    className="col-md-6 mb-3"
                                    label="Nome do negocio"
                                    span=" (opcional)"
                                    name="negocio"
                                    placeholder=""
                                    value={values.negocio}
                                    onChange={atualizar}
                                    erro={erros.negocio}
                                    msgErro={'* Campo obrigatório'}
                                />
                            </div>
                            <div className="row">
                                <Input
                                    type="text"
                                    className="col-md-8 mb-3"
                                    label="Endereço"
                                    name="endereco"
                                    placeholder=""
                                    value={values.endereco}
                                    onChange={atualizar}
                                    erro={erros.endereco}
                                    msgErro={'* Campo obrigatório'}
                                />
                                
                                <Input
                                    type="text"
                                    className="col-md-4 mb-3"
                                    label="CPF"
                                    span=""
                                    name="cpf"
                                    placeholder="000.000.000.00"
                                    value={values.cpf}
                                    onChange={atualizar}
                                    erro={erros.cpf}
                                    msgErro={'Digite um cpf válido'}
                                />
                            </div>
                            <Input
                                type="email"
                                className="mb-3"
                                label="Email"
                                name="email"
                                placeholder=""
                                value={values.email}
                                onChange={atualizar}
                                erro={erros.email}
                                msgErro={'* Campo obrigatório'}
                            />

                            <Input
                                type="text"
                                className="mb-3"
                                label="telefone"
                                name="telefone"
                                placeholder=""
                                value={values.telefone}
                                onChange={atualizar}
                                erro={erros.telefone}
                                msgErro={'* Campo obrigatório'}
                            />

                            <Input
                                type="password"
                                className="mb-3"
                                label="Senha"
                                name="senha"
                                placeholder=""
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
                                placeholder=""
                                value={values.confSenha}
                                onChange={atualizar}
                                erro={erros.confsenha}
                                msgErro={'* Campo obrigatório'}
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

export default CadastroVendedor;