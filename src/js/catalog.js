import APIService from './api-service-main';
import renderMoviesCards from './cards-rendering';
import renderPagination from './catalog-slider';

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
  try {
    const response = await apiService.getTrends('week', currentPage);

    
    if (response.results.length === 0 || !response.results) {
      return error;
    }

    const movies = response.results;

    renderMoviesCards(movies, '.cards__list');

    renderPagination(response.page, response.total_pages);
  } catch (error) {
    console.log(error);
    movieList.classList.add('visually-hidden');
    messageNoMovie.classList.remove('visually-hidden');
    paginationCont.classList.add('visually-hidden');
  }
}

async function searchMovies(query) {
  try {
    const response = await apiService.searchMovieByQuery(query, currentPage);
    console.log (response)

    if (response.results.length === 0 || !response.results) {
      return error;
    }

    const movies = response.results;

    renderMoviesCards(movies, '.cards__list');

    if (response.total_pages === 1) {
      paginationCont.classList.add('visually-hidden');
      return
      
    }
    renderPagination(response.page, response.total_pages, query);
  
  } catch (error) {
    console.log(error);
    movieList.classList.add('visually-hidden');
    messageNoMovie.classList.remove('visually-hidden');
    paginationCont.classList.add('visually-hidden');
  }
}
