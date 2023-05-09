import APIService from './api-service-main';

const insertResult = document.querySelector('.upcoming__content');
const apiService = new APIService();

//🚀 Запит на сервер про майбутні фільми
async function getUpcomingMovies() {
  try {
    const response = await apiService.getUpcoming();
    if (!response) {
      throw new Error('No movie data available');
    }
    // console.log(response);
    return response;
  } catch (error) {
    // throw new Error(error.message);
    console.log(error);
  }
}

// 🥽 Опрацьовуємо повернутий результат з серверу
async function getedMovies() {
  try {
    const receivedResult = await getUpcomingMovies();
    // Якщо в масиві є коча б один елемент візьми рандомний з повернутого результату
    if (receivedResult.length >= 1) {
      const randomMovie =
        receivedResult[Math.floor(Math.random() * receivedResult.length)];
      const createNames = await getGenre(randomMovie.genre_ids);
      const createdMarkup = await makeMarkup({ ...randomMovie, createNames });
      insertResult.insertAdjacentHTML('beforeend', createdMarkup);
    }
  } catch (error) {
    console.log(error);
  }
}
getedMovies();

async function makeMarkup({
  poster_path,
  backdrop_path,
  title,
  overview,
  popularity,
  vote_average,
  vote_count,
  release_date,
  genre_ids,
}) {
  const createNames = await getGenre(genre_ids);

  return `
    <div class="container-position">
      <div class="container-foto">
      <img class="upcoming__foto"
      src="https://image.tmdb.org/t/p/original/${poster_path}"
      srcset="https://image.tmdb.org/t/p/original/${backdrop_path} 768w,
              https://image.tmdb.org/t/p/original/${poster_path} 480w"

      alt="Movie Poster">

      </div>
      <div class="container-text">
        <p class="upcoming__movie-name">${title}</p>
    <div class='container-text__table-block'>
    <div class='container-text__table-one'>
    <table class="upcoming__movie-data" id="t01">
      <tr class='upcoming__movie-data__row'>
        <td><p>Release date</p></td>
        <td><p class='upcoming__movie-data__release-date'>${release_date}</p></td>
      </tr>
      
      <tr class='upcoming__movie-data__row'>
        <td><p class='upcoming__movie-data__attribute'>Vote / Votes</p></td>
        <td> <p><span class='upcoming__movie-data__vote'>${vote_average}</span> / 
        <span class='upcoming__movie-data__vote'>${vote_count}</span></p></td>
      </tr>
    </table>
    </div>

    <div class='container-text__table-two'>
    <table class='upcoming__movie-data'>
        <tr class='upcoming__movie-data__row'>
        <td><p>Popularity</p></td>
        <td><p>${popularity}</p></td>
      </tr>

      <tr class='upcoming__movie-data__row'>
        <td><p>Genre</p></td>
        <td><p>${createNames}</p></td>
      </tr>
    </table>
    </div>
    </div>

        <p class="upcoming__about-title">ABOUT</p>
        <p class="upcoming__about">${overview}</p>

        <button type="button" class="upcoming__btn">Remind me</button>
      </div>
    </div>
  `;
}

// отримуємо жанри v.1 (див cards-rendering.js)
async function getGenre(movieId) {
  const API_KEY = '992758a4802a699e8df27d4d6efc34fb';
  const URL = 'https://api.themoviedb.org/3/movie/';
  try {
    const response = await axios.get(`${URL}${movieId}`, {
      params: {
        api_key: API_KEY,
      },
    });

    if (response.data.genres.length === 0) {
      return error;
    }

    const genres = response.data.genres
      // .slice(0, 2)
      .map(genre => genre.name)
      .join(', ');

    return genres;
  } catch (error) {
    console.log(error);
    return 'There are no genres';
  }
}
