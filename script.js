import confetti from 'https://cdn.skypack.dev/canvas-confetti';

const button = document.getElementById('confetti');

function makeConfetti(){
  confetti();
  confetti();
  confetti();
}

button.addEventListener("click", makeConfetti)

