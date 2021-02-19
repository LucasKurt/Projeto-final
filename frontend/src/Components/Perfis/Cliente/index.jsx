import React from "react";

const PerfilCliente = () => {
  return (
    <main role="main">
      <div className="jumbotron">
        <div className="container">
          <h2 className="display-4">{/*?php echo $nome?*/}Jane Doe</h2>
        </div>
      </div>
      <div className="container mb-5">
        <div className="py-5 text-center">
          <h2>Editar perfil</h2>
        </div>
        <div className="row">
          <div className="col-md-12">
            <form
              className="needs-validation"
              method="POST"
              action="./PHP/atualizar_cliente.php"
              encType="multipart/form-data"
              noValidate
            >
              <div className="mb-3">
                <label htmlFor="nome">Nome</label>
                <input
                  type="text"
                  className="form-control"
                  id="nome"
                  name="nome"
                  placeholder
                  defaultValue={""}
                  required
                />
                <div className="invalid-feedback">Digite um nome</div>
              </div>
              <div className="mb-3">
                <label htmlFor="senha">Nova senha</label>
                <input
                  type="text"
                  className="form-control"
                  id="senha"
                  name="senha"
                  placeholder

                />
                <div className="invalid-feedback">Digite nova senha</div>
              </div>
              <div className="mb-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"

                  placeholder="seuemail@exemplo.com.br"
                  required
                />
                <div className="invalid-feedback">Digite novo email.</div>
              </div>
              <br />
              <button
                className="btn btn-primary btn-lg btn-block mb-5"
                type="submit"
              >
                Salvar
              </button>
            </form>
          </div>
        </div>
        <hr className="featurette-divider" />
      </div>
    </main>
  );
};

export default PerfilCliente;
