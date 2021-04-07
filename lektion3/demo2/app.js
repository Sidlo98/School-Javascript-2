const express = require('express');
const todosController = require('./controllers/todosController')


const app = express();

app.use('/todos', todosController);
module.exports = app;