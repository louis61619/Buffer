const Koa = require('koa')

const app = new Koa()
const Router = require('koa-router')

const userRouter = new Router({prefix: '/users'})

app.use(userRouter.routes())

userRouter.get('/:id', (ctx, next) => {
  console.log(ctx.request.params)
  console.log(ctx.request.query)
})

app.listen(8000, () => {
  console.log("參數處理服務器的啟用")
})