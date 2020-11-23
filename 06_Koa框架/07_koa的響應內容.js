const Koa = require('koa')

const app = new Koa()

app.use((ctx, next) => {
  //響應結果
  // ctx.response.body = {
  //   name: "coderwhy",
  //   age: 18,
  //   url: 'http://abc.png'
  // }

  //設置狀態碼
  // ctx.response.status = 200

  ctx.status = 200
  ctx.body = "Hello Koa~"
})


app.listen(8000, () => {
  console.log("koa響應服務器啟動成功")
})