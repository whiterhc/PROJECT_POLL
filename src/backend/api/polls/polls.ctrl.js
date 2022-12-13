import Poll from '../../models/poll.js';

/**
 *  POST /api/polls
 *  {
 *      title,
 *      status
 *  }
 *
 * */
export const write = async ctx => {
	const {title, status} = ctx.request.body;
	const poll = new Poll({
		title,
		status,
	});
	try {
		await poll.save();
		ctx.body = poll;
	} catch (e) {
		ctx.throw(500, e);
	}
};
