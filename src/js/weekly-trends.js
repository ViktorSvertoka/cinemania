import APIService from './api-service-main';
import renderMoviesCards from './cards-rendering';
import throttle from 'lodash.throttle';

const apiService = new APIService();
let viewportSize = 0;

window.addEventListener('resize', getWeeklyTrends);

getWeeklyTrends();

async function getWeeklyTrends() {
  viewportSize = window.innerWidth;
  try {
    const response = await apiService.getTrends('week');

    if (response.length === 0 || !response) {
      return error;
    }

    const movies = response.slice(0, 3);
    renderMoviesCards(movies, '.weekly-trends__list');


    testViewportAndDoMarkup(response, viewportSize);

  } catch (error) {
    console.log(error);
  }
}


window.addEventListener('resize', throttle(cardListShuffling, 100));

function cardListShuffling() {
  const cardList = document.querySelectorAll('.cards__list__item');
  if (window.innerWidth < 768) {
    cardList[1].classList.add('weekly-trends__none');
    cardList[2].classList.add('weekly-trends__none');
  } else {
    cardList[1].classList.remove('weekly-trends__none');
    cardList[2].classList.remove('weekly-trends__none');
  }
}

function testViewportAndDoMarkup(response, viewportSize) {
  if (viewportSize > 768) {
    const movies = response.slice(0, 3);
    renderMoviesCards(movies);
  } else {
    const movies = response.slice(0, 1);
    renderMoviesCards(movies);
  }
}

async function updateViewport() {
  console.log(viewportSize);
  return (viewportSize = window.innerWidth);
}

