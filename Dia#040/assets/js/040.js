var images = document.getElementsByClassName('image');
var clicked = false;
for(let i = 0;i<images.length;i++){
	images[i].addEventListener("click",()=>{
		if(clicked == false){
			images[i].style.transform = "scale(3.1)"
			images[i].style.zIndex = "3"
			clicked = true

		}else{
			images[i].style.transform = "scale(1)"
			images[i].style.zIndex = "1"
			clicked = false
		}

	})
}

