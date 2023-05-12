import { emptyStar, fullStar, halfStar } from './stars';
import comingSoonImg from '../images/coming_soon.jpg';


const axios = require('axios').default;

import APIService from './api-service-main';
const apiService = new APIService();
let genreList;

getGenresList();

async function getGenresList() {
  try {
    const response = await apiService.getGenresList();
    return (genreList = response);
  } catch (error) {
    console.log(error);
  }
}


export default async function renderMoviesCards(movies, selector) {
  // в каталоге рендерится в переданный селектор
  const movieList = document.querySelector(`${selector}`);
  let markup = '';
  for (const movie of movies) {
    const {
      id,
      poster_path: poster,
      title,
      release_date: date,
      vote_average: rating,
    } = movie;

    const movieSrc = await getImg(poster, title);
    const movieGenre = await getGenre(id);
    const movieYear = await getYear(date);
    const starRating = await createStarRating(rating);
    // Надо добавить классы
    markup += `<li class='cards__list-item' data-id='${id}'>
                    
    <img class='cards__list-img' loading="lazy" ${movieSrc} width='395' height='574'/>
    
                   <div class='weekly-trends__overlay'></div>
                    <div class='cards__list-search'>                       
                        <div class='cards__bloc-stars'>
                          <h3 class='cards__list-title'>${title}</h3>
                          <div class='cards__list-text'>${movieGenre}|${movieYear}<span class='cards__list-span'></span></div>
                        </div>  
                        
                        
                    </div>
                    <div class='cards__list-stars'>${starRating}</div>
                </li>`;
  }

  if (!movieList) {
    return;
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

function getImg(poster, title) {
  if (poster === null || !poster) {
    return `src='${comingSoonImg}' alt='${title}'`;
  }

  return `
    srcset="
                https://image.tmdb.org/t/p/w500/${poster} 500w,
                https://image.tmdb.org/t/p/w300/${poster} 342w,
                https://image.tmdb.org/t/p/w185/${poster} 185w"
        src="https://image.tmdb.org/t/p/w500/${poster}"

        " sizes=" (min-width: 768px) 500px, (min-width: 480px) 342px, (min-width: 320px) 185px, 100vw"   
     alt='${title}'`;
}

export { createStarRating };
