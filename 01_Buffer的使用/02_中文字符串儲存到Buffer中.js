const message = "你好阿";

//一個中文是三個字節(utf-8)
//utf-16是兩個編碼
// const buffer = Buffer.from(message)
// console.log(buffer)

//對文字進行解碼: utf-8
// console.log(buffer.toString())

//使用utf16e，解碼用utf-8
const buffer = Buffer.from (message, 'utf16le')
console.log(buffer)
console.log(buffer.toString('utf16le'))