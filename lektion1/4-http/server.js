const http = require('http');

const server = http.createServer((req, res) => {
  console.log('request made');
  console.log(req.url);

  // res.write('<h1>HELLO</h1>');
  // res.end();

  res.end('<h1>Hello</h1>');
})


server.listen(9999, () => {console.log('Server Is Running On Port: http://localhost:9999')});