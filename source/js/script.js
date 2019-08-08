var toggle = document.querySelector(".page-header__toggle");
var nav = document.querySelector(".main-nav");

toggle.classList.remove("page-header__toggle--no-js");
nav.classList.remove("main-nav--no-js");

toggle.addEventListener("click", function() {
  nav.classList.toggle("main-nav--show");
  toggle.classList.toggle("page-header__toggle--show")
})
