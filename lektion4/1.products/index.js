const app = require('./app');
const mongoose = require('mongoose');

const PORT  = process.env.PORT || 9999;
const serverURI = 'http://localhost:' + PORT;
const mongoURI = ''

mongoose
.set('useCreateIndex', true)
.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => console.log('Connected to database'));


app.listen(PORT, () => console.log(`Server is listening on: ${serverURI}`));