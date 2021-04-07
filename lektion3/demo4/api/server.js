const app = require('./app');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 8080;

const serverURI = 'http://localhost:' + PORT;
const mongoURI = '';

app.listen(PORT, () => console.log('Webserver running at:' + serverURI));

mongoose
.set('useCreateIndex', true)
.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => console.log('Connected to database'));