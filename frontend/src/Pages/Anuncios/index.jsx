import React from "react";

import Card from '../../Components/Card'
import {pegarDados} from '../../functions/database'

function Anuncios() {
  const [dados,setDados] = React.useState('')
  React.useEffect(() => {
    pegarDados(`http://localhost:3333/anuncios`,setDados)
    
  }, [])

  let anuncios = [...dados]
  console.log(anuncios)

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
                <div className="col-md-4">
                  <Card
                    img={`http://localhost:3333/uploads/anuncio/${anuncio.img}`}
                    imgPerfil={`perfil-sem-foto.jpg`}
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
