const frame = document.createElement('div')
frame.classList.add('frame')

for(let i = 0; i < 16; i++){
    const ball = document.createElement('div')
    ball.classList.add(`ball`, `ball-${i}`)
    frame.appendChild(ball)
}

document.body.appendChild(frame)
