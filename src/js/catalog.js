import renderMoviesCards from './cards-rendering';

const axios = require('axios').default;

getWeekMovies();

async function getWeekMovies() {
  const API_KEY = '992758a4802a699e8df27d4d6efc34fb';
  const URL = 'https://api.themoviedb.org/3/trending/movie/week';

  try {
    const response = await axios.get(`${URL}`, {
      params: {
        api_key: API_KEY,
      },
    });
    const movies = response.data.results.slice(0, 10);

    if (movies.length === 0) {
      return error;
    }

    renderMoviesCards(movies);
  } catch (error) {
    console.log(error);
  }
}
