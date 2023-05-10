import APIService from './api-service-main';
import successModalTemplate from '../templates/success-trailer-modal.hbs';
import errorModalTemplate from '../templates/error-trailer-modal.hbs';
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
        const { key } = await apiService.getMovieTrailer(movieId);

        const videoUrl = `https://www.youtube.com/embed/${key}`;

        console.log(markupId);

        markupId.insertAdjacentHTML(
          'beforeend',
          await successModalTemplate({ videoUrl })
        );
        loaderHide();
      } catch (error) {
        markupId.insertAdjacentHTML('beforeend', errorModalTemplate());
        loaderHide();
        // markupId.classList.add('is-open');
      }
    });
  });

  if (markupId) {
    markupId.addEventListener('click', event => {
      if (
        event.target.classList.contains('watch-modal') ||
        event.target.classList.contains('watch-modal__close-icon')
      ) {
        markupId.innerHTML = '';
        document.body.style.overflow = '';
      }
    });

    window.addEventListener('keydown', event => {
      if (event.code === 'Escape') {
        markupId.innerHTML = '';
        document.body.style.overflow = '';
      }
    });
  }
}
