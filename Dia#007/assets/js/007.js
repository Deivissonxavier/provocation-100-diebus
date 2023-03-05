const searchbar = document.getElementsByTagName('input')[0];
const search = document.querySelector(".fa-search");
const main = document.querySelector(".main");
const side = document.querySelector(".side");
const sidebar = document.querySelector(".sidebar");
search.addEventListener("click", searchbardisplay);
side.addEventListener("click", sidemove);
function searchbardisplay(){
	searchbar.classList.toggle("searchbardisplay");
}
function sidemove(){
	main.classList.toggle("sidemove");
	sidebar.classList.toggle("sidemover");
}