const frame = document.createElement('div')
frame.classList.add('frame')

const horizontal = document.createElement('div')
horizontal.classList.add('horizontal')

for(let i = 0; i < 100; i++){
    var stripe = document.createElement('div')
    stripe.classList.add(`stripe`, `stripe-${i}`)
    horizontal.appendChild(stripe)
}

const vertical = document.createElement('div')
vertical.classList.add('vertical')

for(let i = 0; i < 100; i++){
    var stripe = document.createElement('div')
    stripe.classList.add(`stripe`, `stripe-${i}`)
    vertical.appendChild(stripe)
}
frame.appendChild(horizontal)
frame.appendChild(vertical)
document.body.appendChild(frame)