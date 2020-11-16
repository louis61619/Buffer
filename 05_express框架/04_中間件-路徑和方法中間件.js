const express = require('express')

const app = express()

app.use((req, res, next) => {
  console.log("common middleware")
  next()
})


app.get('/home', (req, res, next) => {
  console.log("home path and method middelware")
})

app.post('login', (req, res, next) => {
  console.log("login path and method middleware")
})

app.listen(8000, () => {
  console.log("express初體驗服務器啟動")
})