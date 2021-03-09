import React from "react";

import { enviarDados, pegarDados } from "../../../functions/database";

const initialState = () => {
  return(
    {
      nome: '',
      email: '',
      senha: '',
      confSenha: '',
    }
  );
}

const PerfilCliente = () => {
  
  const [values,setValues] = React.useState(initialState);
  const [cliente,setCliente] = React.useState('');
  const [dados,setDados] = React.useState('');
  const id = localStorage.getItem('id');

  React.useEffect(() => {
    pegarDados(`${process.env.REACT_APP_API_URL}/cliente/${id}`,setCliente)
  },[dados,id])

  

  const atualizar = (event) => {
    const {name,value} = event.target
    setValues({
      ...values,
      [name]: value
    });
  }
  console.log(dados)
  return (
    <main id="topo" role="main">
      <div className="jumbotron">
        <div className="container">
          <h2 className="display-4">{cliente.nome}</h2>
        </div>
      </div>
      <div className="container mb-5">
        <div className="py-5 text-center">
          <h2>Editar perfil</h2>
        </div>
        <div className="row">
          <div className="col-md-12">
            <form className="needs-validation" onSubmit={enviarDados(`${process.env.REACT_APP_API_URL}/cliente/${id}`,values,setDados,'PUT')} noValidate>
              <div className="mb-3">
                <label htmlFor="nome">Novo nome</label>
                <input
                  type="text"
                  className="form-control"
                  id="nome"
                  name="nome"
                  value={values.nome}
                  onChange={atualizar}
                  placeholder=''
                  required
                />
                <div className="invalid-feedback">Digite um nome</div>
              </div>
              <div className="mb-3">
                <label htmlFor="email">Novo email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={atualizar}
                  placeholder="email@exemplo.com.br"
                  required
                />
                <div className="invalid-feedback">Digite novo email.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="senha">Nova senha</label>
                <input
                  type="text"
                  className="form-control"
                  id="senha"
                  name="senha"
                  value={values.senha}
                  onChange={atualizar}
                  placeholder=''
                />
                <div className="invalid-feedback">Digite nova senha</div>
              </div>
              <div className="mb-3">
                <label htmlFor="confSenha">Confirme a senha</label>
                <input
                  type="text"
                  className="form-control"
                  id="confSenha"
                  name="confSenha"
                  value={values.confSenha}
                  onChange={atualizar}
                  placeholder=''
                />
                <div className="invalid-feedback">Digite nova senha</div>
              </div>
              <br />
                <button className="btn btn-primary btn-lg btn-block mb-5" type="submit" > Salvar  </button>
            </form>
          </div>
        </div>
        <hr className="featurette-divider" />
      </div>
    </main>
  );
};

export default PerfilCliente;
