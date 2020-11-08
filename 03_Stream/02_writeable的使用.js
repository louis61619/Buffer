const fs = require('fs');

//傳統的寫入方式
// fs.writeFile("./bar.txt", "Hello Stream", (err) => {
//   console.log(err)
// })

// Stream的寫入方式
const writer = fs.createWriteStream('./bar.txt', {
  // flags: "a", //追加 有BUG 無法從對應的位置開始寫入
  flags: "r+",
  start: 4,

})

writer.write("你好阿", (err) => {
  if(err) {
    console.log(err);
    return
  }
  console.log("寫入成功")
})

writer.write("李銀河", (err) => {
  console.log("第二次寫入")
})

//相當於close()
//不過一般來說會使用end因為可以寫入東西
writer.end("Hello World")

writer.on('close', () => {
  console.log("文件被關閉")
})