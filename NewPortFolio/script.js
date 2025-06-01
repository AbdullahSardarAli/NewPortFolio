// Hamburger toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Typing animation — only "Frontend Developer" loops
const staticText = "I am ";
const loopText = "Frontend Developer";
let i = 0;
let forward = true;
const typingSpan = document.getElementById("typing");

function typeLoop() {
  if (forward) {
    i++;
    if (i > loopText.length) forward = false;
  } else {
    i--;
    if (i < 0) forward = true;
  }

  typingSpan.textContent = loopText.substring(0, i);
  setTimeout(typeLoop, 150);
}

typingSpan.textContent = "";
typeLoop();
