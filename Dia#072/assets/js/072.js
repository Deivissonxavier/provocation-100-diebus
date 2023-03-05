// Criando as tags HTML
var frame = document.createElement('div')
frame.className = 'frame'

var center = document.createElement('div')
center.className = 'center'
frame.appendChild(center)

for(var i = 1; i <= 10; i++){
    var div = document.createElement('div')
    div.className = 'ring ring-' + i
    center.appendChild(div)
}

document.body.appendChild(frame)

// Animando os elementos
var css = ''
for(var i = 1; i <= 10; i++){
    css += '.ring-' + i + ' {'
    css += 'animation: rotate-' + i + ' 5s ease-in-out infinite;'
    css += '}'
}

var style = document.createElement('style')
style.innerHTML = css
document.head.appendChild(style)

var keyframes = ''
for(var i = 1; i <= 10; i++){
    var start = i * 4
    keyframes += '@keyframes rotate-' + i + ' {'
    keyframes += start + '% {'
    keyframes += 'transform: rotateX(0) rotateY(0) rotateZ(0);'
    keyframes += '}'
    keyframes += '100% {'
    keyframes += 'transform: rotateX(360deg) rotateY(-360deg) rotateZ(0);'
    keyframes += '}'
    keyframes += '}'
}

var keyframesStyle = document.createElement('style')
keyframesStyle.innerHTML = keyframes
document.head.appendChild(keyframesStyle)
