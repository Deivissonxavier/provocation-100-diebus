const background = document.getElementById('background');
const info = document.getElementById('info');
const closeButton = document.getElementById('closeButton');
const profile = document.getElementById('profile');

closeButton.addEventListener('click', () => {
	background.classList.remove('active');
	info.classList.remove('active');
	closeButton.classList.remove('active');
	profile.classList.remove('active');
})

const names = [
	"Yoselin Ward",
	"Isai Foster",
	"Lindsey Andersen",
	"Roderick Tanner"
];

for (let i = 1; i <= 4; i++) {
	const galleryItem = document.getElementById(`item-${i}`);
	const imageUrl = galleryItem.querySelector('.gallery__img').src;
	
	galleryItem.addEventListener('click', () => {
		background.classList.add('active');
		info.classList.add('active');
		closeButton.classList.add('active');
		profile.classList.add('active');
		
		profile.style.background = `url(${imageUrl}) no-repeat center`;
		profile.style.backgroundSize = "cover";
		
		info.querySelector('.name').textContent = names[i-1];
	})
}


