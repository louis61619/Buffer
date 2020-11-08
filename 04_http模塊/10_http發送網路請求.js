//一般會使用 : axios 會基於平台進行判斷
//如果在網頁端會基於 (xhr api) xmlhttprequest
//如果在node端會基於 (http模塊)

//get請求
const http = require('http');

// http.get('http://localhost:8888', (res) => {
//   res.on('data', (data) => {
//     console.log(data.toString())
//   })

//   res.on('end', (data) => {
//     console.log("獲取到了所有結果")
//   })
// })

const req = http.request({
  method: 'POST',
  hostname: 'localhost',
  port: 8888
}, (res) => {
  res.on('data', (data) => {
    console.log(data.toString())
  })

  res.on('end', (data) => {
    console.log("獲取到了所有結果")
  })
})

req.end() //POST要調用end() GET會自動做