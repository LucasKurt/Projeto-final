import React from 'react';

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <a className="navbar-brand" href="./"><img src="./images/logo-comercio-amigavel-white-landscape.png" alt="Logo Comércio Amigável" style={{width: 150}} /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="./produtos.php">Anúncios<span className="sr-only">(current)</span></a>
                </li>
                </ul>
                <a className="btn btn-outline-success" style={{textDecoration: 'none'}} href="entrar.php" role="button">Entre</a>
            </div>
        </nav>
    );    
}

export default Navbar;