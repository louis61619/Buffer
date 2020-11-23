const Koa = require('koa');
const { allowedMethods } = require('./router/user');

const userRouter = require('./router/user')

const app = new Koa()

app.use(userRouter.routes())

//被定義好的錯誤請求
app.use(userRouter.allowedMethods())

app.listen(8000, () => {
  console.log("路由服務器啟動成功~")
})