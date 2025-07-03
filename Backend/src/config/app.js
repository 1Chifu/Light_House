const express = require('express');
const path = require('path');
const cors = require('cors');

const userRoutes = require('../routes/user.routes');

const app = express();

// 📌 PRIMERO: define el path del frontend
const frontendPath = path.join(__dirname, '../../../Frontend/public');

console.log('Frontend path:', frontendPath); // Para verificar en consola

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Luego úsalo
app.use(express.static(frontendPath));

// Ruta raíz
app.get('/', (req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});

// Rutas API
app.use('/user', userRoutes);

module.exports = app;
