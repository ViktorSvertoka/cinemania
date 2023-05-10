import APIService from './api-service-main';
import successModalTemplate from '../templates/success-trailer-modal.hbs';
import errorModalTemplate from '../templates/error-trailer-modal.hbs';
import { loaderClassAdd, loaderClassRemove } from './loader';

const markupId = document.getElementById('trailer-modal');
const apiService = new APIService();
const loader = document.getElementById('loader');

export default async function openTrailerModal() {
  loaderClassAdd();

  const watchTrailerButtons = document.querySelectorAll('.watch-trailer');

  watchTrailerButtons.forEach(btn => {
    btn.addEventListener('click', async e => {
      const movieId = e.target.dataset.movieId;

      try {
        const { key } = await apiService.getMovieTrailer(movieId);

        const videoUrl = `https://www.youtube.com/embed/${key}`;
        loaderClassRemove();
        markupId.insertAdjacentHTML('beforeend', errorModalTemplate());

        // markupId.insertAdjacentHTML(
        //   'beforeend',
        //   successModalTemplate({ videoUrl })
        // );
      } catch (error) {
        loaderClassRemove();
        console.log(error);
        markupId.insertAdjacentHTML('beforeend', errorModalTemplate());
      }
    });
  });

  if (markupId) {
    markupId.addEventListener('click', event => {
      if (event.target.classList.contains('watch-modal')) {
        markupId.innerHTML = '';
      }
    });

    window.addEventListener('keydown', event => {
      if (event.code === 'Escape') {
        markupId.innerHTML = '';
      }
    });
  }
}
