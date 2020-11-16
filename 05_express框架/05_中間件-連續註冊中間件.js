const express = require('express')

const app = express()

app.use((req, res, next) => {
  console.log("common middleware")
  next()
})

app.get('/home', (req, res, next) => {
  console.log("common middelware 0")
  next()
})

app.get('/home', (req, res, next) => {
  console.log("home path and method middelware 0")
  next()
}, (req, res, next) => {
  console.log("home path and method middelware 1")
  next()
}, (req, res, next) => {
  console.log("home path and method middelware 2")
  next()
}, (req, res, next) => {
  console.log("home path and method middelware 3")
  next()
},(req, res, next) => {
  console.log("home path and method middelware 4")
  res.end('Home Page')
})



app.listen(8000, () => {
  console.log("express初體驗服務器啟動")
})