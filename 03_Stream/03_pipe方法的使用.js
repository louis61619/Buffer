const fs = require('fs');

//讀取並寫入其他文件
// fs.readFile('./bar.txt', (err, data) => {
//   fs.writeFile('./baz.txt', data, (err) => {
//     console.log(err)
//   })
// })

//Stream的寫法
const reader = fs.createReadStream("./foo.txt")
const writer = fs.createWriteStream("./foz.txt")
//將流寫入其他的流
reader.pipe(writer)
writer.close() //流需要被關閉