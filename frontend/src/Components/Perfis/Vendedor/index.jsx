import React from "react";

import { pegarDados } from "../../../functions/database";
import ListaDeAnuncios from "../../PerfisComponents/ListaDeAnuncios"
import Header from "../../PerfisComponents/Header";
import Form from "../../PerfisComponents/Form";
import Card from "../../Card";

const PerfilVendedor = () => {
  const initialState = () => {
    return {
      valor: '',
      descricao: '',
      id_anuncio: '',
      anuncioPublicado: '',
      toggle: false,
      put: false,
    }
  }

  const initialImg = () => {
    return {
      img: '',
      imgUrl: '',
    }
  }

  const [values,setValues] = React.useState(initialState);
  const [img,setImg] = React.useState(initialImg);
  const [data,setData] = React.useState('')
  const [dados,setDados] = React.useState('')
  const id_vendedor = localStorage.getItem('id');

  React.useEffect(() => {
    pegarDados(`http://localhost:3333/vendedor/${id_vendedor}`,setData)
  }, [id_vendedor])

  React.useEffect(() => {
    pegarDados(`http://localhost:3333/anuncios`,setDados)
    
  }, [values.anuncioPublicado]) 

  let anuncios = [...dados]

  console.log(img);
  console.log(values);

  return (
    <main role="main">
      <Header
        img={data.img_perfil}
        editar={true}
        negocio={data.negocio === '' ? data.nome : data.negocio}
        telefone={data.telefone}
        nota={4.8}
        ratingStar={false}
        classe={''}
      />
      <div className="container">
        <div className="row">
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <Card
              img={img.imgUrl}
              imgPerfil={data.img_perfil}
              negocio={data.negocio ? data.negocio: data.nome}
              descricao={values.descricao}
              valor={values.valor}
              doacao={values.toggle}
              opc={'Aceita doação? (Marque a opção)'}
              redirecionar={false}
            />
          </div>
          <div className="col-md-8">
            <h3 className="text-center" id="titulo">Crie seu anúncio</h3>
            <Form
              values={values}
              setValues={setValues}
              img={img}
              setImg={setImg}
              id_vendedor={id_vendedor}
              //id_anuncio={anuncio.id}
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>Anúncios publicados</h2>
              {anuncios.map((anuncio) => {
                if(id_vendedor === anuncio.id_vendedor.toString()){
                  return(
                    <ListaDeAnuncios
                      crud={true}
                      values={values}
                      key={anuncio.id}
                      id_anuncio={anuncio.id}
                      imgAnuncio={anuncio.img}
                      setValues={setValues}
                      img={img}
                      setImg={setImg}
                      valor={anuncio.valor}
                      doacao={!!anuncio.doacao}
                      descricao={anuncio.descricao}
                    />
                  );
                } else return ''
              })}
          </div>
        </div>
      </div>
    </main>
  );

}

export default PerfilVendedor;