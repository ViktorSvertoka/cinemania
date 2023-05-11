import APIService from './api-service-main';
import renderMoviesCards from './cards-rendering';
import renderPagination from './catalog-slider';
import { loaderShow, loaderHide } from './loader';

const movieList = document.querySelector('.cards__list');
const messageNoMovie = document.querySelector('.cards__message');
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('searchQuery');
let currentPage = 1;
const paginationCont = document.querySelector('.pagination');

const apiService = new APIService();
setCatalogCards();
searchForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  movieList.innerHTML = '';
  paginationCont.innerHTML = '';

  let searchValue = searchInput.value.trim();

  if (!searchValue) {
    return;
  }

  movieList.classList.remove('visually-hidden');
  messageNoMovie.classList.add('visually-hidden');
  paginationCont.classList.remove('visually-hidden');

  searchMovies(searchValue);
}

async function setCatalogCards() {
  loaderShow();

  try {
    const response = await apiService.getTrends('week', currentPage);

    if (response.results.length === 0 || !response.results) {
      return error;
    }

    const movies = response.results;

    renderMoviesCards(movies, '.cards__list');

    if (response.total_pages === 1) {
      paginationCont.innerHTML = '';
      paginationCont.classList.add('visually-hidden');
      loaderHide();
      return;
    }

    renderPagination(response.page, response.total_pages);

    loaderHide();
  } catch (error) {
    console.log(error);
    movieList.classList.add('visually-hidden');
    messageNoMovie.classList.remove('visually-hidden');
    paginationCont.innerHTML = '';
    paginationCont.classList.add('visually-hidden');
    loaderHide();
  }
}

async function searchMovies(query) {
  loaderShow();
  try {
    const response = await apiService.searchMovieByQuery(query, currentPage);
    console.log(response);

    if (response.results.length === 0 || !response.results) {
      return error;
    }

    const movies = response.results;

    renderMoviesCards(movies, '.cards__list');

    if (response.total_pages === 1) {
      paginationCont.innerHTML = '';
      paginationCont.classList.add('visually-hidden');
      loaderHide();
      return;
    }
    renderPagination(response.page, response.total_pages, query);
    loaderHide();
  } catch (error) {
    console.log(error);
    movieList.classList.add('visually-hidden');
    messageNoMovie.classList.remove('visually-hidden');
    paginationCont.innerHTML = '';
    paginationCont.classList.add('visually-hidden');
    loaderHide();
  }
}
