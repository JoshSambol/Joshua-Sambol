
    function loadContent(page) {
        content.style.opacity = 0;
        setTimeout(() => {
            content.innerHTML = page;
            content.style.opacity = 1;
        }, 300);
    }

    // Event listeners for buttons
    homeBtn.addEventListener('click', () => loadContent(homeContent));
    projectsBtn.addEventListener('click', () => loadContent(projectsContent));

    // Dark mode toggle
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // Load home content initially
    loadContent(homeContent);
});






/*import confetti from 'https://cdn.skypack.dev/canvas-confetti';

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
});*/



document.addEventListener('DOMContentLoaded', () => {
    const homeBtn = document.getElementById('home-btn');
    const projectsBtn = document.getElementById('projects-btn');
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const content = document.getElementById('content');

    // Content for Home and Projects pages
    const homeContent = `
        <h1>Welcome to My Website</h1>
        <p>This is the home page. Feel free to explore!</p>
    `;

    const projectsContent = `
        <h1>My Projects</h1>
        <ul>
            <li>Project 1: Description</li>
            <li>Project 2: Description</li>
            <li>Project 3: Description</li>
        </ul>
    `;

