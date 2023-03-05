const parasolTop = document.querySelector('.top')
const triangle = document.querySelector('.triangle')
const shadowTop = document.querySelector('.shadowTop')

for(let i = 1; i <= 12; i++){
    const triangleId = document.createElement('div')
    triangleId.style.position = 'absolute'
    triangleId.style.top = '100px'
    triangleId.style.left = '77px'
    triangleId.style.width = '0'
    triangleId.style.height = '0'
    triangleId.style.borderRadius = 'solid'
    triangleId.style.borderWidth = '0 24px 98px 24px'
    triangleId.style.transformOrigin = '50% 0'
    triangleId.style.transform = 'rotateZ('+ 30 * (i-1) + 'deg) rotateX(-24deg)'

    if(i %2 === 1){
        triangleId.style.borderColor = 'transparent transparent #D70606 transparent'
    }else{
        triangleId.style.borderColor = 'transparent transparent #fff transparent'
    }
    parasolTop.appendChild(triangleId)
    triangleId.classList.add('triangle')
}

for(let i = 1; i <= 12; i++){
    const triangleId = document.createElement('div')
    triangleId.style.position = 'absolute'
    triangleId.style.top = '100px'
    triangleId.style.left = '77px'
    triangleId.style.width = '0'
    triangleId.style.height = '0'
    triangleId.style.borderRadius = 'solid'
    triangleId.style.borderWidth = '0 24px 98px 24px'
    triangleId.style.transformOrigin = '50% 0'
    triangleId.style.transform = 'rotateZ(' + 30 * (i-1) + 'deg) rotateX(-24deg)'
    triangleId.style.background = "#AB9038"
    shadowTop.appendChild(triangleId)
    triangleId.classList.add('triangle')
}


