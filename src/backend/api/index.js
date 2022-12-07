const Router = require('koa-router');
const polls = require('./polls');

const api = new Router();

api.use('/polls', polls.routes());

module.exports = api;
