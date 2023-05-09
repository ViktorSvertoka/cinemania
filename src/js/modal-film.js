// import renderMoviesCards from './cards-rendering.js';

const API_KEY = '992758a4802a699e8df27d4d6efc34fb';
const BASE_URL = `https://api.themoviedb.org/3/movie/`;
const MOVIE_ID = 157336;

const refs = {
  overlayPopUp: document.getElementById('overlayPopUp'),
  closeModalPopUp: document.getElementById('closeModalPopUp'),
  // openModalPopUp: document.getElementById('openModalPopUp'),
  modalPopUp: document.getElementById('modalPopUp'),
  btnPopUp: document.getElementById('mylibrary'),
  closeIconPopUp: document.querySelector('.modal-film__close-icon'),
  blokPopUp: document.querySelector('.modal-film__blok'),
  aboutTxtPopUp: document.querySelector('.modal-film__about-txt'),

  image: document.querySelector('.modal-film__img'),
  titles: document.querySelector('.modal-film__title'),
  vote: document.querySelector('.vote'),
  votes: document.querySelector('.votes'),
  popular: document.querySelector('.popularity'),
  genre: document.querySelector('.genres'),
};

const classes = {
  openModal: 'open-modal',
  visual: 'visual',
};

// refs.openModalPopUp.addEventListener('click', handlePopUpModal);
refs.closeModalPopUp.addEventListener('click', handlePopUpModal);
refs.overlayPopUp.addEventListener('click', handlePopUpModal);

document.addEventListener('keydown', handlePopUpModalClose);

function handlePopUpModalClose({ code }) {
  if (code === 'Escape' && modalPopUp.classList.contains(classes.visual)) {
    handlePopUpModal();
  }
}

function handlePopUpModal() {
  getPopUpMovies();
  document.body.classList.toggle(classes.openModal);
  overlayPopUp.classList.toggle(classes.visual);
  modalPopUp.classList.toggle(classes.visual);
  console.log(modalPopUp);
}

function fetchPopUpMovies() {
  return fetch(`${BASE_URL}${MOVIE_ID}?api_key=${API_KEY}`).then(data => {
    return data.json();
  });
}

async function getPopUpMovies() {
  try {
    const {
      poster_path,
      title,
      overview,
      popularity,
      vote_average,
      vote_count,
      genres,
    } = await fetchPopUpMovies();
    refs.image.src = `https://image.tmdb.org/t/p/w500/${poster_path}`;
    refs.titles.textContent = title;
    refs.vote.textContent = vote_average;
    refs.votes.textContent = vote_count;
    refs.popular.textContent = popularity;
    console.log(genres);
    refs.genre.textContent = genres.map(genres => genres.name).join(' ');
    refs.aboutTxtPopUp.textContent = overview;
  } catch (error) {
    console.log(error);
  }
}
