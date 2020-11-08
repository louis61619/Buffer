const http = require('http');

const server = http.createServer((req, res) => {
  //req對象中封裝了客戶端給服務器端傳遞的信息
  console.log(req.url)
  console.log(req.method)
  console.log(req.headers)
  
  res.end("Hello Server");
})

server.listen(8888, '0.0.0.0', () => {
  console.log("服務器啟動成功~")
})