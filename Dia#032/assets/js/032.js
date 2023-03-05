const minus = document.querySelector('.minus')
const plus = document.querySelector('.plus')
const value = document.querySelector('.value')

minus.addEventListener('click', () => {
	const currentValue = value.textContent
	const newValue = +currentValue - 1
	value.textContent = newValue
})

plus.addEventListener('click',()=>{
	const currentValue = value.textContent
	const newValue = +currentValue +1
	value.textContent = newValue
})