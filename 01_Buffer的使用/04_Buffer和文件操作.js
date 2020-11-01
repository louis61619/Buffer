const fs = require('fs')
const sharp = require('sharp')

//讀取文本文件
// fs.readFile("./foo.txt", {encoding: 'utf16le'}, (err, data) => {
//   console.log(data)
// })

//讀取圖片文件
// fs.readFile("./下載.jpg", (err, data) => {
//   console.log(data)
  
//   //寫入一個相同的圖片
//   fs.writeFile("./foo.png", data, err => {
//     console.log(err)
//   })
// })

//sharp庫的使用
// sharp('./下載.jpg')
//   .resize(200, 200)
//   .toFile('./baz.jpg')

sharp('./下載.jpg')
.resize(150, 150)
.toBuffer()
.then(data => {
  fs.writeFile('./bax.png', data, err => {
    console.log(err)
  })
})