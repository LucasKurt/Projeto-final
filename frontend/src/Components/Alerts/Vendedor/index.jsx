import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import "../styles.css";

function ShowAlert() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="success" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Cadastro efetuado com sucesso!</Alert.Heading>
        <p>
          Agora você faz parte do Comércio Amigável, seja bem vinde :)
        </p>
        <hr/>
        <div className="d-flex justify-content-center">
          <Link className="btn btn-primary" to='/login/vendedor' role="button"> Entrar </Link>
        </div>
      </Alert>
    );
  }
  return <span></span>;
}

export default ShowAlert;