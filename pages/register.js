// Close Register success
const registerSuccess = document.querySelector('.register-success');
const registerSucBtn = document.querySelector(
	'.register-success-content button',
);

if (registerSucBtn !== null) {
	registerSucBtn.addEventListener('click', (e) => {
		e.preventDefault();

		registerSuccess.classList.add('display');
	});
}

// REGISTER FORM SUBMIT
const registerForm = document.querySelector('#register-form');

registerForm.addEventListener('submit', (e) => {
	e.preventDefault();

	sendregistration();
	registerForm.reset();
});

// Function to submit register form
async function sendregistration() {
	// Get Input field's value
	const registerTeamName = document.querySelector('.input-box #name').value;
	const registerPhone = document.querySelector('.input-box #phone').value;
	const registerEmail = document.querySelector('.input-box #email').value;
	const registerProject = document.querySelector(
		'.input-box #project-topic',
	).value;
	const registerCategory = document.querySelector('.input-box #category').value;
	const registerGroup = document.querySelector('.input-box #group').value;
	const registerCheck = document.querySelector(
		'.register-check-input #check',
	).checked;

	await axios({
		url: 'https://backend.getlinked.ai/hackathon/registration',
		method: 'post',
		headers: {
			Accept: 'application/json',
		},
		data: {
			email: registerEmail,
			phone_number: registerPhone,
			team_name: registerTeamName,
			group_size: registerGroup,
			project_topic: registerProject,
			category: registerCategory,
			privacy_poclicy_accepted: registerCheck,
		},
	})
	.then((response) => {
		registerSuccess.classList.remove('display')
		console.log(response);
	})
	.catch((error) => {
		console.log(error);
		alert(`${error.message}, Try again please!`);
	})
}
