import APIService from './api-service-main';

const apiService = new APIService();

const refs = {
  catalog: document.getElementById('movie-list'),
  card: document.querySelector('.cards__list-item'),
  modalWindow: document.getElementById('modalPopUp'),
  overlayPopUp: document.getElementById('overlayPopUp'),
  btnPopUp: document.getElementById('mylibrary'),
};

refs.catalog.addEventListener('click', onMovieCardClick);

async function onMovieCardClick(e) {
  if (!e.target.closest('.cards__list-item')) {
    return;
  }

  try {
    const movieID = e.target
      .closest('.cards__list-item')
      .getAttribute('data-id');
    const movieData = await apiService.getMovieInfo(movieID);
    const markup = createMarkup(movieData);
    updateModal(markup);
    toggleModal();
  } catch (error) {
    console.log(error);
  }
}

function toggleModal() {
  overlayPopUp.classList.toggle('visual');
  modalPopUp.classList.toggle('visual');
}


function updateModal(markup) {
  refs.modalWindow.insertAdjacentHTML('beforeend',markup);
}

function createMarkup({id,
  poster_path,
  title,
  overview,
  popularity,
  vote_average,
  vote_count,
  genres,
}) {
  return `<div class="modal-film__container" data-id=${id}>
  <button class="modal-film__close" id="closeModalPopUp">
    <svg width="18" height="18" class="modal-film__close-icon">
      <use href="./images/sprite.svg#icon-cross-closed"></use>
    </svg>
  </button>
  <img src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="movie-poster" class="modal-film__img" />
  <div class="modal-film__card">
    <h2 class="modal-film__title">${title}</h2>
    <div class="modal-film__blok">
      <ul class="modal-film__list attribute">
        <li class="modal-film__link">Vote / Votes</li>
        <li class="modal-film__link">Popularity</li>
        <li class="modal-film__link">Genre</li>
      </ul>

      <ul class="modal-film__list">
        <li class="modal-film__link-item item-votes">
          <div class="vote">${vote_average}</div>
          &nbsp;/&nbsp;
          <div class="votes">${vote_count}</div>
        </li>
        <li class="modal-film__link-item popularity">${popularity}</li>
        <li class="modal-film__link-item genres">${genres
          .map(g => g.name)
          .join(', ')}</li>
      </ul>
    </div>
    <h3 class="modal-film__about">ABOUT</h3>
    <p class="modal-film__about-txt">${overview}
    </p>
    <button class="btn" id="mylibrary" data-action="add">Add to my library</button>`;
}






























// // import renderMoviesCards from './cards-rendering.js';

// const API_KEY = '992758a4802a699e8df27d4d6efc34fb';
// const BASE_URL = `https://api.themoviedb.org/3/movie/`;
// const MOVIE_ID = 157336;

// const refs = {
//   overlayPopUp: document.getElementById('overlayPopUp'),
//   closeModalPopUp: document.getElementById('closeModalPopUp'),
//   // openModalPopUp: document.getElementById('openModalPopUp'),
//   modalPopUp: document.getElementById('modalPopUp'),
//   btnPopUp: document.getElementById('mylibrary'),
//   closeIconPopUp: document.querySelector('.modal-film__close-icon'),
//   blokPopUp: document.querySelector('.modal-film__blok'),
//   aboutTxtPopUp: document.querySelector('.modal-film__about-txt'),

//   image: document.querySelector('.modal-film__img'),
//   titles: document.querySelector('.modal-film__title'),
//   vote: document.querySelector('.vote'),
//   votes: document.querySelector('.votes'),
//   popular: document.querySelector('.popularity'),
//   genre: document.querySelector('.genres'),
// };

// const classes = {
//   openModal: 'open-modal',
//   visual: 'visual',
// };

// // refs.openModalPopUp.addEventListener('click', handlePopUpModal);
// refs.closeModalPopUp.addEventListener('click', handlePopUpModal);
// refs.overlayPopUp.addEventListener('click', handlePopUpModal);

// document.addEventListener('keydown', handlePopUpModalClose);

// function handlePopUpModalClose({ code }) {
//   if (code === 'Escape' && modalPopUp.classList.contains(classes.visual)) {
//     handlePopUpModal();
//   }
// }

// function handlePopUpModal() {
//   getPopUpMovies();
//   document.body.classList.toggle(classes.openModal);
//   overlayPopUp.classList.toggle(classes.visual);
//   modalPopUp.classList.toggle(classes.visual);
//   console.log(modalPopUp);
// }

// function fetchPopUpMovies() {
//   return fetch(`${BASE_URL}${MOVIE_ID}?api_key=${API_KEY}`).then(data => {
//     return data.json();
//   });
// }

// async function getPopUpMovies() {
//   try {
//     const {
//       poster_path,
//       title,
//       overview,
//       popularity,
//       vote_average,
//       vote_count,
//       genres,
//     } = await fetchPopUpMovies();
//     refs.image.src = `https://image.tmdb.org/t/p/w500/${poster_path}`;
//     refs.titles.textContent = title;
//     refs.vote.textContent = vote_average;
//     refs.votes.textContent = vote_count;
//     refs.popular.textContent = popularity;
//     console.log(genres);
//     refs.genre.textContent = genres.map(genres => genres.name).join(' ');
//     refs.aboutTxtPopUp.textContent = overview;
//   } catch (error) {
//     console.log(error);
//   }
// }
