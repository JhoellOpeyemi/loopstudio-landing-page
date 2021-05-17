window.addEventListener('load', () => {
	const preLoader = document.querySelector('.pre-loader');
	preLoader.classList.add('pre-loader-finish');
	body.classList.remove('noscroll');
});

const body = document.querySelector('body');
const header = document.querySelector('header');
const navLinks = document.querySelector('.nav-links');
const hamburger = document.querySelector('.hamburger');
const hamburgerImg = document.querySelector('.hamburger img');

// Events Listeners
hamburger.addEventListener('click', openNav);

// Functions
function openNav() {
	navLinks.classList.toggle('open');
	body.classList.toggle('noscroll');
	hamburger.classList.toggle('open');

	// Change Image src on click
	if (hamburgerImg.getAttribute('src') === './images/icon-hamburger.svg') {
		hamburgerImg.src = './images/icon-close.svg';
	} else {
		hamburgerImg.src = './images/icon-hamburger.svg';
	}
}
