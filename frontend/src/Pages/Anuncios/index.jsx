import React from "react";

import Card from '../../Components/Card'
import {pegarDados} from '../../functions/database'

function Anuncios() {
  const [anuncios,setAnuncios] = React.useState([])
  React.useEffect(() => {

    pegarDados(`${process.env.REACT_APP_API_URL}/anuncios`,setAnuncios)    

  }, [])

  return (
    <main role="main">      
      <section className="jumbotron text-center">
        <div className="container mt-5">
          <p className="display-4">Veja todos os produtos cadastrados</p>
        </div>
      </section>
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
              {anuncios.map((anuncio) => {
                return  (
                <div className="col-md-4" key={anuncio.id}>
                  <Card
                    img={anuncio.img}
                    imgPerfil={anuncio.img_perfil}
                    negocio={anuncio.negocio ? anuncio.negocio : anuncio.nome}
                    descricao={anuncio.descricao}
                    valor={anuncio.valor}
                    opc={<br/>}
                    doacao={anuncio.doacao}
                    id_vendedor={anuncio.id_vendedor}
                    redirecionar={true}
                  />
                </div>
                );
              })}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Anuncios;