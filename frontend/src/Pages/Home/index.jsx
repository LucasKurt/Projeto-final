import React from 'react';

import Carrossel from '../../Components/Carrossel';

import './styles.css';

const Home = () => {
    return(
        <main role="main">
            {/* <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to={0} className="active" />
                <li data-target="#myCarousel" data-slide-to={1} />
                <li data-target="#myCarousel" data-slide-to={2} />
                </ol>
                <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src="./images/carrossel-1.jpg" alt="Primeiro Slide" />
                    <div className="container">
                    <div className="carousel-caption text-left" style={{textShadow: '2px 2px 4px #000000'}}>
                        <h1>Divulgue seu negócio através do nosso site</h1>
                        <p>Aqui você pode mostrar seus produtos e serviços.</p>
                        <p><a className="btn btn-lg btn-primary" href="cadastro.php" role="button">Cadastre-se</a></p>
                    </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="./images/carrossel-2.jpeg" alt="Segundo Slide" />
                    <div className="container">
                    <div className="carousel-caption text-left" style={{textShadow: '2px 2px 4px #000000'}}>
                        <h1>Compre do pequeno negócio</h1>
                        <p>Incentive o comerciante comprando os nossos produtos</p>
                        <p><a className="btn btn-lg btn-primary" href="produtos.php" role="button">Veja os produtos</a></p>
                    </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="./images/carrossel-3.jpeg" alt="Terceiro Slide" />
                    <div className="container">
                    <div className="carousel-caption text-left" style={{textShadow: '2px 2px 4px #000000'}}>
                        <h1>Incentivamos o pequeno produtor a sair da informalidade</h1>
                        <p>Orientação, divulgação, educação corporativa</p>
                        <p><a className="btn btn-lg btn-primary" href="https://www.sebrae.com.br/sites/PortalSebrae/ufs/sp?codUf=26" target="_blank" role="button">Saiba Mais</a></p>
                    </div>
                    </div>
                </div>
                </div>
                <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
                </a>
            </div> */}
            <Carrossel/>
            <div className="container marketing">
                <div className="row">
                <div className="col-lg-4">
                    <a href="#"><img className="bd-placeholder-img rounded-circle" width={140} height={140} src="./images/panos.jpeg" /></a>
                    <h2>Panos bordados</h2>
                </div>
                <div className="col-lg-4">
                    <a href="#"><img className="bd-placeholder-img rounded-circle" width={140} height={140} src="./images/brinco.jpeg" /></a>
                    <h2>Brincos</h2>
                </div>
                <div className="col-lg-4">
                    <a href="#"><img className="bd-placeholder-img rounded-circle" width={140} height={140} src="./images/colar.webp" /></a>
                    <h2>Colares</h2>
                </div>
                </div>
                <div className="row mt-5">
                <div className="col-lg-4">
                    <a href="#"><img className="bd-placeholder-img rounded-circle" width={140} height={140} src="./images/filtroSonhos.jpeg" /></a>
                    <h2>Filtro dos sonhos</h2>
                </div>
                <div className="col-lg-4">
                    <a href="#"><img className="bd-placeholder-img rounded-circle" width={140} height={140} src="./images/orgonite.jpeg" />
                    </a>
                    <h2>Orgonites</h2>
                </div>
                <div className="col-lg-4">
                    <a href="#"><img className="bd-placeholder-img rounded-circle" width={140} height={140} src="https://images.pexels.com/photos/3760978/pexels-photo-3760978.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></a>
                    <h2>Moringa de barro</h2>
                </div>
                </div>
                <hr className="featurette-divider" />
                <div className="row featurette">
                <div className="col-md-7">
                    <h2 className="featurette-heading">Faça como Ana <span className="text-muted">que conseguiu impulsionar seu
                        negócio.</span>
                    </h2>
                    <p className="lead">Foi através da plataforma<bold> Comércio amigável<bold> que João se destacou no ramo do artesanato.
                        </bold></bold></p>
                </div>
                <div className="col-md-5">
                    <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width={500} height={500} src="./images/pulseiras.jpg" />
                </div>
                </div>
                <hr className="featurette-divider" />
                <div className="row featurette">
                <div className="col-md-7 order-md-2">
                    <h2 className="featurette-heading">História do projeto <span className="text-muted">iniciativa social.</span></h2>
                    <p className="lead">Foi através da Recode que tivemos a iniciativa deste projeto social,
                    somos um grupo composto por 6 integrantes: Lucas, Audrey, Gabriela, Tayane, Eduardo e Wilson.
                    </p>
                </div>
                <div className="col-md-5 order-md-1">
                    <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width={500} height={500} src="https://images.pexels.com/photos/2422293/pexels-photo-2422293.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                </div>
                </div>
                <hr className="featurette-divider" />
            </div>
        </main>
    );
}

export default Home;