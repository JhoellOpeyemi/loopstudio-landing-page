const body = document.querySelector('body');
const header = document.querySelector('header');
const mobileNav = document.querySelector('.nav-links');
const hamburger = document.querySelector('.hamburger');
const hamburgerImg = document.querySelector('.hamburger img');

hamburger.addEventListener('click', openNav);

function openNav() {
	mobileNav.classList.toggle('open');
	header.classList.toggle('open');
	body.classList.toggle('noscroll');
	hamburger.classList.toggle('open');

	// Change Image src on click
	if (hamburgerImg.getAttribute('src') === './images/icon-hamburger.svg') {
		hamburgerImg.src = './images/icon-close.svg';
	} else {
		hamburgerImg.src = './images/icon-hamburger.svg';
	}
}
