const mysql = require('mysql');

// Protect DB with .env //

require('dotenv').config(process.cwd(), '.env')

const connection = mysql.createConnection({
    multipleStatements: true,
    host: "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_DB,
});

module.exports = connection;

