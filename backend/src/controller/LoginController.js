const crypto = require('crypto');
const cliente = require('../model/Cliente');
const vendedor = require('../model/Vendedor');

class LoginController {
    loginAction(req,res) {
        const {email,senha,tipo} = req.body;
        if(tipo == "vendedor") {
            vendedor.email = email;
            vendedor.senha = crypto.createHash("sha256").update(senha).digest("hex");
            vendedor.login(req,res);
        } else {
            cliente.email = email;
            cliente.senha = crypto.createHash("sha256").update(senha).digest("hex");
            cliente.login(req,res); 
        }
    }
}

module.exports = new LoginController