// CONTACT FORM SUBMIT
const contactForm = document.querySelector('#contact-form');

// contactForm Submit Event
contactForm.addEventListener('submit', (e) => {
	e.preventDefault();

	sendContact();
	contactForm.reset();
});

// Function to send contact details
async function sendContact() {
	// Input Variable's value
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

	// Send data to contact-form-api
	await axios({
		url: 'https://backend.getlinked.ai/hackathon/contact-form',
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
	})
	.then((response) => {
		alert('YOU DETAILS HAVE BEEN SUCCESSFULLY SENT!')
		console.log(response);
	})
	.catch((error) => {
		console.log(error.message);
		alert(`${error.message}, Try again please!`);
	})
}
