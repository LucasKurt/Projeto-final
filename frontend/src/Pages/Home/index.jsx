import React from 'react';
import { Link } from 'react-router-dom';

import Carrossel from '../../Components/Carrossel';

import './styles.css';

const Home = () => {
    return(
        <main role="main">
            <Carrossel/>
            <div className="container marketing">
                <div className="row">
                    <div className="col-lg-4">
                        <Link to="#"><img className="bd-placeholder-img rounded-circle" width={140} height={140} src="./images/panos.jpeg" alt="Panos bordados" /></Link>
                        <h2>Panos bordados</h2>
                    </div>
                    <div className="col-lg-4">
                        <Link to="#"><img className="bd-placeholder-img rounded-circle" width={140} height={140} src="./images/brinco.jpeg" alt="Brincos" /></Link>
                        <h2>Brincos</h2>
                    </div>
                    <div className="col-lg-4">
                        <Link to="#"><img className="bd-placeholder-img rounded-circle" width={140} height={140} src="./images/colar.jpg" alt="Colares" /></Link>
                        <h2>Colares</h2>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-4">
                        <Link to="#"><img className="bd-placeholder-img rounded-circle" width={140} height={140} src="./images/filtroSonhos.jpeg" alt="Filtro dos sonhos" /></Link>
                        <h2>Filtro dos sonhos</h2>
                    </div>
                    <div className="col-lg-4">
                        <Link to="#"><img className="bd-placeholder-img rounded-circle" width={140} height={140} src="./images/orgonite.jpeg" alt="#" />
                        </Link>
                        <h2>Orgonites</h2>
                    </div>
                    <div className="col-lg-4">
                        <Link to="#"><img className="bd-placeholder-img rounded-circle" width={140} height={140} src="https://images.pexels.com/photos/3760978/pexels-photo-3760978.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Moringa de barro" /></Link>
                        <h2>Moringa de barro</h2>
                    </div>
                </div>
                <hr className="featurette-divider" />
                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading">Faça como Ana <span className="text-muted">que conseguiu impulsionar seu negócio.</span></h2>
                        <p className="lead">Foi através da plataforma Comércio Amigável que Ana se destacou no ramo do artesanato.</p>
                    </div>
                    <div className="col-md-5">

                        <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width={500} height={500} src="./images/comercio-amigavel-depo1.jpeg" alt="depoimento da Ana" />

                    </div>
                </div>
                <hr className="featurette-divider" />
                <div className="row featurette">
                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading margin-top">Esse é o José, <span className="text-muted">aumentou sua renda e ampliou seu negócio após o contato com a plataforma Comércio Amigável.</span></h2>
                        <p className="lead">
                        O artesanato fez parte de toda a vida de José porém, poucos conheciam seu negócio e foi com essa plataforma que José conseguiu levar sua arte pra outros amantes de artesanato assim como ele.
                        </p>
                    </div>
                    <div className="col-md-5 order-md-1">

                        <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width={500} height={500} src="./images/comercio-amigavel-depo2.jpg" alt="historia do projeto" />

                    </div>
                </div>
                <hr className="featurette-divider" />
                <div className="row featurette">
                    <div className="col-md-12 order-md-2">
                        <h2 className="featurette-heading margin-top">História do projeto <span className="text-muted">iniciativa social.</span></h2>
                        <p className="lead">
                            Foi através da Recode que tivemos a iniciativa deste projeto social,
                            somos um grupo composto por 6 integrantes: <strong>Lucas, Audrey, Gabriela, Tayane, Eduardo e Wilson</strong>.
                        </p>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col text-center">
                        <a href="https://www.linkedin.com/in/audreynogueira/" target="_blank" rel="noreferrer noopener"><img className="bd-placeholder-img rounded-circle mb-2 border-me" width={100} height={100} src="./images/Audrey.jpeg" alt="Filtro dos sonhos" /></a>
                        <h5 className="text-primary">Audrey Nogueira</h5>
                    </div>
                    <div className="col text-center">
                        <a href="https://www.linkedin.com/in/carlos-eduardo-leopoldino-610978193/" target="_blank" rel="noreferrer noopener"><img className="bd-placeholder-img rounded-circle mb-2 border-me2" width={100} height={100} src="./images/Eduardo.jpeg" alt="#" />
                        </a>
                        <h5 className="text-primary">Carlos Eduardo</h5>
                    </div>
                    <div className="col text-center">
                        <a href="https://www.linkedin.com/in/gabihvespoli/" target="_blank" rel="noreferrer noopener"><img className="bd-placeholder-img rounded-circle mb-2 border-me" width={100} height={100} src="./images/Gabi.jpg" alt="Moringa de barro" /></a>
                        <h5 className="text-primary">Gabriela Vespoli</h5>
                    </div>
                    <div className="col text-center">
                        <a href="http://www.linkedin.com/in/lucas-corte-galdino" target="_blank" rel="noreferrer noopener"><img className="bd-placeholder-img rounded-circle mb-2 border-me2" width={100} height={100} src="./images/Lucas.jpeg" alt="Filtro dos sonhos" /></a>
                        <h5 className="text-primary">Lucas Côrte</h5>
                    </div>
                    <div className="col text-center">
                        <a href="https://www.linkedin.com/in/tayane-souza-61410a1b3/" target="_blank" rel="noreferrer noopener"><img className="bd-placeholder-img rounded-circle mb-2 border-me" width={100} height={100} src="./images/Tay.jpeg" alt="#" />
                        </a>
                        <h5 className="text-primary">Tayane Souza</h5>
                    </div>
                    <div className="col text-center">
                        <a href="https://www.linkedin.com/in/wilson-bella-a89675161/" target="_blank" rel="noreferrer noopener"><img className="bd-placeholder-img rounded-circle mb-2 border-me2" width={100} height={100} src="./images/Wilson.jpeg" alt="Moringa de barro" /></a>
                        <h5 className="text-primary">Wilson Bella</h5>
                    </div>
                </div>
                <hr className="featurette-divider" />
            </div>
        </main>
    );
}

export default Home;