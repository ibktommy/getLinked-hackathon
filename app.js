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

// REGISTER FORM SUBMIT
const registerForm = document.querySelector('.register-content');

console.log(registerForm);

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
