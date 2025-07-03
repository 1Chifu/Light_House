const app = require('./app');
const database = require('./database')
const main = () => {
    database.connect((err) => {
        if (err) throw err;
        console.log('Base de datos conectada');
    });
    app.listen(5500, () => {
        console.log('Servidor escuchando puerto 5500')
    });
};

const data = {
  email: "usuario@lighthouse.pe",
  password: "123456"
};

fetch("http://localhost:5500/user", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
})
.then(res => res.text())
.then(msg => console.log(msg))
.catch(err => console.error(err));


main ();