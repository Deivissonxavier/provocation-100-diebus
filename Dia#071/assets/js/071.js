///Criação das tags html
const keys = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', null, null, null, null, '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

const display = document.querySelector('.display')

keys.forEach((key) => {
    const button = document.createElement('button')
    button.classList.add('key')

    if(key === null){
        button.classList.add('no')
    } else{
        button.textContent = key
    }
    display.appendChild(button)
})

display.appendChild(document.createElement('div')).classList.add('circle')

