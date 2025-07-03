const mysql2 = require('mysql2');

const database = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'P13l170d0$l4y3r040105',
    database: 'tutorial'
});

module.exports = database;