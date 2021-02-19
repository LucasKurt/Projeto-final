const { validationResult } = require('express-validator');

const anuncio = require('../model/Anuncios');

class AnunciosController {
    getAllAction(req,res) {
        anuncio.getAll(req,res)
    }

    postarAnuncioAction(req,res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { id, descricao, valor, doacao } = req.body
        const img = req.file
        if(!img) {
            return res.status(400).json({errors: [{msg: "* campo obrigatório!",param: "img"}]})
        }

        anuncio.id_vendedor = id;
        anuncio.img = img.filename;
        anuncio.descricao = descricao;
        anuncio.valor = valor;
        anuncio.doacao = doacao;
        anuncio.postarAnuncio(req,res)
    }
}

module.exports = new AnunciosController