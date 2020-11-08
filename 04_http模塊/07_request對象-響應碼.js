// 200 => 請求成功
// 400 => 請求有語法錯誤 無法辨認
// 401 => 未經授權 通常和 WWW-Authorization 一起
// 404 => 未找到資源
// 500 => 服務器發生不可預期的錯誤
// 503 => 服務器當前無法處理請求

const http = require('http');
const url = require('url');
const qs = require('querystring');

const server = http.createServer((req, res) => {
  //設置狀態碼
  //1.方式一: 直接給屬性值
  // res.statusCode = 401

  //2.方式二: 和header一起
  res.writeHead('503')


  res.end("Hello Server11111")
  
})

server.listen(8888, '0.0.0.0', () => {
  console.log("服務器啟動成功~")
})