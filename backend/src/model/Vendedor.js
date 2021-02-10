const connection = require('../config/connection')

const { Schema, model } = require('mongoose');

const VendedorSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    negocio: {
        type: String
    },       
    endereco: {
        type: String
    },
    cpf: {
        type: String
    },
    email: {
        type: String
    },
    telefone: {
        type: String
    },
    senha: {
        type: String
    },
    img: {
        type: String,
        default: "perfil-sem-foto.jpg"

    }     
})

const vendedorModel = model("vendedores",VendedorSchema)

module.exports = vendedorModel