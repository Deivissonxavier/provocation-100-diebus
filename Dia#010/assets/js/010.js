function random(a,b){
	return Math.floor(Math.random()*(b-a+1)+a)
}

let str='week,month,day,year,hour,minute,sec,beat,energy'
let dom=str.split(",").reduce((pre,v)=>{
	pre[v]=document.querySelector(`.${v}`)
	return pre
},{});
function Render(){
	let date=String(new Date()).split(" ");
	date[4]=date[4].split(":");
	
	dom.week.textContent=date[0];
	dom.month.textContent=date[2];
	dom.day.textContent=date[1];
	dom.year.textContent=date[3];
	dom.hour.textContent=date[4][0];
	dom.minute.textContent=date[4][1];
	dom.sec.textContent=date[4][2];
	dom.beat.textContent=random(120,80);
	dom.energy.textContent=random(1200,1100)+" kcal";
} ;
 Render();
setInterval(()=>{
 Render();
},1000)
const colors = ['violet', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; 

const span =document.querySelectorAll('span');

for(let i=0;i<span.length;i++){

    span[i].style.color=colors[i];}
