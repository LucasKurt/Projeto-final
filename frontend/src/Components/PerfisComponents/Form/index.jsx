import React from 'react'

import ToggleSwitch from "../../ToggleSwitch";

const Form = ({ values, setValues, toggle, setToggle}) => {
    console.log(values)
    const atualizar = (event) => {
        const {name,value} = event.target

        setValues({
            ...values,
            [name]: value
        });
    }
    return (
        <form className="needs-validation" noValidate>
            <div className="row">
                <div className="col-md mb-3">
                    <div className="custom-file mt-3">
                        <input type="file" name="fileUpload" className="custom-file-input" id="chooseFile" required />
                        <label className="custom-file-label" htmlFor="chooseFile">Selecione uma foto</label>
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
                            <label htmlFor>Aceita receber doação?</label>
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
