import {render} from '../../pages/main.js';

const $app = document.getElementById('app');

let polls = [];

const HeadTitle = () => `
	<div id="pollsList_titleBox">
		<h2>설문 프로젝트 리스트</h2>
	</div>
`;

const TablePollsRow = (poll) => `
	<tr>
		<td>${poll.title}</td>
		<td>0/${poll.maxAnswer}명</td>
		<td>${moment(poll.deadline).format('MM/DD')}</td>
	</tr>
`;

const TablePollsList = () => `
	<div id="pollsList_tableBox">
		<table id="pollsList_table">
			<thead id="pollsList_tableHead">
				<th id="pollsList_tableHeadTitle" class="pollsList_tableHead">제목</th>
				<th id="pollsList_tableHeadGoal" class="pollsList_tableHead">현황/목표</th>
				<th id="pollsList_tableHeadDeadline" class="pollsList_tableHead">기한</th>
			</thead>
			<tbody>
				${polls.map(item => TablePollsRow(item)).join('')}
			</tbody>
		</table>
	</div>
`

const beforeMount = async () => {
	const response = await fetch('/api/polls', {'content-type': 'application/json'})
	const data = await response.json();
	polls = data;
	console.log(polls);
}

const template = () => {
	return `
		<div id="pollsList_container">
			${HeadTitle()}
			${TablePollsList()}
		</div>
	`
};

const setEvent = () => {

};

export const pollsListRender = () => {
	beforeMount().then(() => {
		$app.innerHTML = template();
	});
	setEvent();
};
