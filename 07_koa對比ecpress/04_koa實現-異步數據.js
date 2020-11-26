const Koa = require('koa')

const app = new Koa()

const middleware1 = async (ctx, next) => {
  ctx.message = "aaa"
  await next();
  ctx.body = ctx.message
}

const middleware2 = async (ctx, next) => {
  ctx.message += "bbb"
  await next()
}

const middleware3 = async (ctx, next) => {
  const delay = (interval) => {
    return new Promise((resolve) => {
      setTimeout(resolve, interval);
    });
  };
  await delay(5000)
  ctx.message += "ccc"

}
app.use(middleware1)
app.use(middleware2)
app.use(middleware3)

app.listen(8000, () => {
  console.log('比較服務器啟動')
})