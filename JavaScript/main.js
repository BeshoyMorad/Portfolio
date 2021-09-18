//Headers Functions
let menuIcon = document.querySelector(`header nav .icon`);
let menuUL = document.querySelector(`header nav ul`);
let menuSpans = document.querySelectorAll(`header nav .icon span`);

document.addEventListener(`click`, (e) => {
  if (e.target === menuIcon || e.target === menuSpans[0] || 
    e.target === menuSpans[1] || e.target === menuSpans[2]) {
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



//Scroll to top button
let toTopBtn = document.getElementById(`to-top-btn`);

toTopBtn.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

window.addEventListener(`scroll`, function() {
  this.scrollY >= 550? toTopBtn.classList.add(`show`) : toTopBtn.classList.remove(`show`);
});



//Progress Bar Function
let skills = document.getElementById(`skills`);
let progressBar = document.querySelectorAll(`.prog-holder .progress span`);

window.addEventListener(`scroll`, function() {
  if (this.scrollY > (skills.offsetTop / 2)) {
    progressBar.forEach(progBar => {
      progBar.style.width = progBar.dataset.progress;
      progBar.classList.add(`animate`);
    })
  }
});