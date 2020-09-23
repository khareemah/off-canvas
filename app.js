const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
const navOverlay = document.querySelector(".nav-overlay");
const close = document.querySelector(".close");

navToggle.addEventListener("click", function() {
  openNav();
});
function openNav() {
  nav.classList.add("open");
  navOverlay.classList.add("open");
  nav.style.transition = "all 0.3s ease 0.5s";
}
close.addEventListener("click", function() {
  closeNav();
});
function closeNav() {
  nav.classList.remove("open");
  navOverlay.classList.remove("open");
  navOverlay.style.transition = "all 0.5s ease 0.3s";
}
navOverlay.addEventListener("click", function(e) {
  closeNav();
});
