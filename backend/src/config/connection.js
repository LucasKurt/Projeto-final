const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "comercio_amigavel"
});

module.exports = connection;