const vendedorModel = require('../model/Vendedor');

class VendedorController {
    async cadastrarVendedorAction(req,res) {
        const {nome,negocio,endereco,cpf,email,telefone,senha} = req.body;
        let resposta = await vendedorModel.create({nome,negocio,endereco,cpf,email,telefone,senha});
        res.json(resposta)
    }             
}

module.exports = new VendedorController