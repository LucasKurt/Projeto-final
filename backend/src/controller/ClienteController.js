const { validationResult } = require('express-validator');
const crypto = require('crypto');

const cliente = require('../model/Cliente');
const { serialize } = require('v8');

class ClienteController {
    getOneAction(req,res){
        const {id} = req.params;
        cliente.id = id;
        cliente.getOne(req,res);
    }    

    cadastrarClienteAction(req,res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json(errors.array());
        }
        
        const {nome,email,senha,confSenha} = req.body;

        if (senha != confSenha) {
            return res.status(400).json([{param: "confSenha", msg: "As senhas devem ser iguais"}]);
        }
        
        cliente.nome = nome;
        cliente.email = email;
        cliente.senha = crypto.createHash("sha256").update(senha).digest("hex");
        cliente.cadastrar(req, res);
    }
    
    atualizarPerfilAction(req,res) {        
        const {id} = req.params
        const {nome,email,senha,confSenha} = req.body;

        if (senha != confSenha) {
            return res.status(400).json("As senhas devem ser iguais");
        }

        cliente.id = id;
        cliente.nome = nome;
        cliente.email = email;
        cliente.senha = senha;
        cliente.atualizarPerfil(req, res);
    }
}

module.exports = new ClienteController