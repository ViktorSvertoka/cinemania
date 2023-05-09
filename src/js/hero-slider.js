// слайдер
const slides = document.querySelectorAll('.slider-card');
const navBtns = document.querySelectorAll('.slider-nav-btn');
const sliderNav = document.querySelector('.slider-nav');
let currentSlide = 0;
let currentButton = 0;

function showSlide(slideIndex, length, navBtns, slides, currentButton) {

  if (slideIndex < 0 || slideIndex >= length) {
    return;
  }

  slides[currentSlide].classList.remove('active');
  slides[slideIndex].classList.add('active');

  //   navBtns[currentSlide].classList.remove('active');
  navBtns[slideIndex][currentButton].classList.add('active');

  currentSlide = slideIndex;
  addSlideListener(navBtns, slides, currentSlide, currentButton);
}

// При загрузке страницы добавляем класс active к первому слайду
// slides[0].classList.add('active');
function addSlideListener(
  navBtns,
  slides,
  currentSlide,
  currentButton,
  navBtnsLeft,
  navBtnsRight
) {
  for (let i = 0; i < 5; i += 1) {
    navBtns[currentSlide][i].addEventListener('click', function (evt) {
    //   navBtnsLeft[i].addEventListener('click', onNavButtonLeft);
    //   navBtnsRight[i].addEventListener('click', onNavButtonRight);

      navBtns[currentSlide][currentButton].classList.remove('active');
      showSlide(
        evt.target.dataset.slide - 1,
        5,
        navBtns,
        slides,
        evt.target.dataset.slide - 1
      );
    });
  }
}

function onNavButtonLeft(params) {
  currentSlide -= 1;
  currentButton -= 1;
  showSlide(currentSlide, 5, navBtns, slides, currentButton);
}

function onNavButtonRight(params) {
  currentSlide += 1;
  currentButton += 1;
  showSlide(currentSlide, 5, navBtns, slides, currentButton);
}

export { showSlide, addSlideListener, onNavButtonLeft, onNavButtonRight };
