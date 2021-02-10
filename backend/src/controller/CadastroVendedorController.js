const vendedorModel = require('../model/Vendedor');

class VendedorController {
    async cadastrarVendedorAction(req,res,next) {
        const {nome,negocio,endereco,cpf,email,telefone,senha,confSenha} = req.body;
        if (senha == confSenha) {
            try {
                let resposta = await vendedorModel.create({nome,negocio,endereco,cpf,email,telefone,senha});
                res.json(resposta)
            } catch (err) {
                const error = new Error(err)
                res.json(err)
            }
        } else {
            res.json('as senhas devem ser iguais')
        }
    }             
}

module.exports = new VendedorController