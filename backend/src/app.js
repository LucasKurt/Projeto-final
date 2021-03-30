require('dotenv').config()

const express = require('express');
const cors = require('cors');

const routes = require('./routes')

class App {
    constructor() {
        this.server = express();
        this.middlewares();
        this.routes()
    }

    middlewares() {
        // this.server.use((req, res, next) => {
        //     //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
        //     res.header("Access-Control-Allow-Origin", "*");
        //     //Quais são os métodos que a conexão pode realizar na API
        //     res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
        //     this.server.use(cors());
        //     next();
        // });
        this.server.use(cors())
        this.server.use(express.json());
        this.server.use('/uploads',express.static('uploads'))
    }

    routes() {
        this.server.use(routes);
    }
}

const app = new App;

module.exports = app.server;