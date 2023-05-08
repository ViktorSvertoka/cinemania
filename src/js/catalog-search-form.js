// // import Pagination from './Pagination';
// const axios = require('axios').default;

// const API_KEY = '992758a4802a699e8df27d4d6efc34fb';
// const BASE_URL = 'https://api.themoviedb.org/3';
// const URL_SEARCH_MOVIE = `${BASE_URL}/search/movie`;
// const URL_GET_MOVIE = `${BASE_URL}/movie`;

// const searchForm = document.getElementById('search-form');
// const searchInput = document.getElementById('searchQuery');
// const movieList = document.getElementById('movie-list');
// const prevButton = document.getElementById('prev-button');
// const nextButton = document.getElementById('next-button');

// let currentPage = 1;
// let totalPages = 1;

// async function searchMovies(query, page = 1) {
//   const response = await axios.get(URL_SEARCH_MOVIE, {
//     params: {
//       api_key: API_KEY,
//       query: query,
//       page: page,
//     },
//   });
//   const results = response.data.results;
//   totalPages = response.data.total_pages;
//   return results;
// }

// async function renderWeekMovies(movies) {
//   const movieList = document.getElementById('movie-list');

//   let markup = '';

//   if (movies.length === []) {
//     document
//       .querySelector('.cards__message')
//       .classList.remove('cards__disabled');
//   } else {
//     for (let i = 0; i < 10; i++) {
//       const movie = movies[i];
//       if (!movie || !movie.poster_path) {
//         continue; // пропускаем фильм без картинки или фильм, равный null
//       }
//       const movieGenre = await getGenre(movie.id);
//       const movieYear = await getYear(movie.release_date);
//       markup += `<li class='cards__list'>
//       <img src='https://image.tmdb.org/t/p/w500/${movie.poster_path}' alt='${movie.title}' width='395' height='574' />
//       <div class="search__render">
//         <h3>${movie.title}</h3>
//         <p>${movieGenre} <span>| ${movieYear}</span></p>
//         <p>${movie.vote_average}</p>
//       </div>
//     </li>`;
//     }
//     movieList.innerHTML = markup;
//   }
// }

// async function getGenre(movieId) {
//   const response = await axios.get(`${URL_GET_MOVIE}/${movieId}`, {
//     params: {
//       api_key: API_KEY,
//     },
//   });
//   const genres = response.data.genres
//     .slice(0, 2)
//     .map(genre => genre.name)
//     .join(', ');
//   return genres;
// }

// function getYear(data) {
//   return data ? data.slice(0, 4) : '';
// }

// async function renderMovies(query, page = 1) {
//   const movies = await searchMovies(query, page);
//   await renderWeekMovies(movies);
// }

// searchForm.addEventListener('submit', e => {
//   e.preventDefault();
//   const query = searchInput.value;
//   renderMovies(query);
//   currentPage = 1;
// });

// prevButton.addEventListener('click', () => {
//   if (currentPage > 1) {
//     currentPage--;
//     renderMovies(searchInput.value, currentPage);
//   }
// });

// nextButton.addEventListener('click', () => {
//   if (currentPage < totalPages) {
//     currentPage++;
//     renderMovies(searchInput.value, currentPage);
//   }
// });

// renderMovies('');

// function getWeekMovies() {
//   const prevButton = document.getElementById('prev-button');
//   const nextButton = document.getElementById('next-button');
//   let page = 1;

//   nextButton.addEventListener('click', () => {
//     page++;
//     getMoviesByPage(page);
//   });

//   prevButton.addEventListener('click', () => {
//     if (page > 1) {
//       page--;
//       getMoviesByPage(page);
//     }
//   });

//   async function getMoviesByPage(page) {
//     const movies = await searchMovies('week', page);
//     renderWeekMovies(movies);
//   }

//   getMoviesByPage(page);
// }
