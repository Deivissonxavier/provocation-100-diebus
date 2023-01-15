let nav = document.querySelector('nav.nav');
let divs = nav.querySelectorAll('nav.nav > div');
let timeout;

nav.addEventListener('click', openNav);

function openNav() {
	let max = document.querySelector('.max');
	if (nav !== max) {
		nav.classList.add('max');
	}
}