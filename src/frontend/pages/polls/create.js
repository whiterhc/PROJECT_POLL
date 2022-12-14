import {render} from '../../pages/main.js';

const $app = document.getElementById('app');

const HeadTitle = () => `
	<div id="pollsCreate_titleBox">
		<h2>설문 프로젝트 만들기</h2>
	</div>
`;

const InputPollTitle = () => `
	<div class="pollsCreate_inputBox">
		<label for="projectName"><span>프로젝트 이름</span><br/></label>
		<input type="text" id="projectName" name="title">
	</div>
`;

const ButtonSubmitForm = () => `
	<div class="pollsCreate_inputBox">
		<button type="submit" id="projectSubmit">완료</button>
	</div>
`;

const FormPollsCreate = () => `
	<form action="/api/polls" method="post" name="pollsCreate">
		${InputPollTitle()}	
		${ButtonSubmitForm()}
	</form>
`

const template = () => {
	return `
		<div id="pollsCreate_container">
			${HeadTitle()}
			${FormPollsCreate()}
		</div>
	`
}

const setEvent = () => {
	// 페이지 새로 고침을 눌렀을 때
	window.onunload = (e) => {
		pollsCreateRender();
	}

	// 뒤로 가기 버튼을 눌렀을 때 이벤트 감지
	window.onpopstate = (e) => {
		render();
		location.reload();
	}
}

export const pollsCreateRender = () => {
	$app.innerHTML = template();
	setEvent()
};
