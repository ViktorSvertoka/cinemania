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
    const hrefSprite = './images/sprite.svg#icon-star-outline';
    markup += `<li class='cards__list__item'>
      <img src='https://image.tmdb.org/t/p/w500/${movie.poster_path}' alt='${movie.title}' width='395' height='574' />
      <div>
        <h3>${movie.title}</h3>
        <p>${movieGenre} <span>${movieYear}</span></p>
        <p>${movie.vote_average}</p>;
      </div>
    </li>`;
  }

  movieList.innerHTML = markup;
}

function getYear(data) {
  return (year = data.slice(0, 4));
}

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


