const Koa = require('koa')

const staticeAssets = require('koa-static')

const app = new Koa()

app.use(staticeAssets('./T20000278'))

app.listen(8000, () => {
  console.log("koa靜態資源服務器啟動成功")
})