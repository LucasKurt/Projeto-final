import React from 'react'

import api from '../../../functions/services'
import Dropzone from '../../Dropzone';
import ToggleSwitch from "../../ToggleSwitch";

const Form = ({ put, setPut, id, id_vendedor, values, setValues, toggle, setToggle, selectedFileUrl, setSelectedFileUrl }) => {
    const [selectedFile, setSelectedFile] = React.useState();
    const [dados,setDados] = React.useState();
    const atualizar = (event) => {
        const {name,value} = event.target

        setValues({
            ...values,
            [name]: value
        });
    }
    
    const enviarDados = (e) => {
        e.preventDefault(); 
        
        const data = new FormData();
        data.append('id',id_vendedor);
        data.append('img',selectedFile);
        data.append('descricao',values.descricao);
        data.append('valor',values.valor);
        data.append('doacao',toggle);
        
        api.post('/anuncios',data)
        .then(response => setDados(response.data))
        .catch(error => setDados(error.response.data.errors));
    }

    
    dados && console.log(dados);
    //dados && setPut(!put);

    return (
        <form className="needs-validation" onSubmit={enviarDados} noValidate>
            <div className="row">
                <div className="col-md mb-3">
                    <div className="custom-file mt-3">
                        <Dropzone
                            setSelectedFile={setSelectedFile}
                            selectedFileUrl={selectedFileUrl}
                            setSelectedFileUrl={setSelectedFileUrl}
                        />
                    </div>
                    <div className="invalid-feedback">Coloque a imagem do anúncio</div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 mb-3">
                    <label htmlFor="descricao">Descrição</label>
                    <textarea 
                        className="form-control" 
                        name="descricao" 
                        id="descricao"
                        value={values.descricao}
                        onChange={atualizar} 
                        required 
                        cols={30} 
                        rows={4} 
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
                        value={values.valor}
                        onChange={atualizar} 
                        placeholder="R$" 
                        required 
                    />
                    <div className="invalid-feedback">Informe o Valor</div>
                    <div className="row">
                        <div className="col mt-5 d-flex align-items-baseline justify-content-end">                            

                            <label>Aceita receber doação?</label>
                            <ToggleSwitch
                                toggle={toggle}
                                setToggle={setToggle}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <input type="hidden" className="form-control" id="idAnuncio"/>
            <button className="btn btn-primary btn-lg btn-block" type="submit" id="butao">Anunciar</button>
        </form>
    )
}

export default Form
