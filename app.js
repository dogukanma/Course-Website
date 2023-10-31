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

/***************** This part adds a click me text on top right corner of the images in layer section. ****************/
// const layer = document.getElementsByClassName("layer");
// function addClickMe(){
//   const clickMe = document.createElement("h5");
//   clickMe.classList.add("click-me");
//   clickMe.style.color = "black";
//   clickMe.style.position = "absolute";
//   clickMe.style.right = "8px";
//   clickMe.style.top = "5px";
//   clickMe.style.color = "rgb(35, 35, 35)";
//   clickMe.innerHTML = "Click me!";
//   return clickMe;
// }
// if (window.innerWidth <= 700) {
//   for (let i = 0; i < layer.length; i++) {
//     const clickMe = addClickMe();
//     layer[i].appendChild(clickMe);
//   }
// }