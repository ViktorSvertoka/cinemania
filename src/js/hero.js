import APIService from './api-service-main';
import openTrailerModal from './hero-modal-watch-trailer';
import { showSlide, addSlideListener } from './hero-slider';
import { loaderShow, loaderHide } from './loader';

import { createStarRating } from './cards-rendering';

const apiService = new APIService();

const refs = {
  slider: document.querySelector('.slider'),
  sliderBtn: document.querySelector('.slider-nav'),
};
let currentSlide = 0;

// Создем запрос страницу
createHeroCard();

//   .then(() => {})
//   .finally(() => {});

// вывод на страницу
async function createHeroCard() {
  try {
    const markup = await getTrendsMovieMarkUp();

    if (markup !== undefined) {
      updateHeroMarkup(markup); //вывод карточки Героя на страницу
      const slides = document.querySelectorAll('.slider-card');
      const navBtns = document.querySelectorAll('.slider-nav-btn');
      const navBtnsLeft = document.querySelector('.slider-btn-left');
      const navBtnsRight = document.querySelector('.slider-btn-right');
      // console.log('slides', slides[1]);

      showSlide(currentSlide, 5, navBtns, slides);
      addSlideListener(navBtns, slides, navBtnsLeft, navBtnsRight);
    }
  } catch (error) {
    onError(error);
  }
}

// формирование карточки
async function getTrendsMovieMarkUp() {
  try {
    const results = await apiService.getTrends('day'); //запрос данных на сервере
    currentSlide = Math.ceil(Math.random(results.length) * 5) - 1;
    const firstSlide = Math.ceil(Math.random(results.length) * 15) - 1;
    // console.log("firstSlide ", firstSlide);
    if (results.length === 0) {
      return createHeroWithoutFilms(); //рендер карточки, если нет данные
    } else {
      const buttonSlider = createButtonSlider(
        results.length > 5 ? 5 : results.length
      );
      refs.sliderBtn.insertAdjacentHTML('beforeend', buttonSlider);

      return results
        .slice(firstSlide, firstSlide + 5)
        .reduce((markup, movie) => markup + createCardTrendsOfDay(movie), ''); //рендер карточек слайдера, если есть данные
      // results.reduce(
      //   (markup, movie) => markup + createCardTrendsOfDay(movie),
      //   ''
      // ); //рендер карточек слайдера, если есть данные
    }
  } catch (error) {
    console.error(error);
  }
}

function createButtonSlider(numberCards) {
  let buttonsNav = '';
  for (let index = 0; index < numberCards; index++) {
    buttonsNav += `<button class="slider-nav-btn" type="button" data-slide="${index}">0${
      index + 1
    }</button>`;
  }
  return buttonsNav;
}

function createCardTrendsOfDay({
  id,
  backdrop_path,
  title,
  vote_average,
  overview,
}) {
  const stars = createStarRating(vote_average);
  return `<div class=" imgApi slider-card"  >
  <img class="hero__img" loading="lazy" width="1280" height="720"
  srcset="https://image.tmdb.org/t/p/w1280${backdrop_path} 1280w,
  https://image.tmdb.org/t/p/w780${backdrop_path} 768w,
  https://image.tmdb.org/t/p/w300${backdrop_path} 320w"
  src="https://image.tmdb.org/t/p/w300${backdrop_path}" "sizes="(min-width: 1280px) 1280px, (min-width: 768px) 768px, (min-width: 320px) 320px, 100vw " alt="${title}">      
  <div class="hero__container hero__container--render"> 
            <div class="hero__block-left--render">
                <h2 class="hero__title hero__title--render">${title}</h2>
                <div class = "hero__stars">${stars} </div>
                <p class="hero__text hero__text--render">
                ${overview}    
                </p>
                <button class="watch-trailer" type="button" data-movie-id="${id}">Watch trailer</button>
       </div>
            </div>
        </div>
    </div>`;
}

function createHeroWithoutFilms() {
  if (
    document.querySelector('.current-page__my-library').localName !== 'body'
  ) {
    return `  <div class="my-lib__hero-container container">
    <h2 class="my-lib__hero-title">
      Create Your <br />
      Dream Cinema
    </h2>
    <p class="my-lib__hero-description">
      Is a guide to designing a personalized movie theater experience with the
      right equipment, customized decor, and favorite films. This guide helps
      you bring the cinema experience into your own home with cozy seating, dim
      lighting, and movie theater snacks.
    </p>
  </div>`;
  }
  return `<div class="container"  >
        <div class="hero__container">
            <div class="hero__block-left">
                <h1 class="hero__title">Let’s Make Your Own Cinema</h1>
                <p class="hero__text">
                    Is a guide to creating a personalized movie theater experience. You'll
                    need a projector, screen, and speakers. <span class="hero__text-hidden"> Decorate your space, choose
                        your
                        films, and stock up on snacks for the full experience.</span>
                </p>

                <a href="./catalog.html" type="button" class="watch-trailer button"  data-movie-id="">Get Started</a>
            </div>
        </div>
    </div>`;
}

// вывод галереи на страницу
function updateHeroMarkup(markup) {
  if (markup !== undefined) {
    refs.slider.insertAdjacentHTML('afterbegin', markup);

    openTrailerModal();
  }
}

// обработка ошибок
function onError(error) {
  console.error(error);
}
