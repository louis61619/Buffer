const Koa = require('koa')
const bodyparser = require('koa-bodyparser')
const multer = require('koa-multer');
const Router = require('koa-router');

const app = new Koa()

const upload = multer();

app.use(bodyparser()) //解析JSON、urlencoded傳輸
app.use(upload.any()) //解析form-data

app.use((ctx, next) => {
  console.log(ctx.req.body)
  ctx.response.body = "Hello World"
})



// app.use((ctx, next) => { 
//   console.log(ctx.request.body)
//   ctx.response.body = "Hello World"
// })

app.listen(8000, () => {
  console.log("參數處理服務器的啟用")
})