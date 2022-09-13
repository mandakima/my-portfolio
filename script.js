let hamburger = document.querySelector(".hamburger");
let mobile_menu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", function () {
  mobile_menu.classList.toggle("active");
});
