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

    /*  `SELECT * FROM anuncios JOIN  vendedor ON anuncios.id_vendedor = vendedor.id ORDER BY anuncios.id DESC`, */

    getAll(req,res) {
        connection.query(
            `SELECT anuncios.id, img, descricao, valor, doacao, id_vendedor, img_perfil, nome, negocio, telefone FROM anuncios JOIN  vendedor ON anuncios.id_vendedor = vendedor.id ORDER BY anuncios.id DESC`,
            (error,result) => {
                if (error) {
                    res.status(400).json({errors: error});
                } else {
                    res.status(201).json(result);
                }
            }
        )
    }

    getAllOfOneVendedorAction(req,res) { 
        connection.query(
            `SELECT * FROM anuncios  WHERE id_vendedor = ${this.id_vendedor} ORDER BY id DESC`,
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
            `INSERT INTO anuncios ( id_vendedor, img, descricao, valor, doacao ) values ('${this.id_vendedor}', '${this.img}', '${this.descricao}', '${this.valor}', ${this.doacao})`,
            (error,result) => {
                if (error) {
                    res.status(400).json({errors: error});
                } else {
                    res.status(201).json(result);
                }
            }
        )
    }

    editarAnuncio(req,res) {
        let sql = ''
        this.img ?
        sql = `UPDATE anuncios SET img = '${this.img}', descricao = '${this.descricao}', valor = '${this.valor}', doacao = ${this.doacao} WHERE id = '${this.id}'` :
        sql = `UPDATE anuncios SET descricao = '${this.descricao}', valor = '${this.valor}', doacao = ${this.doacao} WHERE id = '${this.id}'` 

        connection.query(            
            sql,
            (error,result) => {
                if (error) {
                    res.status(400).json({errors: error});
                } else {
                    res.status(201).json(result);
                }
            }
        )
    }

    deletarAnuncio(req,res) {
        connection.query(            
            `DELETE FROM anuncios WHERE id = '${this.id}'`,
            (error,result) => {
                if (error) {
                    res.status(400).json({errors: error});
                } else {
                    res.status(201).json(result);
                }
            }
        )
    }
}

module.exports = new Anuncio