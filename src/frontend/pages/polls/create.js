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

const InputPollMaxPeople = () => `
	<div class="pollsCreate_inputBox">
		<label for="projectMaxAnswers"><span>목표 응답 수</span><br/></label>
		<input type="number" id="projectMaxAnswers" name="maxAnswer">	
	</div>
`

const InputPollDeadline = () => `
	<div class="pollsCreate_inputBox">
		<label for="projectDeadline"><span>설문 기한</span><br/></label>
		<input type="date" id="projectDeadline" name="deadline">			
	</div>
`

const InputPollIsPublic = () => `
	<div id="pollsCreate_checkboxBox">
		<label for="projectIsPublic"><span>설문 공개 여부</span><br/></label>
		<input type="checkbox" id="projectIsPublic" name="isPublic">					
	</div>
`

const ButtonSubmitForm = () => `
	<div id="pollsCreate_btnBox" class="pollsCreate_inputBox animatedMt">
		<button type="submit" id="projectSubmit" class="animatedOp">설문 프로젝트 생성</button>
	</div>
`;

const FormPollsCreate = () => `
	<form action="/api/polls" method="post" name="pollsCreate">
		${InputPollTitle()}	
		${InputPollMaxPeople()}
		${InputPollDeadline()}
		${InputPollIsPublic()}
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
	// DOM Element Variables
	const $btnBox = document.getElementById("pollsCreate_btnBox");
	const $submitBtn = document.getElementById("projectSubmit");

	// 1. Btn Animation
	const btnAnimation = () => {
		$submitBtn.style.opacity = 1;
		$btnBox.style.marginTop = "10px";
	}

	let btnEventTimeout
	document.addEventListener("DOMContentLoaded", () => {
		btnEventTimeout = setTimeout(btnAnimation, 300);
	});
	clearTimeout(btnEventTimeout);

	// 2. 페이지 새로 고침을 눌렀을 때
	window.onunload = (e) => {
		pollsCreateRender();
	}

	// 3. 뒤로 가기 버튼을 눌렀을 때 이벤트 감지
	window.onpopstate = (e) => {
		render();
		location.reload();
	}
}

export const pollsCreateRender = () => {
	$app.innerHTML = template();
	setEvent()
};
