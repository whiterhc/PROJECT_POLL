require('dotenv').config();
const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const {PORT} = process.env
const api = require('./api');

const app = new Koa();
const router = new Router();

router.use('/api', api.routes());

app.use(bodyParser());

// url 파라미터
// router.get('/about/:name?', ctx => {
// 	const {name} = ctx.params;
// 	ctx.body = name ? `<span>${name}</span>` : '소개'
// });
//
// url 쿼리
// router.get('/posts', ctx => {
// 	const {id} = ctx.query;
// 	ctx.body = id ? `<span>${id}</span>` : '포스트 아이디가 없습니다.';
// });

app.use(router.routes()).use(router.allowedMethods());

const port = PORT || 5000;
app.listen(port, () => {
	console.log('Listening to port %d', port);
});
