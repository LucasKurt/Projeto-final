import React from "react";

const CadastroVendedor = () => {
    return (
        <>
            <div className="container mt-5">
                <div className="py-5 text-center">
                    <img className="d-block mx-auto mb-2" src="/images/logo-comercio-amigavel.png" alt="logo" width={150} height={150} />
                    <h2>Cadastro de Vendedor</h2>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h4 className="mb-3">Dados Pessoais</h4>
                        <form className="needs-validation" method="POST" action="#" noValidate>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="nome">Nome Completo</label>
                                    <input type="text" className="form-control" id="nome" name="nome" placeholder="" required />
                                    <div className="invalid-feedback">Insira seu nome.</div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="negocio">Nome do negócio
                                    <span className="text-muted">(Opcional)</span></label>
                                    <input type="text" className="form-control" id="negocio" name="negocio" placeholder=""/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-8 mb-3">
                                    <label htmlFor="endereco">Endereço</label>
                                    <input type="text" className="form-control" id="endereco" name="endereco" placeholder="" required />
                                    <div className="invalid-feedback">Digite o endereço</div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label htmlFor="cpf">CPF <span className="text-muted">(Somente numeros)</span></label>
                                    <input type="text" className="form-control" id="cpf" name="cpf" placeholder="000.000.000-00" required />
                                    <div className="invalid-feedback">Digite o CPF</div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" id="email" name="email" placeholder="seuemail@exemplo.com.br" required />
                                <div className="invalid-feedback">
                                    Digite um endereço de email válido.
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="telefone">Telefone</label>
                                <input type="text" className="form-control" id="telefone" name="telefone" onKeyPress={() => {}} placeholder="(00) 00000-0000" required />
                                <div className="invalid-feedback">
                                    Digite um telefone válido.
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="senha">Senha</label>
                                <input type="password" className="form-control" id="senha" name="senha" placeholder="Digite sua senha" required />
                                <div className="invalid-feedback">
                                    Digite uma senha válida.
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="conf_senha">Confirme sua senha</label>
                                <input type="password" className="form-control" id="conf_senha" name="conf_senha" placeholder="Confirme sua senha" required />
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
    );
}

export default CadastroVendedor;