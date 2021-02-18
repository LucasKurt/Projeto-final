import React from 'react'

const Form = () => {
    return (
        <form className="needs-validation" method="POST" action="php/publicar.php" encType="multipart/form-data" noValidate>
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
                    <textarea className="form-control" name="descricao" id="descricao" onchange="atualizaDescricao()" required cols={30} rows={4} defaultValue={""} />
                    <div className="invalid-feedback">Escreva a descrição</div>
                </div>
                <div className="col-md-6 mb-3 d-flex flex-column">
                    <label htmlFor="valor">Valor</label>
                    <input type="text" className="form-control" id="valor" name="valor" defaultValue onkeypress="$(this).mask('#.##0,00', {reverse: true});" placeholder="R$" required onchange="atualizaValor()" />
                    <div className="invalid-feedback">Informe o Valor</div>
                    <div className="row">
                        <div className="col mt-5 d-flex align-items-baseline justify-content-end">
                            
                            <label htmlFor>Aceita receber doação?</label>
                            <div>
                                <label className="switch ml-3 d-flex align-items-end" id="switch">
                                    <input type="checkbox" id="doacao" name="doacao" defaultValue />
                                    <span className="slider round" />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <input type="hidden" className="form-control" id="idAnuncio" defaultValue />
            <button className="btn btn-primary btn-lg btn-block" type="submit" id="butao">Anunciar</button>
        </form>
    )
}

export default Form
