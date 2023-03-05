////criação das tags HTML
const frame = document.createElement('div')
frame.classList.add('frame')

const wave = document.createElement('div')
wave.classList.add('wave')

frame.appendChild(wave)

for(let i = 0; i <= 200; i++){
  const dot = document.createElement('div')
  dot.classList.add(`dot`, `dot-${i}`)
  wave.appendChild(dot)
}

document.body.appendChild(frame)

//adicionando animações

const numberOfDots = 200;

for(let i = 1; i <= numberOfDots; i++){
  const dot = document.createElement('style')
  const offset = i < 100 ? 0 + (i * i/70) : 0 + ((200 - i) * (200 - i) / 70)

  dot.innerHTML = `
    .dot-${i}{
      animation: move-${i} 3s ease-in-out infinite;
    }

    @keyframes move-${i}{
      0%, 100%{
        transform: translateY(${offset * -1}px);
      }
      50%{
        transform: translateY(${offset}px)
      }
    }
  `
  document.head.appendChild(dot)
}