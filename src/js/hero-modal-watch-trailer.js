import APIService from './api-service-main';
import { loaderShow, loaderHide } from './loader';

const markupId = document.getElementById('trailer-modal');
const apiService = new APIService();

export default async function openTrailerModal() {
  const watchTrailerButtons = document.querySelectorAll('.watch-trailer');

  watchTrailerButtons.forEach(btn => {
    btn.addEventListener('click', async e => {
      loaderShow();

      const movieId = e.target.dataset.movieId;
      document.body.style.overflow = 'hidden';

      try {
        const { key } = await apiService.getMovieTrailer();
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
    <picture class='watch-modal__picture'>
      <source
        srcset='./images/watch-trailer-modal_desk_2x.png'
        media='(min-width: 1200px) and (-webkit-min-device-pixel-ratio: 2), (min-width: 1200px) and (min-resolution: 192dpi), (min-width: 1200px) and (min-resolution: 2dppx)'
      />
      <source
        srcset='./images/watch-trailer-modal_desk_1x.png'
        media='(min-width: 1200px)'
      />
      <source
        srcset='/src/images/watch-trailer-modal_tab_2x.png'
        media='(min-width: 768px) and (-webkit-min-device-pixel-ratio: 2), (min-width: 768px) and (min-resolution: 192dpi), (min-width: 768px) and (min-resolution: 2dppx)'
      />
      <source
        srcset='/src/images/watch-trailer-modal_tab_1x.png'
        media='(min-width: 768px)'
      />
      <source
        srcset='/src/images/watch-trailer-modal_mob_2x.png'
        media='(min-width: 480px) and (-webkit-min-device-pixel-ratio: 2), (min-width: 480px) and (min-resolution: 192dpi), (min-width: 480px) and (min-resolution: 2dppx)'
      />
      <source
        srcset='/src/images/watch-trailer-modal_mob_1x.png'
        media='(min-width: 480px)'
      />
      <img
        class='watch-modal__error-image'
        src='/src/images/watch-trailer-modal_desk_1x.png'
        alt='Error'
      />
    </picture>
    <button type='button' class='watch-modal__close'>
      <img
        class='watch-modal__close-image'
        src='./images/close-watch-trailer-icon.png'
        alt='Close'
      />

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
