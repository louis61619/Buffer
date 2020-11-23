const Koa = require('koa')

const app = new Koa()

//next實際上執行的函數是dispatch
app.use((ctx, next) => {
  if(ctx.request.url === '/login') {
    if(ctx.request.method === 'GET') {
      ctx.response.body = "Login Success"
    }
  } else {
    ctx.response.body = "Hello World"
  }

  // console.log("中間件被執行")
  
})

//沒有提供以下的註冊方式
// methods方式: app.get post
// path方式: app.use('/home)
// 連續註冊方式: app.use((ctx, next) => {
// }, (ctx, next) => {
// })

app.listen(8000, () => {
  console.log('koa服務器啟動')
})