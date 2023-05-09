import APIService from './api-service-main';
import openTrailerModal from './hero-modal-watch-trailer';
import {
  showSlide,
  addSlideListener,
  onNavButtonLeft,
  onNavButtonRight,
} from './hero-slider';

const apiService = new APIService();

const refs = {
  hero: document.querySelector('.slider'),
};
let currentSlide = 0;
let currentButton = 0;

// Создем запрос страницу
if (document.querySelector('.current-page__my-library').localName !== 'body') {
  createHeroCard();
}
//   .then(() => {})
//   .finally(() => {});

// вывод на страницу
async function createHeroCard() {
  try {
    const markup = await getTrendsMovieMarkUp();
    if (markup !== undefined) {
      updateHeroMarkup(markup); //вывод карточки Героя на страницу
      const slides = document.querySelectorAll('.slider-card');
      const navBtns = [];
      const navBtnsLeft = document.querySelectorAll('.slider-btn-left');
      const navBtnsRight = document.querySelectorAll('.slider-btn-right');
      for (let i = 0; i < slides.length; i += 1) {
        navBtns.push(slides[i].querySelectorAll('.slider-nav-btn'));
      }

      showSlide(currentSlide, 5, navBtns, slides, currentButton);
      addSlideListener(
        navBtns,
        slides,
        currentSlide,
        currentButton,
        navBtnsLeft,
        navBtnsRight
      );
    }
  } catch (error) {
    onError(error);
  }
}

// формирование карточки
async function getTrendsMovieMarkUp() {
  try {
    const results = await apiService.getTrends('day'); //запрос данных на сервере
    currentSlide = Math.ceil(Math.random(results.length) * 5);
    currentButton = currentSlide - 1;
    if (results.length === 0) {
      return createHeroWithoutFilms(); //рендер карточки, если нет данные
    } else {
      //   createButtonSlider(results.length > 5 ? 5 : results.length);

      return results.reduce(
        (markup, movie) => markup + createCardTrendsOfDay(movie),
        ''
      ); //рендер карточек слайдера, если есть данные
    }
  } catch (error) {
    console.error(error);
  }
}

function createCardTrendsOfDay({
  id,
  backdrop_path,
  title,
  vote_average,
  overview,
}) {
  return `<div class="container imgApi slider-card" id="heroContainerImg" style="background-image:linear-gradient(87.8deg, #0E0E0E 15.61%, rgba(14, 14, 14, 0) 60.39%), url('https://image.tmdb.org/t/p/original${backdrop_path}')" >
        <div class="hero__container hero__container--render"> 
            <div class="hero__block-left--render">
                <h1 class="hero__title hero__title--render">${title}</h1>
                <div class = "hero__stars">${vote_average}</div>
                <p class="hero__text hero__text--render">
                ${overview}    
                </p>
                <button class="watch-trailer" type="button" id ="watch__btn" data-movie-id="${id}">Watch trailer</button>
                      <div class="slider__buttons">
        <button type="button" class="slider-btn-left slider-btn">
        </button>
        <div class="slider-nav">
            <button class="slider-nav-btn" type="button" data-slide="1">01</button>
            <button class="slider-nav-btn" type="button" data-slide="2">02</button>
            <button class="slider-nav-btn" type="button" data-slide="3">03</button>
            <button class="slider-nav-btn" type="button" data-slide="4">04</button>
            <button class="slider-nav-btn" type="button" data-slide="5">05</button>
        </div>
        <button type="button" class="slider-btn-right slider-btn">
        </button>
      </div>
            </div>
        </div>
    </div>`;
}

function createHeroWithoutFilms() {
  return `<div class="container" id="heroContainerImg" >
        <div class="hero__container">
            <div class="hero__block-left">
                <h1 class="hero__title">Let’s Make Your Own Cinema</h1>
                <p class="hero__text">
                    Is a guide to creating a personalized movie theater experience. You'll
                    need a projector, screen, and speakers. <span class="hero__text-hidden"> Decorate your space, choose
                        your
                        films, and stock up on snacks for the full experience.</span>
                </p>

                <a href="./catalog.html" type="button" class="watch-trailer button" id="hero__btn" data-movie-id="">Get Started</a>
            </div>
        </div>
    </div>`;
}

// вывод галереи на страницу
function updateHeroMarkup(markup) {
  if (markup !== undefined) {
    refs.hero.insertAdjacentHTML('beforeend', markup);
    // const watchTrailerBtn = document.getElementById('watch__btn');
    // watchTrailerBtn.removeEventListener();
    openTrailerModal();
  }
}

// обработка ошибок
function onError(error) {
  console.error(error);
}
