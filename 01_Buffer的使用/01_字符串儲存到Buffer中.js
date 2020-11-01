const message = "Hello"

//創建Buffer
//十六進制表示
//1.創建方式一: 不推薦(過期)
// const buffer  = new Buffer(message);
// console.log(buffer);

//創建方式二:
const buffer = Buffer.from(message);
console.log(buffer)