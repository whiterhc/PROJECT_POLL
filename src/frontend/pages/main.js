import {pollsCreateRender} from "../pages/polls/create.js";

const $app = document.getElementById('app');

const HeadIntro = () => `
	<div id="introBox">
		<h2>안녕하세요.</h2>
		<h3>
			온라인 설문 관리 서비스<br/>
			POLL에 오신 것을 환영합니다.<br/>
			지금 바로 설문 프로젝트 만들기를<br/>
			시작해보세요!
		</h3>
	</div>
`;

const ButtonCreatePoll = () => `
	<div id="btnBox" class="animatedMt">
		<button id="createPollBtn" class="animatedOp">새 설문 프로젝트 만들기</button>	
	</div>
`;

const template = () => {
	return `
		<div id="container">
			${HeadIntro()}
			${ButtonCreatePoll()}
		</div>
	`
}

const setEvent = () => {
	// DOM Element Variables
	const $btnBox = document.getElementById("btnBox");
	const $createPollBtn = document.getElementById("createPollBtn");

	// 1. Btn Animation
	const btnAnimation = () => {
		$createPollBtn.style.opacity = 1;
		$btnBox.style.marginTop = "0px";
	}

	let btnEventTimeout
	document.addEventListener("DOMContentLoaded", () => {
		btnEventTimeout = setTimeout(btnAnimation, 300);
	});
	clearTimeout(btnEventTimeout);

	// 2. Routing
	$createPollBtn.addEventListener("click", () => {
		window.history.pushState(null, null, location.origin + "/polls/create");
		render();
	})
}

const mainRender = () => {
	$app.innerHTML = template();
	setEvent();
}

export const render = () => {
	if (window.location.pathname === "/") {
		mainRender();
	} else if (window.location.pathname === "/polls/create") {
		pollsCreateRender();
	}
}

render();