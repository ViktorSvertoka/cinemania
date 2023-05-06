import { emptyStar, fullStar, halfStar } from './stars';

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

    renderWeekMovies(movies);
  } catch (error) {
    console.log(error);
  }
}

async function renderWeekMovies(movies) {
  const movieList = document.querySelector('.cards__list');
  let markup = '';
  for (const movie of movies) {
    const movieGenre = await getGenre(movie.id);
    const movieYear = await getYear(movie.release_date);
    const starRating = await createStarRating(movie.vote_average);
    const hrefSprite = './images/sprite.svg#icon-star-outline';
    markup += `<li class='cards__list__item'>
      <img src='https://image.tmdb.org/t/p/w500/${movie.poster_path}' alt='${movie.title}' width='395' height='574' />
      <div>
        <h3>${movie.title}</h3>
        <p>${movieGenre} <span>${movieYear}</span></p>
        ${starRating}
      </div>
    </li>`;
  }

  movieList.innerHTML = markup;
}

// Получает год из даты
function getYear(data) {
  return (year = data.slice(0, 4));
}

// Получает жанры фильма
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
      .slice(0, 2)
      .map(genre => genre.name)
      .join(', ');

    return genres;
  } catch (error) {
    console.log(error);
    return 'There are no genres';
  }
}

// Преобразует рейтинг в рейтинг из звезд 
function createStarRating(data) {
  const rating = Math.round(data);
  console.log(rating);
  let ratingStars = '';

  switch (rating) {
    case 0:
      ratingStars = `${emptyStar.repeat(5)}`;
      break;
    case 1:
      ratingStars = `${halfStar}${emptyStar.repeat(4)}`;
      break;
    case 2:
      ratingStars = `${fullStar}${emptyStar.repeat(4)}`;
      break;
    case 3:
      ratingStars = `${fullStar}${halfStar}${emptyStar.repeat(3)}`;
      break;
    case 4:
      ratingStars = `${fullStar.repeat(2)}${emptyStar.repeat(3)}`;
      break;
    case 5:
      ratingStars = `${fullStar.repeat(2)}${halfStar}${emptyStar.repeat(2)}`;
      break;
    case 6:
      ratingStars = `${fullStar.repeat(3)}${emptyStar.repeat(2)}`;
      break;
    case 7:
      ratingStars = `${fullStar.repeat(3)}${halfStar}${emptyStar}`;
      break;
    case 8:
      ratingStars = `${fullStar.repeat(4)}${emptyStar}`;
      break;
    case 9:
      ratingStars = `${fullStar.repeat(4)}${halfStar}`;
      break;
    case 10:
      ratingStars = `${fullStar.repeat(5)}`;
      break;
    default:
      throw new Error('Invalid rating');
  }

  return `<div>${ratingStars}</div>`;
}
