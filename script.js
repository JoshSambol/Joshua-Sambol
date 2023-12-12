import confetti from 'https://cdn.skypack.dev/canvas-confetti';

const button = document.getElementById('button');

function makeConfetti(){
  confetti();
}

button.addEventListener("click", makeConfetti)

