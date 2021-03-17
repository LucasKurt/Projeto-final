import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

const Footer = () => {
  const history = useHistory();
  const [url, setUrl] = React.useState(history.location.pathname);
  useEffect(() => {
    return history.listen((location) => {
      setUrl(location.pathname);
    });
  }, [history]);
  if (url !== "/dicas") {
    return (
      <footer className="container">
        <p className="text-center">
          © 2021 Todos os direitos reservados ao Squad 8 &amp; Recode ·
        </p>
      </footer>
    );
  } else {
    return (
      <footer className="container d-flex justify-content-between">
        <Link className="btn btn-primary btn-block" to="/perfil">
          Ir ao Perfil
        </Link>
      </footer>
    );
  }
  // index.jsx:4 http://localhost:3000/dicas
};

export default Footer;