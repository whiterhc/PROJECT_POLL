import dotenv from 'dotenv';
import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';

dotenv.config();
// MongoDB
const {PORT, MONGO_URI} = process.env

mongoose
	.connect(MONGO_URI)
	.then(() => {console.log('Connected to MongoDB');})
	.catch(e => {console.error(e);});

// api Router
import api from './api/index.js';

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
