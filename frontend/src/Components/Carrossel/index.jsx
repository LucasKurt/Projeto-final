import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import './styles.css';

const Carrossel = () => {
    return(
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./images/carrossel-1.jpg"
                    alt="Primeiro Slide"
                />
                <Carousel.Caption className="text-left" style={{textShadow: '2px 2px 4px #000000'}}>
                    <h1>Divulgue seu negócio através do nosso site</h1>
                    <p>Aqui você pode mostrar seus produtos e serviços.</p>
                    <p><a className="btn btn-lg btn-primary" href="cadastro.php" role="button">Cadastre-se</a></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./images/carrossel-2.jpeg"
                    alt="Segundo Slide"
                />
                <Carousel.Caption className="text-left" style={{textShadow: '2px 2px 4px #000000'}}>
                    <h1>Compre do pequeno negócio</h1>
                    <p>Incentive o comerciante comprando os nossos produtos</p>
                    <p><a className="btn btn-lg btn-primary" href="produtos.php" role="button">Veja os produtos</a></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./images/carrossel-3.jpeg"
                    alt="Terceiro Slide"
                />
                <Carousel.Caption className="text-left" style={{textShadow: '2px 2px 4px #000000'}}>
                    <h1>Incentivamos o pequeno produtor a sair da informalidade</h1>
                    <p>Orientação, divulgação, educação corporativa</p>
                    <p><a className="btn btn-lg btn-primary" href="https://www.sebrae.com.br/sites/PortalSebrae/ufs/sp?codUf=26" target="_blank" role="button">Saiba Mais</a></p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Carrossel;