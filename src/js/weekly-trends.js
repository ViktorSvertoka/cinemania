import APIService from './api-service-main';
import renderMoviesCards from './cards-rendering';
import throttle from 'lodash.throttle';

const apiService = new APIService();

getWeeklyTrends();

async function getWeeklyTrends() {
  try {
    const response = await apiService.getTrends('week');

    if (response.length === 0 || !response) {
      return error;
    }
    if (window.innerWidth < 768) {
      const movies = response.slice(0, 1);
      renderMoviesCards(movies, '.weekly-trends__list');
    } else {
      const movies = response.slice(0, 3);
      renderMoviesCards(movies, '.weekly-trends__list');
    }
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
