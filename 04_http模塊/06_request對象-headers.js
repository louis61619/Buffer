const http = require('http');
const url = require('url');
const qs = require('querystring');

const server = http.createServer((req, res) => {

  console.log(req.headers)

  res.end("Hello Server")
  
})

server.listen(8888, '0.0.0.0', () => {
  console.log("服務器啟動成功~")
})