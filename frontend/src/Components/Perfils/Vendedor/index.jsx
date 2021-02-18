import React from 'react'

import Header from "../../PerfilsComponents/Header";
import ListaDeAnuncios from "../../PerfilsComponents/ListaDeAnuncios"
import Card from "../../Card";
import Form from "../../PerfilsComponents/Form";

const PerfilVendedor = () => {
    return (
        <main role="main">
            <Header
                img={"perfil-sem-foto.jpg"}
                editar={true}
                negocio={"Artesanatos em geral"}
                telefone={"(11) 95992-5595"}
                nota={4.8}
                ativa={false}
                classe={''} 
            />
            <div className="container">
                <div className="row">
                    <div className="col-md-4 d-flex justify-content-center align-items-center">                        
                        <Card
                            img={'ponto-de-interrogação.jpeg'}
                            imgPerfil={'perfil-sem-foto.jpg'}
                            descricao={'O que? (breve descrição)'}
                            valor={'Quanto? (Informe o preço)'}
                            opc={'Aceita doação? (Marque a opção)'}
                            doacao={false}
                        />
                    </div>
                    <div className="col-md-8">
                        <h3 className="text-center" id="titulo">Crie seu anúncio</h3>
                        <Form

                        />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2>Anúncios publicados</h2>
                        <hr />
                        <ListaDeAnuncios
                            img={'ponto-de-interrogação.jpeg'}
                            descricao={'Descrição do anuncio'}
                            valor={'99,99'}
                            doacao={true}
                            crud={true}
                        />
                    </div>
                </div>
            </div>             
        </main>
    );

}

export default PerfilVendedor
