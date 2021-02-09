import React from "react";

import { EnviarDados } from "../../../Components/BancoDeDados";
import { FormularioCadastroVendedor } from "../../../Components/Formularios";


const CadastroVendedor = () => {
    return (
        <>
            <div className="container mt-5">
                <div className="py-5 text-center">
                    <img className="d-block mx-auto mb-2" src="/images/logo-comercio-amigavel.png" alt="logo" width={150} height={150} />
                    <h2>Cadastro de Vendedor</h2>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h4 className="mb-3">Dados Pessoais</h4>
                        <EnviarDados url="http://localhost:3333/cadastro/vendedor">
                            <FormularioCadastroVendedor/>
                        </EnviarDados>
                    </div>
                </div>
                <hr className="featurette-divider" />
            </div>
        </>
    );
}

export default CadastroVendedor;