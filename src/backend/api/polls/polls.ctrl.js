import Poll from '../../models/poll.js';

/**
 *  GET /api/polls
 *
 * */
export const list = async ctx => {
	try {
		const polls = await Poll.find().exec();
		ctx.body = polls;
	} catch (e) {
		ctx.throw(500, e);
	}
}

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

/**
 *  GET /api/polls/:id
 *
 * */
export const read = async ctx => {
	const {id} = ctx.params;
	try {
		const poll = await Poll.findById(id).exec();
		if (!poll) {
			ctx.status = 404;
			return;
		}
		ctx.body = poll;
	} catch(e) {
		ctx.throw(500, e);
	}
};

export const remove = async ctx => {
	const {id} = ctx.params;
	try {
		await Poll.findByIdAndRemove(id).exec();
		ctx.status = 204;
	} catch (e) {
		ctx.throw(500, e);
	}
};

export const update = async ctx => {
	const {id} = ctx.params;
	try {
		const poll = await Poll.findByIdAndUpdate(id, ctx.request.body, {
			new: true
		}).exec();
		if (!poll) {
			ctx.status = 404;
			return;
		}
		ctx.body = poll;
	} catch (e) {
		ctx.throw(500, e);
	}
};

