const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const router = new Router();

router.post('/login', bodyParser(), async ctx => {
  console.log(ctx.request.body);
  ctx.body = 'test';
});

module.exports = router;
