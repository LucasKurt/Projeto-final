const connection = require('../config/connection')

class Vendedor {
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
                    res.status(201).json("Cadastro Efetuado")
                }
            }
        );
    }
}

module.exports = new Vendedor;