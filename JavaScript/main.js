//Headers Functions
let menuIcon = document.querySelector(`header nav .icon`);
let menuUL = document.querySelector(`header nav ul`);

document.addEventListener(`click`, (e) => {
  if (e.target === menuIcon || (e.target.tagName === `SPAN` && e.target.id === ``)) {
    menuUL.classList.toggle(`active`);
  } else if (e.target !== menuUL && e.target.tagName !== `LI`) {
    if (menuUL.classList.contains(`active`)) {
      menuUL.classList.remove(`active`);
    }
  }
})

let ageSpan = document.getElementById(`age`);
let todayDate = new Date();
ageSpan.innerText = todayDate.getFullYear() - 2002;