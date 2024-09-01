
const homeButton = document.querySelector('.homeButton')
const projectButton = document.querySelector('.projectButton')

const home = document.querySelector('.home')
const projects = document.querySelector('.projects')

const scroll = document.querySelectorAll('.scroll');

const circle = document.createElement('div');
circle.classList.add('cursor-circle');
document.body.appendChild(circle);

document.addEventListener('mousemove', (e) => {
    circle.style.left = `${e.clientX}px`;
    circle.style.top = `${e.clientY}px`;
});

function checkVisibility() {
  const windowHeight = window.innerHeight;
  scroll.forEach(element => {
    const rect = element.getBoundingClientRect();
    if (rect.top < windowHeight && rect.bottom >= 0) {
      element.classList.add('visible');
    } else {
      element.classList.remove('visible');
    }
  });
}

window.addEventListener('scroll', checkVisibility);
checkVisibility(); // Check visibility on page load

homeButton.addEventListener('click', ()=>{
  projects.style.display = 'none'
  home.style.display = 'flex'
})

projectButton.addEventListener('click', ()=>{
  home.style.display = 'none'
  projects.style.display = 'flex'
})

document.getElementById('dark-mode-toggle').addEventListener('click', ()=>{
  document.body.classList.toggle('dark-mode')
})

