const aws = require('aws-sdk');
const fs = require('fs')
const { promisify } = require('util')
const path = require('path')

const connection = require('../config/connection');

const s3 = new aws.S3();

class Anuncio {
    constructor() {
        this.id;
        this.id_vendedor;
        this.img;
        this.descricao;
        this.valor;
        this.doacao;
        this.img_key;
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
            `INSERT INTO anuncios ( id_vendedor, img, img_key, descricao, valor, doacao ) values ('${this.id_vendedor}', '${this.img}', '${this.img_key}', '${this.descricao}', '${this.valor}', ${this.doacao})`,
            (error,result) => {
                if (error) {
                    res.status(400).json({errors: error});
                } else {
                    res.status(201).json('Anúncio postado com sucesso !');
                }
            }
        )
    }

    editarAnuncio(req,res) {
        let sql = ''
        this.img ?
        sql = `UPDATE anuncios SET img = '${this.img}', img_key = '${this.key}', descricao = '${this.descricao}', valor = '${this.valor}', doacao = ${this.doacao} WHERE id = '${this.id}'` :
        sql = `UPDATE anuncios SET descricao = '${this.descricao}', valor = '${this.valor}', doacao = ${this.doacao} WHERE id = '${this.id}'` 

        connection.query(            
            sql,
            (error,result) => {
                if (error) {
                    res.status(400).json({errors: error});
                } else {
                    res.status(201).json('Anúncio editado com sucesso !');
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

    deletarImagem() {
        if (process.env.STORAGE_TYPE === 's3') {
            s3.deleteObject({
                Bucket: 'comercioamigavel',
                Key: this.key,
            }).promise()
        } else {
            promisify(fs.unlink)(path.resolve(__dirname,'..','..','uploads',this.key))
        }
    }
}

module.exports = new Anuncio