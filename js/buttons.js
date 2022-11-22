// SCROLL UP ARROW
const buttonUp = document.getElementById("button-up");
buttonUp.addEventListener("click", scrollUp);

function scrollUp() {
  let currentScroll = document.documentElement.scrollTop;

  if (currentScroll > 0) {
    window.scrollTo(0, 0);
  }
}

window.onscroll = function () {
  var scroll = document.documentElement.scrollTop;

  if (scroll > 100) {
    buttonUp.style.transform = "scale(1)";
  } else if (scroll < 100) {
    buttonUp.style.transform = "scale(0)";
  }
};
