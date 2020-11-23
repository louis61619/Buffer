const express = require('express');

const app = express()

app.get('/products/:id', (req, res,next) => {
  console.log(req.params)
  //req.params => 在資料庫中查詢商品數據
  res.end("商品的詳情數據")
})

app.get('/login', (req, res, next) => {
  console.log(req.query)

  //設置響應碼
  res.status(204)

  // res.end("用戶登入成功")
  res.json({'111': '2222'})
  // res.send({'111': '2222'})
})


/**
 * 舉格例子:
 *  請求所有用戶信息: get/ users
 *  請求其中某個用戶信息: get /users/:id body{username: password: }
 *  請求其中某個用戶信息: post /users/:id
 *  請求其中某個用戶信息: delete /users/:id
 *  請求其中某個用戶信息: patch /users/:id {nickname: }
 *  
 * 
 */


app.listen(8000, () => {
  console.log("普通中間件服務器啟動")
})