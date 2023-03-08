let trigger_list_html = Array.from({length: 300}).reduce((p, c, index) => {
  return p + `<div class="trigger tigger-${index}" data-index=${index}></div>`
}, "")

let line_list_html = Array.from({length: 19}).reduce((p, c, index) => {
  return p + `<div class="line line-${index}"><div class="left"></div><div class="right"></div></div>`
}, "")

let html = `${trigger_list_html}<div id=lines>${line_list_html}</div>`
space.insertAdjacentHTML("afterend", html)

const rows = 19
const columns = 20
const base_cache = {}
const cache = new Proxy(base_cache, {
  get(target, key, reciver){
    if(!target[key]){
      target[key] = lines.querySelector(key) || { style: {}}
    }
    return target[key]
  }
})

frame.querySelectorAll('.trigger').forEach(trigger => {
	trigger.addEventListener('mouseenter', ({target}) => {
		const index = target.dataset.index
		const column = index % 20 + 1
		const row = ~~(index / 20)

		let scale = (column - 3) / 10
		cache[`.line-${row}>.left`].style.transform = `scaleX(${scale})`

		scale = (columns - (column + 2)) / 10
		cache[`.line-${row}>.right`].style.transform = `scaleX(${scale})`

		scale = (column - 2) / 10
		cache[`.line-${row - 1}>.left`].style.transform = `scaleX(${scale})`
		cache[`.line-${row + 1}>.left`].style.transform = `scaleX(${scale})`

		scale = (columns - (column + 1)) / 10
		cache[`.line-${row - 1}>.right`].style.transform = `scaleX(${scale})`
		cache[`.line-${row + 1}>.right`].style.transform = `scaleX(${scale})`

		scale = (column - 1) / 10
		cache[`.line-${row - 2}>.left`].style.transform = `scaleX(${scale})`
		cache[`.line-${row + 2}>.left`].style.transform = `scaleX(${scale})`

		scale = (columns - column) / 10
		cache[`.line-${row - 2}>.right`].style.transform = `scaleX(${scale})`
		cache[`.line-${row + 2}>.right`].style.transform = `scaleX(${scale})`
	})

	trigger.addEventListener('mouseleave', ({ target }) => {
		const column = target.dataset.index
		const row = ~~(column / 20)

		let scale = 0
		cache[`.line-${row}>.left`].style.transform = `scaleX(${scale})`
		cache[`.line-${row}>.right`].style.transform = `scaleX(${scale})`
		cache[`.line-${row - 1}>.left`].style.transform = `scaleX(${scale})`
		cache[`.line-${row + 1}>.left`].style.transform = `scaleX(${scale})`
		cache[`.line-${row - 1}>.right`].style.transform = `scaleX(${scale})`
		cache[`.line-${row + 1}>.right`].style.transform = `scaleX(${scale})`
		cache[`.line-${row - 2}>.left`].style.transform = `scaleX(${scale})`
		cache[`.line-${row + 2}>.left`].style.transform = `scaleX(${scale})`
		cache[`.line-${row - 2}>.right`].style.transform = `scaleX(${scale})`
		cache[`.line-${row + 2}>.right`].style.transform = `scaleX(${scale})`
	})
})