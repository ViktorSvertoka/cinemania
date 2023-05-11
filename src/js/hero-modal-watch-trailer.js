import APIService from './api-service-main';
import { loaderShow, loaderHide } from './loader';

const markupId = document.querySelector('.trailer-modal');
const apiService = new APIService();

export default async function openTrailerModal() {
  const watchTrailerButtons = document.querySelectorAll('.watch-trailer');

  watchTrailerButtons.forEach(btn => {
    btn.addEventListener('click', async e => {
      loaderShow();

      const movieId = e.target.dataset.movieId;
      document.body.style.overflow = 'hidden';

      try {
        const { key } = await apiService.getMovieTrailer(movieId);
        const videoUrl = `https://www.youtube.com/embed/${key}`;

        markupId.insertAdjacentHTML(
          'beforeend',
          successModalTemplate(videoUrl)
        );

        loaderHide();
      } catch (error) {
        markupId.insertAdjacentHTML('beforeend', errorModalTemplate());
        loaderHide();
      }
    });
  });

  function successModalTemplate(videoUrl) {
    return `<div class='watch-modal'>
  <div class='watch-modal__content'>
    <iframe
      id='trailer-video'
      class='watch-modal__iframe'
      src='${videoUrl}'
      frameborder='0'
      allowfullscreen
    ></iframe>
  </div>
</div>`;
  }

  function errorModalTemplate() {
    return `<div class='watch-modal modal-error'>
  <div class='watch-modal__content'>
    <div class='watch-modal__error-image'></div>
      <button type='button' class='watch-modal__close'>
      <svg
        class='watch-modal__close-icon'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M18 6L6 18'
          stroke='#F3F3F3'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M6 6L18 18'
          stroke='#F3F3F3'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </svg>
    </button>
    <p class='watch-modal__error-message'>
      OOPS... We are very sorry! But we couldn’t find the trailer.
    </p>
  </div>
</div>`;
  }

  if (markupId) {
    markupId.addEventListener('click', event => {
      if (
        event.target.classList.contains('watch-modal') ||
        event.target.classList.contains('watch-modal__close-icon')
      ) {
        closeModal();
      }
    });

    window.addEventListener('keydown', event => {
      if (event.code === 'Escape') {
        closeModal();
      }
    });
  }
}

function closeModal() {
  markupId.innerHTML = '';
  document.body.style.overflow = '';
}
