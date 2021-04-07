const app = require('./app');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 8080;

const serverURI = 'http://localhost:' + PORT;
const mongoURI = 'mongodb+srv://pontus:bytmig123@cluster0.emss9.mongodb.net/Todos?retryWrites=true&w=majority';

app.listen(PORT, () => console.log('Webserver: ' + serverURI));

mongoose
.set('useCreateIndex', true)
.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => console.log('Connected to DB'));