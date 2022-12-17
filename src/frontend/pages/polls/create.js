import {render} from '../../pages/main.js';

const $app = document.getElementById('app');

const HeadTitle = () => `
	<div id="pollsCreate_titleBox">
		<h2>설문 프로젝트 만들기</h2>
	</div>
`;

const InputPollTitle = () => `
	<div class="pollsCreate_inputBox">
		<label for="pollsCreate_title"><span>프로젝트 이름</span><br/></label>
		<input type="text" id="pollsCreate_title" name="title"><br/>
		<span id="pollsCreate_titleVmsg" class="vmsg">필수 입력 값입니다.</span>
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
		<input type="submit" id="projectSubmit" class="animatedOp" value="설문 프로젝트 생성">
	</div>
`;

const FormPollsCreate = () => `
  <form
    action="/api/polls"
    method="post"
    id="pollsCreate_form"
    name="pollsCreate"
  >
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
  const $form = document.getElementById("pollsCreate_form");
  const $inputTitle = document.getElementById("pollsCreate_title");
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

  // 2. input styling
  $inputTitle.addEventListener("input", () => {
    if ($inputTitle.value === "") {
      $inputTitle.style.borderColor = '#e7859d';
      document.getElementById("pollsCreate_titleVmsg").style.display = "inline-block";
    } else if ($inputTitle.value.length > 0) {
      $inputTitle.style.borderColor = '#98afd2';
      document.getElementById("pollsCreate_titleVmsg").style.display = "none";
    }
  })

  // 3. validation and go submit
  $form.addEventListener("submit", (e) => {
    let isSubmit = true;

    if ($inputTitle.value === "") {
      e.preventDefault();
      isSubmit = false;
      $inputTitle.style.borderColor = '#e7859d';
      document.getElementById("pollsCreate_titleVmsg").style.display = "inline-block";
    }

    return isSubmit;
  });

	// 3. 뒤로 가기/앞으로 가기 버튼을 눌렀을 때 이벤트 감지
	window.onpopstate = (e) => {
		render();
		location.reload();
	}
}

export const pollsCreateRender = () => {
	$app.innerHTML = template();
	setEvent()
};
