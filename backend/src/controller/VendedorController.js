const { validationResult } = require('express-validator');
const crypto = require('crypto');

const vendedor = require('../model/Vendedor');

class VendedorController {
    getOneAction(req,res){
        const {id} = req.params;
        vendedor.id = id;
        vendedor.getOneVendedor(req,res);
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
    
    atualizarPerfilAction(req,res) {
        const { nome, negocio, endereco, email, telefone, key } = req.body;
        const img = req.file;
        const { id } = req.params

        vendedor.id = id;
        vendedor.nome = nome;
        vendedor.negocio = negocio;
        vendedor.endereco = endereco;
        vendedor.email = email;
        vendedor.telefone = telefone;

        if(img) {
            if (key) {
                vendedor.key = key;
                vendedor.deletarImagem()
            }
            img.location ?  vendedor.img_perfil = img.location :  vendedor.img_perfil = `${process.env.APP_URL}/uploads/${img.filename}`
            vendedor.key = img.key;
        }
        vendedor.atualizarPerfil(req, res);
    }    
}

module.exports = new VendedorController