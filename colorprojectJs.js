let colors=["green","red","f15025","blue","green"];
let color=document.querySelector('.color');
let btn=document.getElementById('but');

btn.addEventListener("click", function(){
  let randomNumber=myfun();
  console.log(randomNumber);
  document.body.style.background=colors[randomNumber];
  color.textContent=colors[randomNumber];
})
let myfun=()=>{
  return Math.floor(Math.random()* colors.length);
}

