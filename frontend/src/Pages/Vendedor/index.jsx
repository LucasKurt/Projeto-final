import React from 'react'
import { Redirect, useParams } from 'react-router-dom'

import Header from '../../Components/PerfisComponents/Header'
import { pegarDados } from "../../functions/database";
import ListaDeAnuncios from '../../Components/PerfisComponents/ListaDeAnuncios'

const Vendedor = () => {
    const [vendedor,setVendedor] = React.useState({});
    const [anuncioss,setAnuncios] = React.useState([]);
    const auth = localStorage.getItem('auth');
    const id = localStorage.getItem('id');
    const id_vendedor = useParams().id;
    
    
    React.useEffect(() => {
        pegarDados(`http://localhost:3333/vendedor/${id_vendedor}`,setVendedor)
    }, [id_vendedor])
    
    React.useEffect(() => {
        pegarDados(`http://localhost:3333/anuncios/${id_vendedor}`,setAnuncios)
    }, [id_vendedor])

   const anuncios = [...anuncioss]

   console.log(anuncios[5].id);

    if(auth) {
        if(auth === 'vendedor') {
            if (id === id_vendedor) {
                return <Redirect to='/perfil'/>
            }
            return(
                <>
                    <Header
                        img={vendedor.img_perfil}
                        negocio={vendedor.negocio === '' ? vendedor.nome : vendedor.negocio}
                        telefone={vendedor.telefone}
                        ativa={false}
                        classe={""}
                    />
                    <h2>Anúncios publicados</h2><hr/>
                    {anuncios.map((anuncio) => {
                        return(
                            <ListaDeAnuncios
                                img={anuncio.img}
                                descricao={anuncio.descricao}
                                valor={anuncio.valor}
                                doacao={!!anuncio.doacao}
                            />
                        );
                    })}
                </>
            );
        } else {
            return(
                <>
                    <Header
                        img={vendedor.img_perfil}
                        negocio={vendedor.negocio === '' ? vendedor.nome : vendedor.negocio}
                        telefone={vendedor.telefone}
                        ativa={true}
                        classe={"star"}
                    />
                    <h2>Anúncios publicados</h2><hr/>
                    {anuncios.map((anuncio) => {
                        return(
                            <ListaDeAnuncios
                                img={anuncio.img}
                                descricao={anuncio.descricao}
                                valor={anuncio.valor}
                                doacao={!!anuncio.doacao}
                            />
                        );
                    })}
                </>
            );
        }
    } else {
        return(
            <>
                    <Header
                        img={vendedor.img_perfil}
                        negocio={vendedor.negocio === '' ? vendedor.nome : vendedor.negocio}
                        telefone={'(11) 9 ...'}
                    />
                    <h2>Anúncios publicados</h2><hr/>
                    {anuncios.map((anuncio) => {
                        return(
                            <ListaDeAnuncios
                                img={anuncio.img}
                                descricao={anuncio.descricao}
                                valor={anuncio.valor}
                                doacao={!!anuncio.doacao}
                            />
                        );
                    })}
                </>
        );
    }
}

export default Vendedor