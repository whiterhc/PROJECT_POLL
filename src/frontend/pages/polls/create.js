import {render} from '../main.js';

const $app = document.getElementById('app');

const HeadTitle = () => `
	<div id="pollCreate_titleBox">
		<h2>설문 프로젝트 만들기</h2>
	</div>
`

const template = () => {
	return `
		<div id="container">
			${HeadTitle()}
		</div>
	`
}

const setEvent = () => {
	window.onpopstate = (e) => {
		render();
		location.reload();
	}
}

export const pollsCreateRender = () => {
	$app.innerHTML = template();
	setEvent()
}
