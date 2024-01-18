// creating a simple server in nodeJs.


// import http module

const http = require('http');
const path = require('path')
const fs = require('fs')

// create a server
const server = http.createServer((req, res) => {
  console.log(req.headers)
  console.log(req.url)
  console.log(req.method)

  if(req.url === "/") {
    res.write("hello kaffy");
    res.end();
  } else if (req.url === "/hello") {
    res.write("Hello Mummy")
    res.end()
  } else {
    res.write("404 not found - We  don't know you")
    res.end();
  }

  // console.log(path.dirname(__filename) + '/index.js')
  // fs.mkdir(path.dirname(__filename) + '/test', (err) => {
  //   if(err) {
  //     console.log(err);
  //   } else {
  //     console.log('Folder created')
  //   }
  // })
  // res.end('Hello from juma');
})

server.listen(8000, null, null, () => {
  console.log('server is running on Port 8000');
});