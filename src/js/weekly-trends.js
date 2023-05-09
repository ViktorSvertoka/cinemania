import APIService from './api-service-main';
import renderMoviesCards from './cards-rendering';

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

    testViewportAndDoMarkup(response, viewportSize);
  } catch (error) {
    console.log(error);
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
