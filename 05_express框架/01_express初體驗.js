const express = require('express')

// express 其實是一個函數 createexpressApplication

//返回一個app
const app = express()

// 監聽默認路經
app.get('/', (req, res, next) => {
  res.send('Hello Express')
})

app.post('/', (res, req, next) => {
  res.send("Hello Posr Express")
})

app.post('/login', (req, res, next) => {
  res.send("Welcome Back~")
})

// 開啟監聽
app.listen(8000, () => {
  console.log("Hello express")
})