import Router from 'koa-router';
import * as pollsCtrl from './polls.ctrl.js';

const polls = new Router();

polls.post('/', pollsCtrl.write);

export default polls;
