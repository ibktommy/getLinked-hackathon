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

const registerFirstName = document.querySelector('.input-box #name');
const registerPhone = document.querySelector('.input-box #phone');
const registerEmail = document.querySelector('.input-box #email');
const registerProject = document.querySelector('.input-box #project-topic');
const registerCategory = document.querySelector('.input-box #category');
const registerGroup = document.querySelector('.input-box #group');
const registerCheck = document.querySelector('.register-check-input #check');

// Function to submit register form
function sendregistration() {
	let firstName = registerFirstName.value;
	let phoneNumber = registerPhone.value;
	let userEmail = registerEmail.value;
	let projectTopic = registerProject.value;
	let categoryValue = registerCategory.value;
	let groupValue = registerGroup.value;
	let checkAccept = registerCheck.checked;

	try {
		axios({
			url: 'https://backend.getlinked.ai/hackathon/registration',
			method: 'post',
			headers: {
				Accept: 'application/json',
			},
			data: {
				email: userEmail,
				phone_number: phoneNumber,
				team_name: firstName,
				group_size: groupValue,
				project_topic: projectTopic,
				category: categoryValue,
				privacy_poclicy_accepted: checkAccept,
			},
		}).then((response) => {
			if (response.status === 201) {
				registerSuccess.classList.remove('display');
			}
		});
	} catch (error) {
		alert('OOPS! SOMETHING WENT WRONG');
	}
}
