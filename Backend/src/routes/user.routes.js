const { Router } = require('express');
const {
  loginUser,
  createUser,
  readUser,
  updateUser,
  deleteUser
} = require('../controllers/user.controllers');

const router = Router();

router.post('/login', loginUser); // Ruta para iniciar sesión
router.get('/:name/:id', readUser);
router.post('/', createUser);
router.put('/', updateUser);
router.delete('/', deleteUser);

module.exports = router;

