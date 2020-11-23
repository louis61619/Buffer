const Koa = require('koa')
const multer = require('koa-multer')
const Router = require('koa-router')

const app = new Koa()
const uploadRouter = new Router({prefix: '/upload'})

const upload  = multer({
  dest: './uploads/'
})

// const storage = multer.diskStorage({

// })

uploadRouter.post('/avatar', upload.single('avatar'), (ctx, next) => {
  console.log(ctx.req.file)
  ctx.response.body = "上傳頭像成功"
})

app.use(uploadRouter.routes())

app.listen(8000, () => {
  console.log("文件上傳服務器啟動成功")
})