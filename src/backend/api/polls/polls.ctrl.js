import Poll from '../../models/poll.js';

/** 설문조사 생성
 *  POST /api/polls
 *  { title, type, status }
 *
 * */
export const write = async ctx => {
	const {title, type} = ctx.request.body;
	const poll = new Poll({
		title,
		type
	});
	try {
		await poll.save();
		ctx.body = poll;
	} catch (e) {
		ctx.throw(500, e);
	}
};
