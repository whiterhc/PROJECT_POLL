import Router from 'koa-router';
import polls from './polls/index.js';

const api = new Router();

api.use('/polls', polls.routes());

export default api;
