let colors=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

let btn=document.getElementById('but');
let color=document.querySelector('.color');

btn.addEventListener("click",function(){
    console.log(ranFun()    );
    let has="#";
  for(let i=0;i<6;i++)
  {
    has+=colors[ranFun()];
  }
  document.body.style.background=has;
  color.textContent=has;
})

let ranFun=()=>{
    return (Math.floor(Math.random()*colors.length));
}