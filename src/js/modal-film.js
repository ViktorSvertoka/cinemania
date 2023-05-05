const API_KEY = '992758a4802a699e8df27d4d6efc34fb';

const API_URL_MOVIE_DETAILS = 'https://api.themoviedb.org/3/movie';

const modalFilmEl = document.querySelector('[data-modal-film]');
const modalFilmBtn = document.querySelector('[data-modal-film-btn]');

async function openModal(id) {
    const resp = await fetch(API_URL_MOVIE_DETAILS + id, {
        headers: {
            "Content-Type": "application/json",
            "X-API-KEY": API_KEY,
        }
    }
    );
    const respData = await resp.json();


    modalFilmEl.classList.add('modal--show');
    modalFilmEl.innerHTML = `
    <div class="backdrop is-hidden" data-modal>
<div class="modal modal-film" data-modal-film>
    <div class="modal-film__images">
        <img class="modal-film__img" src="https://api.themoviedb.org/3/movie" alt="${title}" width="375" height="478">
    </div>
<div class="modal-film__container">
<h2 class="modal-film__title">${title}</h2>
<div class="modal-film__thumb">
<ul class="modal-film__list">
    <li class="modal-film__item">
        <p class="modal-film__text">Vote / Votes</p>
        <p class="modal-film__vote">
            <span class="vote">${vote}</span> / <span class="vote">${vote_count}</span>
        </p>
    </li>
    <li class="modal-film__item">
        <p class="modal-film__text">Popularity</p>
        <p class="modal-film__pop">${populate}</p>
    </li>
    <li class="modal-film__item">
        <p class="modal-film__text">Genre</p>
        <p class="modal-film__genre">${genre}</p>
    </li>
</ul>
</div>
<h3 class="modal-film__about">About</h3>
<p class="modal-film__text-about">${overview}</p>
<button type="button" class="modal-film__button" data-modal-film-btn>Add to my library</button>
    </div>
    <!--   Svg иконка для закрытия окна  -->
    <button class="modal-film__close" data-modal-close>
        <!-- <svg width="24" height="24">
            <use href="./images/icons-sprite.svg#icon-close"></use>
        </svg> -->
    </button>
</div>
    </div >
`
const modalFilmClose = document.querySelector('[data-modal-close]');
modalFilmClose.addEventListener('click', () => closeModal)    
    
}

function closeModal() {
   modalFilmEl.classList.remove('modal--show')
}
window.addEventListener("click", (e) => {
  if (e.target === modalFilmEl) {
    closeModal();
  }
})


