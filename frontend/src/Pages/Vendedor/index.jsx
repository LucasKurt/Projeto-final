import React from 'react'
import { Redirect, useParams } from 'react-router-dom'

import Header from '../../Components/PerfisComponents/Header'
import { pegarDados } from "../../functions/database";
import ListaDeAnuncios from '../../Components/PerfisComponents/ListaDeAnuncios'

const Vendedor = () => {
    const [data,setData] = React.useState('');
    const [dados,setDados] = React.useState('');
    const auth = localStorage.getItem('auth');
    const id = localStorage.getItem('id');
    const id_vendedor = useParams().id;
    
    
    React.useEffect(() => {
        pegarDados(`http://localhost:3333/vendedor/${id_vendedor}`,setData)
    }, [id_vendedor])
    
    React.useEffect(() => {
        pegarDados(`http://localhost:3333/anuncios`,setDados)    
    }, [])
    
    let anuncios = [...dados];

    if(auth) {
        if(auth === 'vendedor') {
            console.log(id === id_vendedor)
            if (id === id_vendedor) {
                return <Redirect to='/perfil'/>
            }
            return(
                <>
                    <Header
                        img={data.img_perfil}
                        editar={false}
                        negocio={data.negocio === '' ? data.nome : data.negocio}
                        telefone={data.telefone}
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
                        img={data.img_perfil}
                        editar={false}
                        negocio={data.negocio === '' ? data.nome : data.negocio}
                        telefone={data.telefone}
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
                        img={data.img_perfil}
                        editar={false}
                        negocio={data.negocio === '' ? data.nome : data.negocio}
                        telefone={'(11) 9 ...'}
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
    }
}

export default Vendedor
