for (var i = 1; i < 20; i++) {
	document.getElementById(i).style.animationDuration = (60/(60 - i))*1000 + "ms"
}