// CONTACT FORM SUBMIT
const contactForm = document.querySelector('#contact-form');

const contactName = document.querySelector(
	'.contact-form-content_input #name',
).value;
const contactNumber = document.querySelector(
	'.contact-form-content_input #number',
).value;
const contactEmail = document.querySelector(
	'.contact-form-content_input #email',
).value;
const contactMessage = document.querySelector(
	'.contact-form-content_input #message',
).value;

contactForm.addEventListener('submit', (e) => {
	e.preventDefault();

	sendContact();
	contactForm.reset();
});

// Function to send contact details
function sendContact() {
	try {
		axios({
			url: 'https://backend.getlinked.ai/hackathon/contact-form',
			method: 'post',
			headers: {
				Accept: 'application/json',
			},
			data: {
				"email": contactEmail,
				"first_name": contactName,
				"message": contactMessage,
			},
		}).then((response) => {
			if (response.status === 201) {
				alert('Your details has been successfully sent!');
			}
		});
	} catch (error) {
		alert('OOPS! SOMETHING WENT WRONG');
	}
}
