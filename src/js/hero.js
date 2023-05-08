import APIService from './api-service-main';

const apiService = new APIService();

const refs = {
  hero: document.querySelector('.hero'),
};

// Создем запрос страницу
if (
  document.querySelector('.current-page__my-library').localName !==
  'body') {
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
    }
  } catch (error) {
    onError(error);
  }
}

// формирование карточки
async function getTrendsMovieMarkUp() {
  try {
    const results = await apiService.getTrends('day'); //запрос данных на сервере

    if (results.length !== 0) {
      return createHeroWithoutFilms();
    } else {
      return createCardTrendsOfDay(
        results[Math.floor(Math.random(results.length) * 20)]
      ); //рендер карточки
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
  return `<div class="container imgApi" id="heroContainerImg" style="background-image:linear-gradient(87.8deg, #0E0E0E 15.61%, rgba(14, 14, 14, 0) 60.39%), url('https://image.tmdb.org/t/p/original${backdrop_path}')" >
        <div class="hero__container hero__container--render"> 
            <div class="hero__block-left--render">
                <h1 class="hero__title hero__title--render">${title}</h1>
                <div class = "hero__stars">${vote_average}</div>
                <p class="hero__text hero__text--render">
                ${overview}    
                </p>

                <a class="watch-trailer button" type="button" id ="hero__btn" data-movie-id="${id}">Watch trailer</a>

                <button class="watch-trailer" id="hero__btn" data-movie-id="${id}">Watch trailer</button>

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

                <a href="./catalog.html" type="button" class="watch-trailer button" id ="hero__btn" data-movie-id="" >Get Started</a>

                <a href="./catalog.html" type="button" class="watch-trailer button" id="hero__btn" data-movie-id="">Get Started</a>

            </div>
        </div>
    </div>`;
}

// вывод галереи на страницу
function updateHeroMarkup(markup) {
  if (markup !== undefined) {
    refs.hero.insertAdjacentHTML('beforeend', markup);
  }
}

// обработка ошибок
function onError(error) {
  console.error(error);
}
