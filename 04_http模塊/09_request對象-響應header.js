const http = require('http');
const url = require('url');
const qs = require('querystring');

const server = http.createServer((req, res) => {
  //設置響應的header
  //設置方式一:
  res.setHeader("Content-Type", "text/plain;charset=utf8")

  //設置方式二:
  res.writeHead(200, {
    "Content-Type": "text/html;charset=utf8"
  })

  res.end("<h2>拉基中文</h2>")
  
})

server.listen(8888, '0.0.0.0', () => {
  console.log("服務器啟動成功~")
})