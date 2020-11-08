const http = require('http');
const url = require('url');
const qs = require('querystring');

const server = http.createServer((req, res) => {

  const { pathname } = url.parse(req.url)

  if(pathname === '/login') {
    if(req.method === 'POST') {
      //拿到body中的數值
      //body中的數據是通過流的方式寫入
      req.setEncoding('utf-8') //指定req資料格式
      req.on('data', (data) => {
        // console.log(data, typeof data)
        const { username, password } = JSON.parse(data)
        console.log(username, password)
      })

      res.end("Hello Server02315hgghgh");
    }
  }

  
})

server.listen(8888, '0.0.0.0', () => {
  console.log("服務器啟動成功~")
})