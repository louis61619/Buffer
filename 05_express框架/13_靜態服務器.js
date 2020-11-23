const express = require('express')

const app = express()

app.use(express.static('./T20000278'))

app.listen(8000, () => {
  console.log('靜態資源服務器啟動成功')
})