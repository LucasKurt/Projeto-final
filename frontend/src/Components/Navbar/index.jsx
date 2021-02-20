import React, { useEffect }  from 'react';
import { Link, useHistory } from 'react-router-dom';

const Navbar = () => {
    const auth = localStorage.getItem('auth');
    const history = useHistory();
    const [url,setUrl] = React.useState(history.location.pathname);
    useEffect(() => {
        return history.listen((location) => { 
            setUrl(location.pathname); 
        }) 
    }, [history])
    if (url === '/dicas') {
        return(
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <img src="./images/logo-comercio-amigavel-white-landscape.png" alt="Logo Comércio Amigável" style={{width: 150}} />
                <div className="mr-auto"></div>
                <p style={{fontSize: 24}} className="text-warning my-auto pr-5">Desça a página para acessar o perfil</p>
            </nav>
        );
    } else if (auth) {
        return(
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <Link className="navbar-brand" to='/'><img src="/images/logo-comercio-amigavel-white-landscape.png" alt="Logo Comércio Amigável" style={{width: 150}} /></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to='/anuncios'>Anúncios<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/perfil">Perfil<span className="sr-only">(current)</span></Link>
                    </li>
                    </ul>
                    <Link className="btn btn-outline-danger" to='/sair' role="button"> Sair </Link>
                </div>
            </nav>
        );
    } else {
        return(
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <Link className="navbar-brand" to='/'><img src="/images/logo-comercio-amigavel-white-landscape.png" alt="Logo Comércio Amigável" style={{width: 150}} /></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/anuncios">Anúncios<span className="sr-only">(current)</span></Link>
                    </li>
                    </ul>
                    <Link className="btn btn-outline-success" to='/entre' role="button">Entre</Link>
                </div>
            </nav>
        );
    }
}

export default Navbar;