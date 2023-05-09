import { emptyStar, fullStar, halfStar } from './stars';
const axios = require('axios').default;

export default async function renderMoviesCards(movies) {
  // в каталоге рендерится в ul c классом cards__list
  const movieList = document.querySelector('.cards__list');
  const POSTER_URL = 'https://image.tmdb.org/t/p/w500/';
  let markup = '';
  for (const movie of movies) {
    const {
      id,
      poster_path: poster,
      title,
      release_date: date,
      vote_average: rating,
    } = movie;

    // Проверка на картинку, можно что-то придумать чтоб грузилось другое
    if (poster === null || !poster) {
      continue; // пропускаем фильм без картинки
    }

    
    const movieImg = POSTER_URL + poster;
    const movieGenre = await getGenre(id);
    const movieYear = await getYear(date);
    const starRating = await createStarRating(rating);
    // Надо добавить классы
    markup += `<li class='cards__list__item'>
                    <img src='${movieImg}' alt='${title}' width='395' height='574' />
                    <div>
                        <h3>${title}</h3>
                        <p>${movieGenre} <span>${movieYear}</span></p>
                        ${starRating}
                    </div>
                </li>`;
  }

  movieList.innerHTML = markup;
}

// Получает год из даты
async function getYear(data) {
  if (!data) {
    return 'There is no release date';
  }

  const year = await data.slice(0, 4);
  return year;
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
  let ratingStars = '';

  if (!data) {
    ratingStars = `${emptyStar.repeat(5)}`;
    return `<div>${ratingStars}</div>`;
  }

  const rating = Math.round(data);

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
