/* Declaring variables */
const iconXmark = document.querySelector(".icon-xmark");
const iconMenu = document.querySelector(".icon-menu");
const navLinks = document.querySelector(".nav-links");
const divStars = document.getElementsByClassName("stars");

/* Mockup data from backend */
const userData = [
  { firstName: "Christine", lastName: "Berkley", rate: 3.8 },
  { firstName: "David", lastName: "Byer", rate: 4.7 },
  { firstName: "John", lastName: "Doe", rate: 4.9 },
];

userData.forEach((user) => {
  user.roundedRate = roundAdvanced(user.rate, 0.5);
});

function showMenu() {
  iconMenu.style.top = "-5px";
  navLinks.style.right = "0";
}

function hideMenu() {
  navLinks.style.right = "-200px";
  iconMenu.style.top = "5px";
}

function roundAdvanced(value, range) {
  let result = Math.round(value / range) * range;
  return result;
}

function showStars() {
  const fullStar = `<i class="fa-solid fa-star" style="color: rgb(218, 44, 44);"></i>`;
  const emptyStar = `<i class="fa-regular fa-star" style="color: rgb(218, 44, 44);"></i>`;
  const halfStar = `<i class="fa-solid fa-star-half-stroke" style="color: rgb(218, 44, 44);"></i>`;
  for (let i = 0; i < divStars.length; i++) {
    let score = userData[i].roundedRate;
    for (let j = 0; j < 5; j++) {
      if (score >= 1) {
        divStars[i].innerHTML += fullStar;
        score--;
        continue;
      } else if (score > 0 && score < 1) {
        divStars[i].innerHTML += halfStar;
        continue;
      }
      divStars[i].innerHTML += emptyStar;
    }
  }
}

/* Event Listeners */
iconXmark.addEventListener("click", hideMenu);
iconMenu.addEventListener("click", showMenu);

showStars();






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