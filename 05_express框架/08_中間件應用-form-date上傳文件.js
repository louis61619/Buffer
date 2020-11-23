const path = require('path')

const express = require('express')
const multer = require('multer')

const app = express()

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname))
  }

})

const upload = multer(({
  storage
}))

//不要將multer作為全局中間件使用

app.post('/login',upload.any() , (req, res, next) => {
  console.log(req.body)
  res.end("用戶登入成功")
})


//上傳多個文件使用array 後面參數帶上key值
app.post('/upload', upload.array('file'), (req, res, next) => {
  console.log(req.files)
  res.end('文件上傳成功')

})

app.listen(8000, () => {
  console.log("form-data解析服務器啟動成功")
})