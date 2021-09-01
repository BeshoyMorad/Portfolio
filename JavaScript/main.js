//Headers Functions
let menuIcon = document.querySelector(`header nav .icon i`);
let menuUL = document.querySelector(`header nav ul`);

document.addEventListener(`click`, (e) => {
  console.log()
  if (e.target === menuIcon) {
    menuUL.classList.toggle(`active`);
  } else if (e.target !== menuUL && e.target.tagName !== `LI`) {
    if (menuUL.classList.contains(`active`)) {
      menuUL.classList.remove(`active`);
    }
  }
})

