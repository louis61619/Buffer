const express = require('express');

const app = express()

app.get('/products/:id', (req, res,next) => {
  console.log(req.params)
  //req.params => 在資料庫中查詢商品數據
  res.end("商品的詳情數據")
})

app.get('/login', (req, res, next) => {
  console.log(req.query)
  res.end("用戶登入成功")
})

app.listen(8000, () => {
  console.log("普通中間件服務器啟動")
})