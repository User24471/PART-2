// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav");

  // Toggle navigation menu
  menuToggle.addEventListener("click", function() {
    nav.classList.toggle("active");
    // Toggle icon change
    this.classList.toggle("open");
  });
});

// === Responsive Navigation ===
const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// === Dark Mode Toggle ===
const darkModeBtn = document.createElement("button");
darkModeBtn.textContent = "🌙 Dark Mode";
darkModeBtn.style.position = "fixed";
darkModeBtn.style.bottom = "20px";
darkModeBtn.style.right = "20px";
darkModeBtn.style.padding = "10px 15px";
darkModeBtn.style.border = "none";
darkModeBtn.style.borderRadius = "8px";
darkModeBtn.style.background = "#2e7d32";
darkModeBtn.style.color = "white";
darkModeBtn.style.cursor = "pointer";
darkModeBtn.style.zIndex = "999";
document.body.appendChild(darkModeBtn);

darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  darkModeBtn.textContent = document.body.classList.contains("dark-mode")
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";
});

// === Floating Leaves Animation ===
const canvas = document.getElementById("leafCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const leaves = [];
for (let i = 0; i < 25; i++) {
  leaves.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 20 + 15,
    speed: Math.random() * 2 + 0.5,
    angle: Math.random() * 360,
  });
}

function drawLeaves() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  leaves.forEach((leaf) => {
    ctx.save();
    ctx.translate(leaf.x, leaf.y);
    ctx.rotate((leaf.angle * Math.PI) / 180);
    ctx.fillStyle = "rgba(34, 139, 34, 0.4)";
    ctx.beginPath();
    ctx.ellipse(0, 0, leaf.size / 2, leaf.size, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    leaf.y += leaf.speed;
    leaf.angle += 1;
    if (leaf.y > canvas.height) leaf.y = 0 - leaf.size;
  });
  requestAnimationFrame(drawLeaves);
}

drawLeaves();
