const { Router } = require("express");
const { body } = require('express-validator');
const multer = require('multer');
const { cpf } = require('cpf-cnpj-validator');

const multerConfig = require('./config/multerConfig')

const AnunciosController = require('./controller/AnunciosController')
const clienteController = require('./controller/ClienteController');
const vendedorController = require('./controller/VendedorController');
const LoginController = require('./controller/LoginController');

const routes = new Router;

routes.get(
    "/anuncios",
    AnunciosController.getAllAction
)

routes.post(
    "/anuncios",
    multer(multerConfig).single('img'),
    body('descricao').notEmpty().withMessage("* campo obrigatório!"),
    body('valor').notEmpty().withMessage("* campo obrigatório!"),
    AnunciosController.postarAnuncioAction
);

routes.post(
    "/cliente",
    body('nome').isLength({min:3}),
    body('email').isEmail().withMessage("* campo obrigatório!"),
    body('senha').isLength({min:6}),
    clienteController.cadastrarClienteAction
);

routes.get(
    "/vendedor/:id",
    vendedorController.getOneAction
);

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
    "/login",
    LoginController.loginAction
)

module.exports = routes;