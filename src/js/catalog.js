import APIService from './api-service-main';
import renderMoviesCards from './cards-rendering';

const movieList = document.querySelector('.cards__list');
const messageNoMovie = document.querySelector('.cards__message');
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('searchQuery');

const apiService = new APIService();
setCatalogCards();
searchForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  movieList.innerHTML = '';

  let searchValue = searchInput.value.trim();

  if (!searchValue) {
    return;
  }

  movieList.classList.remove('visually-hidden');
  messageNoMovie.classList.add('visually-hidden');

  searchMovies(searchValue);
}

async function setCatalogCards() {
  try {
    const response = await apiService.getTrends('week');

    if (response.length === 0 || !response) {
      return error;
    }

    const movies = response.slice(0, 10);

    renderMoviesCards(movies);
  } catch (error) {
    console.log(error);
    movieList.classList.add('visually-hidden');
    messageNoMovie.classList.remove('visually-hidden');
  }
}

async function searchMovies(query) {
  try {
    const response = await apiService.searchMovieByQuery(query);

    if (response.length === 0 || !response) {
      return error;
    }

    const movies = response.slice(0, 10);

    renderMoviesCards(movies);
  } catch (error) {
    console.log(error);
    movieList.classList.add('visually-hidden');
    messageNoMovie.classList.remove('visually-hidden');
  }
}
