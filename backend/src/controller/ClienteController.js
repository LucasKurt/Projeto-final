const { validationResult } = require('express-validator');
const crypto = require('crypto');

const cliente = require('../model/Cliente');

class ClienteController {
    cadastrarClienteAction(req,res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        
        const {nome,email,senha,confSenha} = req.body;

        if (senha != confSenha) {
            return res.status(400).json("As senhas devem ser iguais");
        }
        
        cliente.nome = nome;
        cliente.email = email;
        cliente.senha = crypto.createHash("sha256").update(senha).digest("hex");
        cliente.cadastrar(req, res);
    }             
}

module.exports = new ClienteController