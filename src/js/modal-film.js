import APIService from './api-service-main';

const apiService = new APIService();

const refs = {
  catalog: document.getElementById('movie-list'),
  card: document.querySelector('.cards__list-item'),
  modalWindow: document.getElementById('modalPopUp'),
  closeModal: document.querySelector('.modal-film__close'),
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

  document.body.addEventListener('keyup', closeOnEsc);
  document
    .querySelector('.modal-film__close')
    .addEventListener('click', modalClose);
  document
    .getElementById('modalPopUp')
    .addEventListener('click', closeOnOverlay);
}

function modalClose(e) {
  const modalFilm = document.getElementById('modalPopUp');
  if (modalFilm) {
    modalFilm.remove();
  }
  return;
  e.target.removeEventListener('click', onMovieCardClick);
}

function closeOnEsc(e) {
  if (e.keyCode === 27) {
    const modalFilm = document.getElementById('modalPopUp');
    if (modalFilm) {
      modalFilm.remove();
    }
    e.target.removeEventListener('keyup', onMovieCardClick);
  }
  return;
}

function closeOnOverlay(e) {
  const modalFilm = document.getElementById('modalPopUp');
  if (modalFilm && e.target === modalFilm) {
    modalFilm.remove();
  }

  e.target.removeEventListener('click', onMovieCardClick);
  return;
}

function toggleModal() {
  overlayPopUp.classList.toggle('visual');
  modalPopUp.classList.toggle('visual');
}

function updateModal(markup) {
  refs.modalWindow.insertAdjacentHTML('beforeend', markup);
}

function createMarkup({
  id,
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
