const Http = require("http");
const Fs = require("fs");
const path = require('path');

let filePath;

const server = Http.createServer((req, res) => {
  
  // console.log(req.url);
  // res.end('<h1>HEJ</h1>');
  
  res.setHeader('Content-type', 'text/html');

  // let file;

  // if(req.url === '/') {
  //   file = 'index.html';
  //   console.log(file);
  // } else if(req.url === '/about') {
  //   file = 'about.html';
  //   console.log(file);
  // }

  if(req.url != '/favicon.ico') {
    filePath = path.join(
      __dirname,
       'views',
        req.url === '/' ?  'index.html' : req.url + '.html'
    );
  }

  Fs.readFile(filePath, (err, data) => {
    if(err) {
      if(err.code === 'ENOENT') {
       res.end('<h1>404</h1>')
      }
    } 
    res.end(data);
  })

});

const PORT = process.env.PORT || 9999;

server.listen(PORT, "localhost", () => {
  console.log(`Server Is Running On http://localhost:${PORT}`)}
);
