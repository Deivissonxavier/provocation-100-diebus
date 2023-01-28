const frame = document.querySelector('.frame')

for(let i = 0; i < 15; i++){
    const ring = document.createElement('div');
    ring.style.width = i*20 + 'px'
    ring.style.height = i*20 + 'px'
    ring.style.position = 'absolute'
    ring.style.borderRadius = '50%'
    ring.style.borderStyle = 'dotted'
    ring.style.borderWidth = '8px'
    ring.style.borderColor = 'aqua'
    ring.style.top = ((400-i*20)/2) + 'px'
    ring.style.left = ((400-i*20)/2) + 'px'
    ring.style.transformOrigin = '50% 50%'
    ring.style.animationName = 'pulse'
    ring.style.animationDuration = i/2 + 's'
    ring.style.animationTimingFunction = 'ease-in-out'
    ring.style.animationIterationCount = 'infinite'
    ring.style.animationDirection = 'alternate'
    frame.appendChild(ring)
}