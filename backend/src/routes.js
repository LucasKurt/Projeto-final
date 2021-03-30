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
    "/",
    (req,res) => {
        res.send('Comércio Amigável')
    }
)

routes.get(
    "/anuncios",
    AnunciosController.getAllAction
)

routes.get(
    "/anuncios/:id",
    AnunciosController.getAllOfOneVendedorAction
)

routes.post(
    "/anuncios",
    multer(multerConfig).single('img'),
    body('img').custom((value,{req}) => {
        if (!req.file) {
            return Promise.reject("* campo obrigatório!");
        }
        const alowedMimes = [
            'image/gif',
            'image/ico',
            'image/jpeg',
            'image/jpg',
            'image/png',
            'image/svg',
            'image/webp',
        ];
        for (const mime of alowedMimes) {
            if (req.file.mimetype === mime) {
                return true;
            }
        }
        return Promise.reject("* campo obrigatório!");
    }),
    body('descricao').notEmpty().withMessage("* campo obrigatório!"),
    body('valor').notEmpty().withMessage("* campo obrigatório!"),
    AnunciosController.postarAnuncioAction,
);

routes.put(
    "/anuncios/:id",
    multer(multerConfig).single('img'),
    body('descricao').notEmpty().withMessage("* campo obrigatório!"),
    body('valor').notEmpty().withMessage("* campo obrigatório!"),
    AnunciosController.editarAnuncioAction,
);

routes.delete(
    "/anuncios/:id",
    AnunciosController.deletarAnuncioAction,
);

routes.get(
    "/cliente/:id",
    clienteController.getOneAction
)

routes.post(
    "/cliente",
    body('nome').isLength({min:3}),
    body('email').isEmail().withMessage("* campo obrigatório!"),
    body('senha').isLength({min:6}),
    clienteController.cadastrarClienteAction
);

routes.put(
    "/cliente/:id",
    clienteController.atualizarPerfilAction
)

routes.get(
    "/vendedor/:id",
    vendedorController.getOneAction
);

routes.post(
    "/vendedor",
    body('nome').isLength({min:3}).withMessage("* campo obrigatório!"),
    body('negocio'),

    body('endereco').notEmpty().withMessage("* campo obrigatório!"),

    body('cpf').custom(value => {
        if(!cpf.isValid(cpf.strip(value))) {
            return Promise.reject("CPF invalido!");
        }
        return true;
    }),
    body('email').isEmail().withMessage("* campo obrigatório!"),
    body('telefone').notEmpty().withMessage("* campo obrigatório!"),
    body('senha').isLength({min:6}).withMessage("* campo obrigatório!"),
    vendedorController.cadastrarVendedorAction
);

routes.put(
    "/vendedor/:id",    
    multer(multerConfig).single('img'),
    vendedorController.atualizarPerfilAction
);

routes.post(
    "/login",
    LoginController.loginAction
)

module.exports = routes;