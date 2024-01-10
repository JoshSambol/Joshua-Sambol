import confetti from 'https://cdn.skypack.dev/canvas-confetti';

const btn = document.querySelector('.ok');
const container = document.querySelector('.container');
const enter = document.querySelector('.enter');
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

enter.addEventListener('click', ()=>{
  console.log("here")
  var a = document.querySelector('.ps');
  var ps = a.value
  if (ps == "Q!W@E#R$"){
    window.alert("You're in!")
  }
  else{
    window.alert("Incorrect passcode.")
  }
});