import React from 'react';

import Carrossel from '../../Components/Carrossel';

import './styles.css';

const Home = () => {
    return(
        <main role="main">            
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
                        <h2 className="featurette-heading">Faça como Ana <span className="text-muted">que conseguiu impulsionar seu negócio.</span></h2>
                        <p className="lead">Foi através da plataforma Comércio amigável que João se destacou no ramo do artesanato.</p>
                    </div>
                    <div className="col-md-5">
                        <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width={500} height={500} src="./images/pulseiras.jpg" />
                    </div>
                </div>
                <hr className="featurette-divider" />
                <div className="row featurette">
                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading">História do projeto <span className="text-muted">iniciativa social.</span></h2>
                        <p className="lead">
                            Foi através da Recode que tivemos a iniciativa deste projeto social,
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