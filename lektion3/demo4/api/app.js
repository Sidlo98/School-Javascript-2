const express = require('express');
const app = express();
const cors = require('cors');

const todoController = require('./controllers/todosController');

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Accept, Authorization, origin, X-Requested-width');
//   if(req.method === 'OPTIONS') {
//     res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
//   }
//   next();
// })

app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/todos', todoController);

module.exports = app;