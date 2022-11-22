//MENU SCROLL
window.addEventListener("scroll", function () {
  let nav = document.getElementById("menu");

  nav.classList.toggle("scrolldown", window.scrollY > 0);
});
