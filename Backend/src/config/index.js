const app = require('./app');
const database = require('./database');

const main = () => {
    database.connect((err) => {
        if (err) throw err;
        console.log('Base de datos conectada');
    });

    app.listen(5500, () => {
        console.log('Servidor escuchando en http://localhost:5500');
    });
};

main();
