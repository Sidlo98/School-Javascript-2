const express = require('express');
const cors = require('cors');

// IMPORT CONTROLLERS
const productController = require('./controllers/productController')

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

app.use('/api/products', productController);

module.exports = app;
