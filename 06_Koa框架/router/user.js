const Router = require('koa-router');

const router = new Router({prefix:  "/users"})

router.put('/', (ctx, next) => {
  ctx.response.body = "put request~"
})

router.get('/', (ctx, next) => {
  ctx.response.body = "user list"
})

module.exports = router