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
      toggle: false,
      put: false,
    }
  }

  const initialImg = () => {
    return {
      img: '',
      imgUrl: '',
      key: '',
    }
  }

  const [values,setValues] = React.useState(initialState);
  const [img,setImg] = React.useState(initialImg);
  const [vendedor,setVendedor] = React.useState({});
  const [anuncios,setAnuncios] = React.useState([]);
  const [dataForm,setDataForm] = React.useState([]);
  const id_vendedor = localStorage.getItem('id');

  React.useEffect(() => {
    pegarDados(`${process.env.REACT_APP_API_URL}/vendedor/${id_vendedor}`,setVendedor);
  }, [id_vendedor])

  React.useEffect(() => {
    pegarDados(`${process.env.REACT_APP_API_URL}/anuncios/${id_vendedor}`,setAnuncios);
  }, [id_vendedor,dataForm])

  return (
    <main role="main">
      <Header
        img={vendedor.img_perfil}
        editar={true}
        negocio={vendedor.negocio ? vendedor.negocio : vendedor.nome}
        telefone={vendedor.telefone}
        nota={4.8}
        ratingStar={false}
        classe={''}
      />
      <div className="container">
        <div className="row">
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <Card
              img={img.imgUrl}
              imgPerfil={vendedor.img_perfil}
              negocio={vendedor.negocio ? vendedor.negocio : vendedor.nome}
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
              dataForm={dataForm}
              setDataForm={setDataForm}
              initialState={initialState}
              initialImg={initialImg}
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>Anúncios publicados</h2>
              {anuncios.map(anuncio => {
                if(id_vendedor === anuncio.id_vendedor.toString()){
                  return(
                    <ListaDeAnuncios
                      key={anuncio.id}
                      imgAnuncio={anuncio.img}
                      imgAnuncioKey={anuncio.img_key}
                      descricao={anuncio.descricao}
                      valor={anuncio.valor}
                      doacao={!!anuncio.doacao}
                      crud={true}
                      values={values}
                      setValues={setValues}
                      img={img}
                      setImg={setImg}
                      id_anuncio={anuncio.id}
                      setDataForm={setDataForm}
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