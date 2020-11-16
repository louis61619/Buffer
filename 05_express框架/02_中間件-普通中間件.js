const express = require('express')

const app = express()

//編寫普通的中間件
//use註冊一個中間件(回調函數)

app.use((req, res, next) => {
  console.log("註冊了第一個普通中間件")
  next()
})

app.use((req, res, next) => {
  console.log("註冊了第二個普通中間件")
  next()
})

app.use((req, res, next) => {
  console.log("註冊了第二個普通中間件")
  res.write("GOGOGOGGO\n")
  res.end("Hello World")
})



app.listen(8000, () => {
  console.log('普通中間件')
})