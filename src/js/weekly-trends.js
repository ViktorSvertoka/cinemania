import APIService from './api-service-main';
import renderMoviesCards from './cards-rendering';

const apiService = new APIService();

getWeeklyTrends();

async function getWeeklyTrends() {
  try {
    const response = await apiService.getTrends('week');

    if (response.length === 0 || !response) {
      return error;
    }

    const movies = response.slice(0, 3);
    renderMoviesCards(movies, '.weekly-trends__list');
  } catch (error) {
    console.log(error);
  }
}
