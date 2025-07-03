const { Router } = require('express');

router.post('/login', loginUser); 

const { 
    createUser, 
    readUser, 
    updateUser, 
    deleteUser } = require('../controllers/user.controllers');

const router = Router();

router.get('/:name/:id', readUser);

router.post('/', createUser);

router.put('/', updateUser);

router.delete('/', deleteUser);

module.exports = router;

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

module.exports = {
  createUser,
  readUser,
  updateUser,
  deleteUser,
  loginUser, // Agregado
};

