// const API_KEY = '992758a4802a699e8df27d4d6efc34fb';
// const BASE_API_URL = 'https://api.themoviedb.org/3';

// const watchTrailerBtn = document.querySelector('.watch-trailer');
// const modal = document.querySelector('.watch-modal');
// const modalError = document.querySelector('.modal-error');
// const modalContent = document.querySelector('.watch-modal-content');
// const closeModalBtn = document.querySelector('.close');
// const trailerVideo = document.querySelector('#trailer-video');
// const loader = document.getElementById('loader');

// watchTrailerBtn.addEventListener('click', async () => {
//   try {
//     loader.style.display = 'flex';
//     const movieId = watchTrailerBtn.dataset.movieId;

//     // Получение списка видео для фильма из API
//     const response = await fetch(
//       `${BASE_API_URL}/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`
//     );

//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }

//     const data = await response.json();

//     // Проверка на наличие видео
//     if (!data || data.results.length === 0 || !data.results[0].key) {
//       modalError.style.display = 'block';

//       return;
//     }

//     // Получение первого видео из списка
//     const video = data.results[0];

//     // Установка источника видео для трейлера на URL видео на YouTube
//     trailerVideo.src = `https://www.youtube.com/embed/${video.key}`;
//     loader.style.display = 'none';
//     modal.style.display = 'block';

//     // Ожидание, пока модальное окно полностью раскроется
//     await new Promise(resolve => {
//       modalContent.addEventListener('transitionend', resolve, { once: true });
//     });
//   } catch (error) {
//     console.error(error);
//     modalError.style.display = 'block';
//   }
// });

// closeModalBtn.addEventListener('click', () => {
//   modal.style.display = 'none';
// });

// modal.addEventListener('click', event => {
//   // Если клик был на фоне, а не на содержимом модального окна, закрыть модальное окно
//   if (event.target === modal) {
//     closeModalBtn.click();
//   }
// });

// modalError.addEventListener('click', () => {
//   modalError.style.display = 'none';
// });
import axios from 'axios';
import successModalTemplate from '../templates/success-trailer-modal.hbs';
import errorModalTemplate from '../templates/error-trailer-modal.hbs';

const watchTrailerBtn = document.getElementByIds('watch-trailer-btn');
const markupId = document.getElementById('trailer-modal');

console.log('hello');
export default async function openTrailerModal() {
  try {
    const {
      data: { results },
    } = await axios.get(
      `https://api.themoviedb.org/3/movie/505/videos?api_key=992758a4802a699e8df27d4d6efc34fb&language=en-US`
    );
    console.log('hi', results);

    const videoUrl = `https://www.youtube.com/embed/${results[0].key}`;

    markupId.insertAdjacentHTML('beforeend', successModalTemplate(videoUrl));
  } catch {}
}
openTrailerModal();
