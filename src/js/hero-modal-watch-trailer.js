import APIService from './api-service-main';
import successModalTemplate from '../templates/success-trailer-modal.hbs';
import errorModalTemplate from '../templates/error-trailer-modal.hbs';
import { loaderClassAdd, loaderClassRemove } from './loader';

const markupId = document.getElementById('trailer-modal');
const apiService = new APIService();
const loader = document.getElementById('loader');

export default async function openTrailerModal() {
  const watchTrailerBtn = document.getElementById('watch__btn');
  const movieId = watchTrailerBtn.dataset.movieId;
  console.log(movieId);

  watchTrailerBtn.addEventListener('click', async () => {
    console.log('object');
    //   loaderClassAdd();

    try {
      const { key } = await apiService.getMovieTrailer(movieId);

      const videoUrl = `https://www.youtube.com/embed/${key}`;
      loaderClassRemove();
      markupId.insertAdjacentHTML(
        'beforeend',
        successModalTemplate({ videoUrl })
      );
    } catch (error) {
      loaderClassRemove();
      console.log(error);
      markupId.insertAdjacentHTML('beforeend', errorModalTemplate());
    }
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

errorModalTemplate();
