//Criação dos circulos

const center = document.querySelector('.center')

for(let i = 1; i <= 25; i++){
  const circle = document.createElement('div')
  circle.className = `circle circle-${i}`
  center.appendChild(circle)
}

///Animação

const circles = document.querySelectorAll('.circle')
const animationDelay = 0.5

circles.forEach((circle, index) => {
  circle.style.animation = `closer 10s -${index * animationDelay}s ease-out infinite`
})