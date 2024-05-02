const clock=document.getElementById("clock")
// const clock=document.querySelector("#clock")


//setInterval(function(){},ms) 1000ms  = 1s
setInterval(function(){
  const date=new Date()
  clock.innerHTML=date.toLocaleTimeString()
},1000)