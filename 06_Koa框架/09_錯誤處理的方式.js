const Koa = require('koa')

const app = new Koa()

app.use((ctx, next) => {
  const isLogin = false;
  if(!isLogin) {
    ctx.app.emit('error', new Error("您還沒有登入"), ctx)
  }
})

app.on('error', (err, ctx) => {
  ctx.status = 401
  ctx.body = err.message
  
})

app.listen(8000, () => {
  console.log("錯誤處理服務器啟動成功")
})