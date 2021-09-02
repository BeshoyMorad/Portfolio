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


//Projects Functions
let nextButton = document.querySelector(`.projects .projects-container .next`);
let prevButton = document.querySelector(`.projects .projects-container .prev`);
let projectItems = document.querySelector(`.projects .projects-container .project-items`).children;
let projectCount = projectItems.length;
let index = 0;

nextButton.onclick = function() {
  if (index < projectCount - 1) {
    index++;
  }else {
    index = 0;
  }
  slide();
}

prevButton.onclick = function() {
  if (index > 0) {
    index--;
  }else {
    index = projectCount - 1;
  }
  slide();
}

function slide() {
  for (var i = 0; i < projectCount; i++) {
    projectItems[i].classList.remove(`active`);
  };
  projectItems[index].classList.add(`active`);
}
