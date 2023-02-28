///Criando as tags span

const frameDiv = document.querySelector('.frame')

for(let i = 0; i < 49; i++){
    const span = document.createElement('span')
    frameDiv.appendChild(span)
}

///Adicionando as animações

const angles = [45, 145, 12, 36, 69, 79, 83, 26, 5, 17, 48, 67, 73, 12, 76, 29, 4, 73, 105, 129, 168, 137, 32, 99, 128, 10, 63, 71, 169, 173, 32, 83, 92, 140, 118, 162, 73, 16, 40, 75, 153, 82, 16, 136, 18, 30, 148, 62, 73]
  
const spans = document.querySelectorAll('span')
  
spans.forEach((span, index) => {
    span.style.setProperty('--angle', angles[index] + 'deg')
    span.style.animationDelay = -(index / 10) + 's'
})
  
