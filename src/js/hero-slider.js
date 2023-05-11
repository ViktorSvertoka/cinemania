// слайдер
const slides = document.querySelectorAll('.slider-card');
const navBtns = document.querySelectorAll('.slider-nav-btn');
const sliderNav = document.querySelector('.slider-nav');
let currentSlide = 0;

function showSlide(slideIndex, length, navBtns, slides) {
  if (slideIndex < 0 || slideIndex >= length) {
    return;
  }

  slides[currentSlide].classList.remove('active');
  slides[slideIndex].classList.add('active');

  navBtns[currentSlide].classList.remove('active');
  navBtns[slideIndex].classList.add('active');

  currentSlide = slideIndex;
}

// При загрузке страницы добавляем класс active к первому слайду
// slides[0].classList.add('active');
function addSlideListener(navBtns, slides, navBtnsLeft, navBtnsRight) {
  navBtnsLeft.addEventListener('click', function () {
    navBtnsRight.removeAttribute('disabled', 'disabled');

    showSlide(currentSlide - 1, 5, navBtns, slides);
    console.log('www', currentSlide);
    if (currentSlide === 0) {
      navBtnsLeft.setAttribute('disabled', 'disabled');
    }
  });

  navBtnsRight.addEventListener('click', function () {
    navBtnsLeft.removeAttribute('disabled', 'disabled');

    showSlide(currentSlide + 1, 5, navBtns, slides);
    if (currentSlide === 4) {
      navBtnsRight.setAttribute('disabled', 'disabled');
    }
  });

  for (let i = 0; i < 5; i += 1) {
    navBtns[i].addEventListener('click', function (evt) {
      showSlide(Number(evt.target.dataset.slide), 5, navBtns, slides);
    });
  }
}

export { showSlide, addSlideListener, onNavButtonLeft, onNavButtonRight };
