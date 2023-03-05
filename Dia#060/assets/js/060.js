const point = document.querySelector('span')
const sec = document.querySelector('section')

sec.addEventListener('mousemove', (e) => {
    point.style.height = e.pageY + 'px'
})

sec.addEventListener('mouseout', (e) => {
    point.style.height = '200px'
})