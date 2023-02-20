//Criação das tags HTML

const frameDiv = document.createElement('div')
frameDiv.classList.add('frame')
document.body.appendChild(frameDiv)

const centerDiv = document.createElement('div')
centerDiv.classList.add('center')
frameDiv.appendChild(centerDiv)

const ballDiv = document.createElement('div')
ballDiv.classList.add('ball-big')
centerDiv.appendChild(ballDiv)

for(let i = 1; i <= 6; i++){
    const planeDiv = document.createElement('div')
    planeDiv.classList.add(`plane-${i}`)
    planeDiv.classList.add('plane')
    ballDiv.appendChild(planeDiv)
}
  
// Criação das animações com CSS

for(let i = 1; i <= 6; i++){
    const nullBase = i - 1
    const degree = (180 / 6) * nullBase
    const planeClass = `.plane-${i}`
    const transformValue = `rotateX(${degree}deg)`
    const rule = `${planeClass} { transform: ${transformValue}; }`
    document.styleSheets[0].insertRule(rule, 0)
}