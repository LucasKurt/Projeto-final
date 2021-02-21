const { validationResult } = require('express-validator');
const crypto = require('crypto');

const vendedor = require('../model/Vendedor');

class VendedorController {
    getOneAction(req,res){
        const {id} = req.params;
        vendedor.id = id;
        vendedor.getOne(req,res);
    }

    cadastrarVendedorAction(req,res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json(errors.array());
        }
        
        const {nome,negocio,endereco,cpf,email,telefone,senha,confSenha} = req.body;

        if (senha != confSenha) {
            return res.status(400).json([{param: "confSenha", msg: "As senhas devem ser iguais"}]);
        }
        
        vendedor.nome = nome;
        vendedor.negocio = negocio;
        vendedor.endereco = endereco;
        vendedor.cpf = cpf;
        vendedor.email = email;
        vendedor.telefone = telefone;
        vendedor.senha = crypto.createHash("sha256").update(senha).digest("hex");
        vendedor.cadastrar(req, res);
    }             
}

module.exports = new VendedorController