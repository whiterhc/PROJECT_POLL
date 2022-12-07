const Router = require('koa-router');
const pollsCtrl = require('./polls.ctrl');

const polls = new Router();

const printInfo = ctx => {
	ctx.body = {
		method: ctx.method,
		path: ctx.path,
		params: ctx.params,
	};
};

polls.get('/', printInfo);
polls.post('/', pollsCtrl.write);
polls.get('/:id', printInfo);
polls.delete('/:id', printInfo);
polls.put('/:id', printInfo);
polls.patch('/:id', printInfo);
module.exports = polls;

export default polls;
