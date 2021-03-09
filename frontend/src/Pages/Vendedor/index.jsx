import React from 'react'
import { Redirect, useParams } from 'react-router-dom'

import Header from '../../Components/PerfisComponents/Header'
import { pegarDados } from "../../functions/database";
import TabelaDeAnuncios from '../../Components/PerfisComponents/TabelaDeAnuncios'

const Vendedor = () => {
    const [vendedor,setVendedor] = React.useState({});
    const [anuncios,setAnuncios] = React.useState([]);
    const auth = localStorage.getItem('auth');
    const id = localStorage.getItem('id');
    const id_vendedor = useParams().id;
    
    
    React.useEffect(() => {

        pegarDados(`${process.env.REACT_APP_API_URL}/vendedor/${id_vendedor}`,setVendedor)
    }, [id_vendedor])
    
    React.useEffect(() => {
        pegarDados(`${process.env.REACT_APP_API_URL}/anuncios/${id_vendedor}`,setAnuncios)

    }, [id_vendedor])

    

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
                        nota={4.8}
                    />
                    <TabelaDeAnuncios
                        anuncios={anuncios}
                    />  
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
                    <TabelaDeAnuncios
                        anuncios={anuncios}
                    />
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
                    nota={4.8}
                />
                <TabelaDeAnuncios

                    anuncios={anuncios}
                />

            </>
        );
    }
}

export default Vendedor