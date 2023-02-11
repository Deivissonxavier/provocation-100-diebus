const section = document.querySelector("section")

for(let i = 0; i < 18; i++){
  const span = document.createElement("span")
  span.style.setProperty("--i", i)
  section.appendChild(span)
}

const stylesSheet = document.createElement("style")
document.head.appendChild(stylesSheet)


for(let i = 1; i <= 18; i++){
  stylesSheet.sheet.insertRule(
    `span:nth-child(${i}) { animation: rotate${i} 5s ease-in-out infinite; }`,
    i - 1
  )
}

//animação

const keyframes = []

for(let i = 0; i < 18; i++){
  keyframes.push(`
    @keyframes rotate${i + 1} {
      0% {
        transform: rotate(${10 * i}deg);
        border-radius: 50%;
      }
      50% {
        transform: rotate(0) scaleX(3.3);
        border-radius: 0%;
      }
      100% {
        transform: rotate(${360 - 10 * i}deg);
        border-radius: 50%;
      }
    }
  `)
}

const keyframesStyles = document.createElement('style')
keyframesStyles.innerHTML = keyframes.join('')
document.head.appendChild(keyframesStyles)
