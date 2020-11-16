const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log("common middleware01")
  next()
})

//路徑匹配的中間件
app.use('/home', (req, res, next) => {
  console.log("home middleware 01")
  // res.end("Home Middleware");
  next()
})

app.use((req, res, next) => {
  console.log("common middleware02")
  next()
})

app.use('/home', (req, res, next) => {
  console.log("home middleware 02")
  res.end("Home Middleware");
})


app.listen(8000, () => {
  console.log("express初體驗服務器啟動成功~")
})

