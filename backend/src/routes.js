const { Router } = require("express");
const { body } = require('express-validator');
const { cpf } = require('cpf-cnpj-validator');

const vendedorController = require('./controller/VendedorController');
const clienteController = require('./controller/ClienteController');

const routes = new Router;


routes.post(
    "/vendedor",
    body('nome').isLength({min:3}),
    body('negocio'),
    body('endereco'),    
    body('cpf').custom(value => {
        if(!cpf.isValid(cpf.strip(value))) {
            return Promise.reject("CPF invalido!");
        }
        return true;
    }),
    body('email').isEmail(),
    body('telefone'),
    body('senha').isLength({min:6}),
    vendedorController.cadastrarVendedorAction
);

routes.post(
    "/cliente",
    body('nome').isLength({min:3}),
    body('email').isEmail(),
    body('senha').isLength({min:6}),
    clienteController.cadastrarClienteAction
);

module.exports = routes;