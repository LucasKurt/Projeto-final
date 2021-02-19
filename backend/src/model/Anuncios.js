const connection = require('../config/connection');

class Anuncio {
    constructor() {
        this.id;
        this.id_vendedor;
        this.img;
        this.descricao;
        this.valor;
        this.doacao
    }

    getAll(req,res) {
        connection.query(
            `SELECT * FROM anuncios`,
            (error,result) => {
                if (error) {
                    res.status(400).json({errors: error});
                } else {
                    res.status(201).json(result);
                }
            }
        )
    }

    postarAnuncio(req,res) {
        connection.query(
            `INSERT INTO anuncios ( id_vendedor, img, descricao, valor, doacao ) values ('${this.id_vendedor}', '${this.img}', '${this.descricao}', '${this.valor}', '${this.doacao}' )`,
            (error,result) => {
                if (error) {
                    res.status(400).json({errors: error});
                } else {
                    res.status(201).json(this.img);
                }
            }
        )
    }
}

module.exports = new Anuncio