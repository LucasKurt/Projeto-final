const { Router } = require("express");

const vendedorController = require('./controller/CadastroVendedorController')

const routes = new Router;

routes.post("/cadastro/vendedor",vendedorController.cadastrarVendedorAction);

module.exports = routes;