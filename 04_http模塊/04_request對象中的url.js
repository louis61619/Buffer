const http = require('http');

const url = require('url');

const qs = require('querystring');

const server = http.createServer((req, res) => {
  //req對象中封裝了客戶端給服務器端傳遞的信息
  console.log(req.url)

  //最基本的使用方式
  // if(req.url === '/login') {
  //   res.end("歡迎回來~")
  // } else if(req.url === '/users') {
  //   res.end("用戶列表")
  // } else {
  //   res.end("錯誤請求，檢查")
  // }

  //複雜的請求 ex: /login?name=renny&password=5658455
  // console.log(url.parse(req.url))
  const { pathname, query } = url.parse(req.url) //通過url模塊進行解析
  if(pathname === '/login') {

    console.log(pathname)
    const { username, password } = qs.parse(query) //通過qs模塊進行解析
    console.log(qs.parse(query))
    console.log(username, password)

    //指定回傳的編碼格式
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'}); //指定回傳編碼
    res.write('<h1>死中文</h1>')
    res.end()
  }


  // res.end("Hello Server");
})

server.listen(8888, '0.0.0.0', () => {
  console.log("服務器啟動成功~")
})