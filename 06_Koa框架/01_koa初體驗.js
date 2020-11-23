const Koa = require('koa')

const app = new Koa()

//next實際上執行的函數是dispatch
app.use((ctx, next) => {
  console.log("中間件被執行")
  ctx.response.body = "Hello World"
})

app.listen(8000, () => {
  console.log('koa服務器啟動')
})