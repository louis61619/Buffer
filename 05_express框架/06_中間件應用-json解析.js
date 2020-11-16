const express = require('express')
const app = express()

// app.use((req, res, next) => {
//   //判斷類型並對數據進行處理
//   console.log(req.headers["content-type"])
//   if(req.headers["content-type"] === "application/json") {
//     req.on('data', (data) => {
//       const info  = JSON.parse(data.toString())
//       console.log(info)
//       req.body = info
//     })

//     req.on('end', () => {
//       next()
//     })
//   }else {
//     console.log('----')
//     next()
//   }
// })

//使用內置函數
app.use(express.json())
//解析POST傳遞值
app.use(express.urlencoded({extended: true}))
//如果為true，那麼對urlencoded解析使用第三方庫: qs
//如果為flase，那麼對urlencoded解析使用內置模塊:querystring

app.post('/login', (req, res, next) => {
  console.log(req.body)
  res.end("welcome Back, Renny")
})

app.listen(8000, () => {
  console.log("express服務開始")
})