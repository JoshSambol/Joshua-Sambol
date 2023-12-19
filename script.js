import confetti from 'https://cdn.skypack.dev/canvas-confetti';

const btn = document.querySelector('.ok');
const container = document.querySelector('.container');
const inv = document.querySelector('.inv');

console.log(btn)
function makeConfetti(){
  confetti();
  confetti();
  confetti();
}

btn.addEventListener("click", ()=>{
  confetti();
  confetti();
  confetti();
  container.style.display="flex";
  inv.style.display="none";
  
})

