const searchElement = document.getElementById("searchBox");
const resultElement = document.getElementById("search-result-list");

searchElement.addEventListener("input", (e) => {
	const currentVal = e.target.value;
	if (currentVal.length) {
		resultElement.innerHTML = "";
		resultElement.classList.add("active");
		resultElement.innerHTML = `
		<li title="${currentVal}"><b>${currentVal}</b></li>
		<li title="Veritatis et ${currentVal}">Veritatis et <b>${currentVal}</b></li>
		<li title="ut aliquid ex ${currentVal} vero eos">ut aliquid ex <b>${currentVal}</b> vero eos</li>
	`;
	} else {
		resultElement.innerHTML = "";
		resultElement.classList.remove("active");
	}
});
