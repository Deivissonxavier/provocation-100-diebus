const frame = document.createElement('div')
frame.classList.add('frame')

const cradle = document.createElement('div')
cradle.classList.add('cradle')

frame.appendChild(cradle)

for(let i = 1; i <= 5; i++){
    const ball = document.createElement('div')
    ball.classList.add(`ball`, `ball-${i}`)
    cradle.appendChild(ball)
}

document.body.appendChild(frame)