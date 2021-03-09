const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.COM_HOST,
    user: process.env.COM_USER,
    password: process.env.COM_PASSWORD,
    database: process.env.COM_DATABASE
});

module.exports = connection;