const { validationResult } = require('express-validator');

const anuncio = require('../model/Anuncios');

class AnunciosController {
    getAllAction(req,res) {
        anuncio.getAll(req,res)
    }

    getAllOfOneVendedorAction(req,res) {
        const { id } = req.params;
        anuncio.id_vendedor = id;
        anuncio.getAllOfOneVendedorAction(req,res);
    }

    postarAnuncioAction(req,res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { id_vendedor, descricao, valor, doacao } = req.body
        const img = req.file

        if(!img) {
            return res.status(400).json({errors: [{msg: "* campo obrigatório!",param: "img"}]})
        }
        
        anuncio.id_vendedor = id_vendedor;
        img.location ? anuncio.img = img.location : anuncio.img = `${process.env.APP_URL}/uploads/${img.filename}`
        anuncio.descricao = descricao;
        anuncio.valor = valor;
        anuncio.doacao = doacao;
        anuncio.postarAnuncio(req,res)
    }

    editarAnuncioAction(req,res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { id_vendedor, descricao, valor, doacao } = req.body
        const img = req.file
        const { id } = req.params

        if(img) {
            anuncio.img = img.filename;
        }

        anuncio.id = id;       
        anuncio.descricao = descricao;
        anuncio.valor = valor;
        anuncio.doacao = doacao;
        anuncio.editarAnuncio(req,res)
    }

    deletarAnuncioAction(req,res){
        const { id } = req.params;
        const { key } = req.body;
        anuncio.id = id;
        anuncio.key = key;
        anuncio.deletarAnuncio(req,res);
    }
}

module.exports = new AnunciosController