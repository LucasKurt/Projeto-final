import React from "react";

import Header from "../../PerfilsComponents/Header";

const PerfilVendedor = () => {
  return (
    <main role="main">
      <Header
        img={"perfil-sem-foto.jpg"}
        editar={true}
        negocio={"Artesanatos em geral"}
        telefone={"(11) 95992-5595"}
      />
      <div className="container">
        <div className="row">
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <div className="card mb-4 shadow-sm">
              <img
                id="imgPlaceholder"
                height={225}
                src="./images/ponto-de-interrogação.jpeg"
                alt="Imagem do anuncio"
              />
              <div className="d-flex justify-content-center mt-3">
                <img
                  style={{ boxShadow: "0px 0px 8px #000000" }}
                  className="rounded-circle"
                  width={50}
                  height={50}
                  src="./images/perfil_vendedor/<?php echo $img_perfil?>"
                  alt
                />
              </div>
              <div className="card-body">
                <p className="card-text text-center">
                  {/*?php echo $negocio?*/}
                </p>
                <p id="descricaoAnuncio" className="card-text text-center">
                  O que? (breve descrição)
                </p>
                <p id="valorAnuncio" className="card-text text-center">
                  Quanto? (Informe o preço)
                </p>
                <p id="aceitaDoacao" className="card-text text-center">
                  Aceita doação? (Marque a opção)
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <h3 className="text-center" id="titulo">
              Crie seu anúncio
            </h3>
            <form
              className="needs-validation"
              method="POST"
              action="php/publicar.php"
              encType="multipart/form-data"
              noValidate
            >
              <div className="row">
                <div className="col-md mb-3">
                  <div className="custom-file mt-3">
                    <input
                      type="file"
                      name="fileUpload"
                      className="custom-file-input"
                      id="chooseFile"
                      required
                    />
                    <label className="custom-file-label" htmlFor="chooseFile">
                      Selecione uma foto
                    </label>
                  </div>
                  <div className="invalid-feedback">
                    Coloque a imagem do anúncio
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="descricao">Descrição</label>
                  <textarea
                    className="form-control"
                    name="descricao"
                    id="descricao"
                    onchange="atualizaDescricao()"
                    required
                    cols={30}
                    rows={4}
                    defaultValue={""}
                  />
                  <div className="invalid-feedback">Escreva a descrição</div>
                </div>
                <div className="col-md-6 mb-3 d-flex flex-column">
                  <label htmlFor="valor">Valor</label>
                  <input
                    type="text"
                    className="form-control"
                    id="valor"
                    name="valor"
                    defaultValue
                    onkeypress="$(this).mask('#.##0,00', {reverse: true});"
                    placeholder="R$"
                    required
                    onchange="atualizaValor()"
                  />
                  <div className="invalid-feedback">Informe o Valor</div>
                  <div className="row">
                    <div className="col mt-5 d-flex align-items-baseline justify-content-end">
                      <a
                        href="#"
                        rel="tooltip"
                        title="Ao clicar nesse botão você aceita receber doações e
                            consequentemente aceita também conceder um
                            desconto a pessoa que cedeu as doações nos seus termos.
                            A plataforma não fará mediações, a negociação será feita
                            entre o cliente e o vendedor."
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          className="bi bi-info-circle-fill text-primary mr-3 tooltip-test"
                          title="Ao clicar nesse botão você aceita receber doações e consequentemente aceita também fazer um desconto a pessoa que cedeu as doações nos seus termos. A plataforma não fará mediações, a negociação será feita entre o cliente e o vendedor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412l-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                        </svg>
                      </a>
                      <label htmlFor>Aceita receber doação?</label>
                      <div>
                        <label
                          className="switch ml-3 d-flex align-items-end"
                          id="switch"
                        >
                          <input
                            type="checkbox"
                            id="doacao"
                            name="doacao"
                            defaultValue
                          />
                          <span className="slider round" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <input
                type="hidden"
                className="form-control"
                id="idAnuncio"
                defaultValue
              />
              <button
                className="btn btn-primary btn-lg btn-block"
                type="submit"
                id="butao"
              >
                Anunciar
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>Anúncios publicados</h2>
            <hr />
            {/*?php
        $sql = "SELECT * FROM anuncios WHERE id_vendedor = '$id'";
        $result = $conn-*/}
            query($sql); if ($anuncios = $result-&gt;num_rows &gt;0) {"{"}
            while ($anuncios = $result-&gt;fetch_assoc()) {"{"}
            if($anuncios['valor']==""){"{"}$anuncios['valor']='Valor à
            combinar';{"}"}?&gt;
            <div className="row mb-2">
              <div className="col-md-3">
                <img
                  height={150}
                  src="./images/imagens_anuncios/<?php echo $anuncios['img']?>"
                  alt
                  id="editarImg"
                />
              </div>
              <div className="col-md-9 d-flex flex-column vertical-align-center justify-content-center">
                <p>{/*?php echo utf8_encode($anuncios['descricao'])?*/}</p>
                <p>R$ {/*?php echo utf8_encode($anuncios['valor'])?*/}</p>
                <p>{/*?php echo utf8_encode($anuncios['doacao'])?*/}</p>
                <div className="btn-group">
                  <a href="#foto">
                    <button
                      className="btn btn-secondary"
                      onclick="editar('<?php echo $anuncios['img']?>','<?php echo utf8_encode($anuncios['descricao'])?>','<?php echo utf8_encode($anuncios['valor'])?>','<?php echo utf8_encode($anuncios['id'])?>')"
                    >
                      Editar
                    </button>
                  </a>
                  <button
                    className="btn btn-danger rounded ml-2"
                    data-toggle="modal"
                    data-target="#modalDeletar"
                    onclick="deletar('<?php echo utf8_encode($anuncios['id'])?>')"
                  >
                    Deletar
                  </button>
                </div>
              </div>
            </div>
            <hr />
            {/*?php }
        } else {
            echo "<p class='font-weight-bold'*/}
            Nenhum anuncio publicado
            <p />
            "; echo "<br />
            ";
            {"}"}
            ?&gt;
          </div>
        </div>
      </div>
    </main>
  );
};

export default PerfilVendedor;
