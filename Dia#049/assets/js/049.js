let center=document.getElementsByClassName("frame")[0]
let cursor=document.getElementsByClassName("circle")[0]

center.addEventListener("mousemove", (e)=>{
    console.log(cursor)
    cursor.style.left=e.pageX + 'px'
    cursor.style.top=e.pageY + 'px'
})

center.addEventListener("mouseout", (e)=>{
    console.log(e)
    cursor.style.left="50%"
    cursor.style.top="50%"
})