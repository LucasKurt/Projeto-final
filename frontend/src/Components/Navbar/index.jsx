import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <Link className="navbar-brand" to='/'><img src="/images/logo-comercio-amigavel-white-landscape.png" alt="Logo Comércio Amigável" style={{width: 150}} /></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="./produtos.php">Anúncios<span className="sr-only">(current)</span></a>
                </li>
                </ul>
                <Link className="btn btn-outline-success" style={{textDecoration: 'none'}} to='/entre' role="button">Entre</Link>
            </div>
        </nav>
    );    
}

export default Navbar;