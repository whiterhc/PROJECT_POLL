let pollsId = 1;

const polls = [
	{
		id: 1,
		title: '',
		type: '',
		status: '',
		link: ''
	}
];

/** 설문조사 생성
 *  POST /api/polls
 *  { title, type, status }
 *
 * */
export const write = ctx => {
	const {title, type, status, link} = ctx.request.body;
	pollsId += 1;
	const poll = {id: pollsId, title, type, status, link};
	polls.push(poll);
	ctx.body = poll;
}
