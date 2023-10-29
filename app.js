const iconXmark = document.querySelector(".icon-xmark");
const iconMenu = document.querySelector(".icon-menu");
const navLinks = document.querySelector(".nav-links");

function showMenu() {
  iconMenu.style.top = "-5px";
  navLinks.style.right = "0";
}

function hideMenu() {
  navLinks.style.right = "-200px";
  iconMenu.style.top = "5px";
}

iconXmark.addEventListener("click", hideMenu);
iconMenu.addEventListener("click", showMenu);
