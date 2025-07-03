const database = require('../config/database');

const loginUser = (req, res) => {
  const { email, password } = req.body;

  const sql = 'SELECT * FROM usuarios WHERE email = ? AND password = ?';
  database.query(sql, [email, password], (err, results) => {
    if (err) {
      console.error('Error al consultar la base de datos:', err);
      return res.status(500).json({ message: 'Error del servidor' });
    }

    if (results.length > 0) {
      return res.status(200).json({ message: 'Login exitoso', user: results[0] });
    } else {
      return res.status(401).json({ message: 'Correo o contraseña incorrectos' });
    }
  });
};

const readUser = (req, res) => {
  const { id } = req.params;
  res.send(`ID: ${id}`);
};

const createUser = (req, res) => {
  const { email, password } = req.body;
  res.send(`${email}: ${password}`);
};

const updateUser = (req, res) => {
  res.send('Petición PUT');
};

const deleteUser = (req, res) => {
  res.send('Petición DELETE');
};

module.exports = {
  loginUser,
  createUser,
  readUser,
  updateUser,
  deleteUser,
};
