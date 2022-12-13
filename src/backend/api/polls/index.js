import Router from 'koa-router';
import * as pollsCtrl from './polls.ctrl.js';

const polls = new Router();

polls.get('/', pollsCtrl.list);
polls.post('/', pollsCtrl.write);
polls.get('/:id', pollsCtrl.read);
polls.delete('/:id', pollsCtrl.remove);
polls.patch('/:id', pollsCtrl.update);

export default polls;
