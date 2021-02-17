import React from 'react'

import './styles.css'

const Dicas = () => {
    return (
        <main className="container">
            <div className="p-4 p-md-5 mt-5 mb-4 text-white rounded bg-dark">
                <div className="col-md-6 px-0">
                <h1 className="display-4 font-italic">As vantagens de ser MEI</h1>
                <p className="lead my-3">Todas as dicas desta página serão atualizadas semanalmente, indicaremos cursos, incentivos
                    para que você possa garantir seus direitos sendo MEI e dicas para que você possa impulsionar o seu negócio.
                </p>
                </div>
            </div>
            <div className="row mb-2">
                <div className="col-md-6">
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                    <h3 className="mb-0">Por que ser MEI?</h3>
                    <br />
                    <p className="card-text mb-auto">Com ele, você garante alguns direitos reservados ao trabalhador
                        como por exemplo aposentadoria, auxílio-maternidade, direito de afastamento em caso de
                        problemas relacionados a saúde e entre outros.</p>
                    <a href="https://www.sebrae.com.br/sites/PortalSebrae/ufs/am/banner/conheca-as-vantagens-de-ser-mei,d5d95f83b3cef610VgnVCM1000004c00210aRCRD" className="stretched-link" target="_blank" rel="noopener noreferrer">Saiba mais</a>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                    <img src="./images/pq-mei.png" alt="Imagem por que ser MEI" />
                    </div>
                </div>
                </div>
                <div className="col-md-6">
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                    <h3 className="mb-0">Como ser MEI</h3>
                    <br />
                    <p className="mb-auto">O processo é simples, gratuito e precisa ser feito online. Para se
                        formalizar, clique no link abaixo e crie sua conta.</p>
                    <a href="https://sso.acesso.gov.br/login?client_id=redesim.gov.br&authorization_id=177089bf52f" className="stretched-link" target="_blank" rel="noopener noreferrer">Saiba mais</a>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                    <img src="./images/como-mei.png" alt="Imagem como ser MEI" />
                    </div>
                </div>
                </div>
            </div>
            <hr className="featurette-divider" />
            <div className="row featurette">
                <div className="col-md-7">
                <h2 className="featurette-heading">Como expandir seu negócio.</h2>
                <p className="lead">Conhecer os direitos e deveres do Microempreendedor Individual e da Microempresa, identificando
                    as diferenças entre o MEI e a ME.</p>
                <a href="https://www.sebrae.com.br/sites/PortalSebrae/cursosonline/como-expandir-seu-negocio,6468b71da3b00710VgnVCM1000004c00210aRCRD" className="stretched-link" target="_blank" rel="noopener noreferrer">Acesse o Curso</a>
                </div>
                <div className="col-md-5">
                <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width={500} height={500} src="./images/como-expandir-seu-negocio.webp" alt="Como expandir seu negócio." />
                </div>
            </div>
            <hr className="featurette-divider" />
            <div className="row featurette">
                <div className="col-md-7 order-md-2">
                <h2 className="featurette-heading">Como formalizar seu negócio como microempreendedor individual </h2>
                <p className="lead">Conheça os benefícios e os passo a passo de se formalizar como microempreendedor individual e
                    quais os riscos em manter uma empresa informal.</p>
                <a href="https://www.sebrae.com.br/sites/PortalSebrae/cursoseeventos/como-formalizar-seu-negocio-como-mei,3180b8a6a28bb610VgnVCM1000004c00210aRCRD" className="stretched-link" target="_blank" rel="noopener noreferrer">Acesse o Curso</a>
                </div>
                <div className="col-md-5 order-md-1">
                <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width={500} height={500} src="./images/MEI.webp" alt="formalizar seu negocio"/>
                </div>
            </div>
            <hr  />
        </main>

    );
}

export default Dicas
