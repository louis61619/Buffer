const fs  = require('fs')

//傳統的方式
// fs.readFile('./foo.txt', (err, data) => {
//   console.log(data)
// })

// 流的方式讀取
const reader = fs.createReadStream("./foo.txt", {
  start: 3, //從某個位置開始
  end: 10, //從某個位置結束
  highWaterMark: 2 //一次讀取幾個字節
})

// 讀取數據所發出的事件
reader.on("data", (data) => {
  console.log(data)

  reader.pause(); 

  setTimeout(() => {
    reader.resume()
  }, 1000)
})

reader.on("open", (data) => {
  console.log("文件被關閉")
})

reader.on("close", (data) => {
  console.log("文件被關閉")
})