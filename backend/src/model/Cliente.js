// const jwt = require('jsonwebtoken');

// const auth = require('../config/auth.json');
const crypto = require('crypto');
const connection = require('../config/connection')

class Cliente {
    constructor() {
        this.id;
        this.nome;
        this.email;
        this.senha;
    }

    getOne(req, res) {
        connection.query(
            `SELECT * FROM cliente WHERE id = '${this.id}'`,
            (error, result) => { 
                if (error) {
                    res.status(400).json(error);
                } else {
                    res.status(201).json(
                        {
                            nome: result[0].nome,
                            email: result[0].email,
                        }
                    );
                }
            }
        );
    }

    cadastrar(req, res) {
        connection.query(
            `INSERT INTO cliente ( nome, email, senha ) values ('${this.nome}', '${this.email}', '${this.senha}' )`,
            (error, result) => { 
                if (error) {
                    res.status(400).json([error]);
                } else {
                    res.status(201).json([{tipo: "cliente", msg: "Cadastro efetuado com sucesso"}]);
                }
            }
        );
    }

    atualizarPerfil(req,res) {
        let nome = this.nome;
        let email = this.email;
        let senha = this.senha;
        let set = ''
        if(nome) {
            set = `nome = '${nome}'`;
        }
        if(email) {
            if (set) {
                set += `, email = '${email}'`;
            } else {
                set = `email = '${email}'`;
            }
        }
        if(senha) {
            senha = crypto.createHash("sha256").update(senha).digest("hex");
            if (set) {
                set += `, senha = '${senha}'`
            } else {
                set = `senha = '${senha}'`
            }
        }

        connection.query(
            `UPDATE  cliente SET ${set} WHERE id = '${this.id}'`,
            (error,result) => {
                if (error) {
                    res.status(400).json(error);
                } else {
                    res.status(201).json({tipo: "cliente", msg: "Perfil atualizado com sucesso"});
                }
            }
        );

    }

    login(req, res) {
        connection.query(
            `SELECT * FROM cliente WHERE email = '${this.email}' and senha = '${this.senha}'`,
            (error,result) => {
                if (error) {
                    res.status(400).json(error);
                } else {
                    if(result.length != 0) {
                        //const token = jwt.sign({id: result[0].id},auth.secret,{expiresIn: 86400})
                        res.status(201).json({tipo: "cliente", id: result[0].id});
                    } else {
                        res.status(404).json("login ou senha invalidos");
                    }
                } 
            }
        );
    }
}
module.exports = new Cliente;