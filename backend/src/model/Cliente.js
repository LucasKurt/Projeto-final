// const jwt = require('jsonwebtoken');

// const auth = require('../config/auth.json');
const connection = require('../config/connection')

class Cliente {
    constructor() {
        this.id;
        this.nome;
        this.email;
        this.senha;
    }

    cadastrar(req, res) {
        connection.query(
            `INSERT INTO cliente ( nome, email, senha ) values ('${this.nome}', '${this.email}', '${this.senha}' )`,
            (error, result) => { 
                if (error) {
                    res.status(400).json(error)
                } else {
                    res.status(201).json({tipo: "cliente", msg: "Cadastro efetuado com sucesso"})
                }
            }
        );
    }

    login(req, res) {
        connection.query(
            `SELECT * FROM cliente WHERE email = '${this.email}' and senha = '${this.senha}'`,
            (error,result) => {
                if (error) {
                    res.status(400).json(error)
                } else {
                    if(result.length != 0) {
                        //const token = jwt.sign({id: result[0].id},auth.secret,{expiresIn: 86400})
                        res.status(201).json({tipo: "cliente", id: result[0].id})
                    } else {
                        res.status(404).json("login ou senha invalidos")
                    }
                } 
            }
        );
    }

}

module.exports = new Cliente;