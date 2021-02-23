import React from 'react'

import ListaDeAnuncios from '../ListaDeAnuncios'

const TabelaDeAnuncios = ({ anuncios }) => {
    // anuncios.map((anuncio) => {
    //     console.log(anuncio.img)
    // })
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2>Anúncios publicados</h2><hr/>
                    {anuncios.map((anuncio) => {
                        console.log(anuncio.doacao)
                        return(
                            <ListaDeAnuncios
                                key={anuncio.id}
                                imgAnuncio={anuncio.img}
                                descricao={anuncio.descricao}
                                valor={anuncio.valor}
                                doacao={!!anuncio.doacao}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default TabelaDeAnuncios
