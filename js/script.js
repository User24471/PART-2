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
