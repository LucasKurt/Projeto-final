import React from "react";

import { pegarDados } from "../../../functions/database";
import ListaDeAnuncios from "../../PerfisComponents/ListaDeAnuncios"
import Header from "../../PerfisComponents/Header";
import Form from "../../PerfisComponents/Form";
import Card from "../../Card";

const PerfilVendedor = () => {
  const initialState = () => {
    return {descricao: '',valor: ''}
  }
  const [selectedFileUrl, setSelectedFileUrl] = React.useState('');
  const [values,setValues] = React.useState(initialState);
  const [toggle,setToggle] = React.useState(false);
  const [data,setData] = React.useState('')
  const [dados,setDados] = React.useState('')
  const [put,setPut] = React.useState(false)
  const [id,setId] = React.useState('')
  const id_vendedor = localStorage.getItem('id');

  React.useEffect(() => {
    pegarDados(`http://localhost:3333/vendedor/${id_vendedor}`,setData)
  }, [id_vendedor])

  React.useEffect(() => {
    pegarDados(`http://localhost:3333/anuncios`,setDados)
    
  }, [id_vendedor]) 

  let anuncios = [...dados]
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
              put={put}
              img={selectedFileUrl}
              imgPerfil={data.img_perfil}
              descricao={values.descricao}
              valor={values.valor}
              doacao={toggle}
              opc={'Aceita doação? (Marque a opção)'}
              redirecionar={false}
            />
          </div>
          <div className="col-md-8">
            <h3 className="text-center" id="titulo">Crie seu anúncio</h3>
            <Form
              id={id}
              put={put}
              values={values}
              toggle={toggle}
              setValues={setValues}
              setToggle={setToggle}
              id_vendedor={id_vendedor}
              selectedFileUrl={selectedFileUrl}
              setSelectedFileUrl={setSelectedFileUrl}
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>Anúncios publicados</h2>
              {anuncios.map((anuncio,index) => {
                if(id_vendedor === index){
                  return(
                    <ListaDeAnuncios
                      put={put}
                      crud={true}
                      setId={setId}
                      setPut={setPut}
                      id={anuncio.id}
                      key={anuncio.id}
                      img={anuncio.img}
                      valor={anuncio.valor}
                      setValues={setValues}
                      setToggle={setToggle}
                      doacao={!!anuncio.doacao}
                      descricao={anuncio.descricao}
                      setSelectedFileUrl={setSelectedFileUrl}
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