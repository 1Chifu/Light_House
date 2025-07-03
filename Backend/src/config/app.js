const express = require('express');

const cors = require('cors');
app.use(cors());

const userRoutes = require('../routes/user.routes')

const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/user', userRoutes);

module.exports = app;