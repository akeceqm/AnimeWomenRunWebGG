const dino = document.getElementById("dino");
const kaktus = document.getElementById("kaktus");
const counts = document.getElementById("count"); 
const buttonClick = document.getElementById("buttoClick");

let count = 0;

buttonClick.addEventListener('click',()=>{
    count++;
    counts.innerHTML=count;
    jump()
})
function jump (){
  if (dino.classList!="jump"){
    dino.classList.add("jump")
  }
  setTimeout(function(){
    dino.classList.remove("jump")

  },300)
}

function reset(){
    count=0;
    counts.innerHTML=count;
}

let isAlive = setInterval(function(){
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  let kaktusLeft = parseInt(window.getComputedStyle(kaktus).getPropertyValue("left"));

  if (kaktusLeft<50 && kaktusLeft>0 && dinoTop>=140){
    alert("Game Over!");
    reset();
  }
},10)
