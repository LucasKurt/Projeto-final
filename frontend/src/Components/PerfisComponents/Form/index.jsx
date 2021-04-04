import React from 'react'

import api from '../../../functions/services'
import Dropzone from '../../Dropzone';
import Input from '../../Input';
import Textarea from '../../Textarea';
import ToggleSwitch from "../../ToggleSwitch";

const Form = ({ id_vendedor, values, setValues, img, setImg, dataForm, setDataForm, initialState, initialImg }) => {
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
        data.append('id_vendedor',id_vendedor);
        data.append('descricao',values.descricao);
        data.append('valor',values.valor);
        data.append('doacao',values.toggle);
        data.append('img',img.img);

        if(values.put){  
            data.append('key',img.key);        
            api.put(`/anuncios/${values.id_anuncio}`,data)
            .then(response => {
                setDataForm(response.data);
                setValues(initialState());
                setImg(initialImg());
            })
            .catch(error => setDataForm(error.response.data.errors));
        } else{
            api.post('/anuncios',data)
            .then(response => {
                setDataForm(response.data);
                setValues(initialState());
                setImg(initialImg());
            })
            .catch(error => setDataForm(error.response.data.errors));   
        }
    }

    const erros = {
        img: false,
        descricao: false,
        valor: false,
    }

    if(dataForm) {
        if (Array.isArray(dataForm)) {
            for (const data of dataForm) {
                erros[data.param] = true
            } 
        }
    }

    return (
        <form className="needs-validation" onSubmit={enviarDados} noValidate>
            <div className="row">
                <Dropzone
                    className="col-md my-3"
                    img={img}
                    setImg={setImg}
                    erro={erros.img}
                />
            </div>
            <div className="row">
                <Textarea
                    className="col-md-6 mb-3"
                    label="Descrição"
                    name="descricao"
                    placeholder=""
                    value={values.descricao}
                    onChange={atualizar}                     
                    cols={30}
                    rows={4}
                    erro={erros.descricao}
                />
                <div className="col-md-6 mb-3 d-flex flex-column">
                    <Input 
                        type="text"
                        className=""
                        label="Valor"
                        name="valor"
                        placeholder="R$"
                        value={values.valor}
                        onChange={atualizar}
                        erro={erros.valor}
                    />                    
                    <div className="row">
                        <div className="col mt-5 d-flex align-items-baseline justify-content-end">
                            <label>Aceita receber doação?</label>
                            <ToggleSwitch
                                values={values}
                                setValues={setValues}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <input type="hidden" className="form-control" id="idAnuncio"/>
            <button className="btn btn-primary btn-lg btn-block" type="submit" id="butao">{values.put ? 'Salvar Anuncio' : 'Anunciar'}</button>
        </form>
    )
}

export default Form
