// NAVMENU DISPLAY
const navMenuBar = document.querySelector('.nav-center-menu-bar');
const navMenuBarLines = document.querySelector('.line');
const mobileNavlinks = document.querySelector('.mobile-navlinks');

navMenuBar.addEventListener('click', () => {
	navMenuBar.classList.toggle('change');
	mobileNavlinks.classList.toggle('change');
});

// FAQ ACCORDION
const openIcon = document.querySelectorAll('.faq-lists .fa-plus');
const closeIcon = document.querySelectorAll('.faq-lists .fa-minus');

// Open Accordion
openIcon.forEach((icon) => {
	icon.addEventListener('click', (e) => {
		e.target.classList.add('display');
		e.target.nextElementSibling.classList.remove('display');
		e.target.parentElement.nextElementSibling.classList.remove('display');
	});
});

// Close Accordion
closeIcon.forEach((icon) => {
	icon.addEventListener('click', (e) => {
		e.target.classList.add('display');
		e.target.previousElementSibling.classList.remove('display');
		e.target.parentElement.nextElementSibling.classList.add('display');
	});
});

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

// CONTACT FORM SUBMIT
const contactForm = document.querySelector('#contact-form')

const contactName = document.querySelector('.contact-form-content_input #name').value;
const contactNumber = document.querySelector('.contact-form-content_input #number').value;
const contactEmail = document.querySelector('.contact-form-content_input #email').value;
const contactMessage = document.querySelector('.contact-form-content_input #message').value;


contactForm.addEventListener('submit', (e) => {
	e.preventDefault()

	sendContact()
	contactForm.reset()
})


// Function to send contact details
function sendContact () {
	try {
		axios({
			url: 'https://backend.getlinked.ai//hackathon/contact-form',
			method: 'post',
			headers: {
				Accept: 'application/json',
			},
			data: {
				email: contactEmail,
				phone_number: contactNumber,
				first_name: contactName,
				message: contactMessage,
			},
		}).then((response) => {
			if (response.status === 201) {
				alert('Your details has been successfully sent!');
			}
		});
	} catch (error) {
		alert('OOPS! SOMETHING WENT WRONG')
	}
}


// REGISTER FORM SUBMIT
const registerForm = document.querySelector('#register-form')

registerForm.addEventListener('submit', (e) => {
	e.preventDefault()

	sendregistration()
	registerForm.reset()
})

const registerFirstName = document.querySelector('.input-box #name')
const registerPhone = document.querySelector('.input-box #phone')
const registerEmail = document.querySelector('.input-box #email')
const registerProject = document.querySelector('.input-box #project-topic')
const registerCategory = document.querySelector('.input-box #category')
const registerGroup = document.querySelector('.input-box #group')
const registerCheck = document.querySelector('.register-check-input #check')


// Function to submit register form
function sendregistration() {
	let firstName = registerFirstName.value
	let phoneNumber = registerPhone.value
	let userEmail = registerEmail.value
	let projectTopic = registerProject.value
	let categoryValue = registerCategory.value
	let groupValue = registerGroup.value
	let checkAccept = registerCheck.checked

	try {
		axios ({
			url: 'https://backend.getlinked.ai/hackathon/registration',
			method: 'post',
			headers: {
				Accept: 'application/json',
			},
			data : {
				email: userEmail,
				phone_number: phoneNumber,
				team_name: firstName,
				group_size: groupValue,
				project_topic: projectTopic,
				category: categoryValue,
				privacy_poclicy_accepted: checkAccept
			},
		})
		.then((response) => {
			if (response.status === 201) {
				registerSuccess.classList.remove('display')
			}
		})
	} catch (error) {
		alert('OOPS! SOMETHING WENT WRONG')
	}
}
