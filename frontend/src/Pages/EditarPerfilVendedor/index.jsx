import React from "react";

import Dropzone from "../../Components/Dropzone";
import Input from "../../Components/Input";
import { pegarDados } from "../../functions/database";
import api from "../../functions/services"

const EditarPerfilVendedor = () => {

    const initialState = () => {
        return(
            {
                nome: '',
                negocio: '',
                endereco: '',
                email: '',
                telefone: '',
            }
        );
    }

    const initialImg = () => {
        return {
          img: '',
          imgUrl: '',
        }
    }

    const id = localStorage.getItem('id');
    const [data,setData] = React.useState('');
    const [dados,setDados] = React.useState('');
    const [values,setValues] = React.useState(initialState);
    const [img,setImg] = React.useState(initialImg);

    const atualizar = (event) => {
        const {name,value} = event.target;
        setValues({
            ...values,
            [name]: value
        })
    } 
    
    React.useEffect(() => {
        pegarDados(`http://localhost:3333/vendedor/${id}`,setData);
        /* eslint-disable-next-line */
    },[dados])

    const enviarDados = (e) => {
        e.preventDefault(); 
        
        const data = new FormData();
        data.append('nome',values.nome);
        data.append('negocio',values.negocio);
        data.append('endereco',values.endereco);
        data.append('email',values.email);
        data.append('telefone',values.telefone);
        data.append('img',img.img);
        
        api.put(`/vendedor/${id}`,data)
        .then(response => setDados(response.data))
        .catch(error => setDados(error.response.data.errors));

    }

    console.log(dados)

    return (
        <>
            <div className="container mt-5">
                <div className="py-5 text-center">
                    <img className="d-block mx-auto mb-2" src={img.imgUrl ? img.imgUrl : `http://localhost:3333/uploads/${data.img_perfil}`} id="imgPlaceholder" alt="Imagem de Perfil" width={200} height={200} />
                    <br />
                    <h2>Editar perfil</h2>
                </div>

                <div className="row">

                    <div className="col-md-12">

                        <form className="needs-validation" onSubmit={enviarDados} noValidate>
                            
                            <div className="custom-file mb-3">
                            <Dropzone
                                img={img}
                                setImg={setImg}
                            />
                            </div>
                            

                            <div className="row">

                                <Input
                                    type="text"
                                    className="col-md-6 mb-3"
                                    label="Nome Completo"
                                    span=""
                                    name="nome"
                                    placeholder=""
                                    value={values.nome}
                                    onChange={atualizar}
                                />

                                
                                <Input
                                    type="text"
                                    className="col-md-6 mb-3"
                                    label="Nome do negócio"
                                    span=" (opcional)"
                                    name="negocio"
                                    placeholder=""
                                    value={values.negocio}
                                    onChange={atualizar}
                                />

                            </div>

                                <Input
                                    type="text"
                                    className="mb-3"
                                    label="Endereço"
                                    span=""
                                    name="endereco"
                                    placeholder=""
                                    value={values.endereco}
                                    onChange={atualizar}                                    
                                />

                                <Input
                                    type="email"
                                    className="mb-3"
                                    label="Email"
                                    span=""
                                    name="email"
                                    placeholder=""
                                    value={values.email}
                                    onChange={atualizar}
                                />

                                <Input
                                    type="text"
                                    className="mb-3"
                                    label="Telefone"
                                    span=""
                                    name="telefone"
                                    placeholder=""
                                    value={values.telefone}
                                    onChange={atualizar}
                                    erro={''}
                                    msgErro={'* Campo obrigatório'}
                                />

                            <br />
                            <button className="btn btn-primary btn-lg btn-block" type="submit">
                                Salvar
                            </button>
                        </form>
                    </div>
                </div>
                <hr className="featurette-divider"></hr>
            </div>
        </>
    )
}

export default EditarPerfilVendedor
