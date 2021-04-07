const express = require('express');
const app = express();
const cors = require('cors');

// CONTROLLER IMPORTS
const productController = require('./controllers/productController');
const userController = require('./controllers/userController');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/products', productController);
app.use('/api/users', userController);



module.exports = app;