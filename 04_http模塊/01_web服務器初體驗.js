const http = require('http')

//1.創建一個web服務器
//以Stream的方式
const server = http.createServer((req, res) => {
  // res.end("Hello Server")
  res.write("Hello Server")
  res.end()
})

server.listen(8888, '0.0.0.0', () => {
  console.log("服務啟動成功")
})

// const server2 = http.createServer((req, res) => {
//   // res.end("Hello Server")
//   res.write("Hello Server2")
//   res.end()
// })

// server2.listen(8889, '0.0.0.0', () => {
//   console.log("服務啟動成功")
// })

const server2 = new http.Server((req, res) => {
  res.end("Server2")
})

//如果設定IP地址，便無法被其他地址請求到
server2.listen(8001, "192.168.42.73", () => {
  console.log("server2啟動成功")
})

//localhost 本質為域名 解析為 127.0.0.1
//127.0.0.1 表達主機自己被自己接收
//0.0.0.0 監聽IPV4上的所有地址，正常會用這個

//如果沒有傳入端口，會被自動分配
//如果也沒有傳入主機地址 默認為 0.0.0.0