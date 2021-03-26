const app = require('./app');
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT;
const CONNECTION_URL = process.env.CONNECTION_URL;
const SERVER_URL = 'http://localhost:' + PORT;

app.listen(PORT, () => console.log(`Server running at ${SERVER_URL}`));

mongoose
.set('useCreateIndex', true )
.connect(CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => console.log(`Connected to the database`))