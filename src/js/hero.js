import APIService from './api-service-main';

const apiService = new APIService(arguments);

const refs = {
  hero: document.querySelector('.hero'),
};

const markup = '';

// Создем запрос страницу
createHeroCard();
//   .then(() => {})
//   .finally(() => {});

// вывод на страницу
async function createHeroCard() {
  try {
    const markup = await getTrendsMovieMarkUp();
    console.log('createHeroCard', markup);
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
    console.log(results.length);
    console.log(Math.floor(Math.random(results.length) * 10));

    if (results.length === 0) {
      return createHeroWithoutFilms();
    } else {
      console.log(
        'results',
        results[Math.floor(Math.random(results.length) * 20)]
      );
      console.log('markup', markup);
      return createCardTrendsOfDay(results[19]); //рендер карточки
    }
  } catch (error) {}
}

function createCardTrendsOfDay({
  id,
  backdrop_path,
  title,
  vote_average,
  overview,
}) {
  console.log(id, backdrop_path, title, vote_average, overview);
  return `<div class="container imgApi" id="heroContainerImg" style="background-image:linear-gradient(87.8deg, #0E0E0E 15.61%, rgba(14, 14, 14, 0) 60.39%), url('https://image.tmdb.org/t/p/original${backdrop_path}')" >
        <div class="hero__container hero__container--render"> 
            <div class="hero__block-left--render">
                <h1 class="hero__title hero__title--render">${title}</h1>
                <div class = "hero__stars">${vote_average}</div>
                <p class="hero__text hero__text--render">
                ${overview}    
                </p>
                <button class="watch-trailer" id ="hero__btn" data-movie-id="${id}">Watch trailer</button>
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
                <button class="watch-trailer button" id ="hero__btn" type = "button" data-movie-id="" href="../catalog.html">Get Started</button>
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
