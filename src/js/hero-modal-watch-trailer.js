const apiKey = '992758a4802a699e8df27d4d6efc34fb';
const baseApiUrl = 'https://api.themoviedb.org/3';

// Получаем нужные элементы
const watchTrailerBtn = document.querySelector('.watch-trailer');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const closeModalBtn = document.querySelector('.close');
const trailerVideo = document.querySelector('#trailer-video');

// Обрабатываем клики на кнопке "Смотреть трейлер"
watchTrailerBtn.addEventListener('click', async () => {
  // Получаем ID фильма из атрибута data кнопки
  const movieId = watchTrailerBtn.getAttribute('data-movie-id');

  // Получаем список видео по фильму из API
  const response = await fetch(
    `${baseApiUrl}/movie/${movieId}/videos?api_key=${apiKey}&language=en-US`
  );
  const data = await response.json();

  // Проверяем, есть ли видео
  if (data.results.length === 0) {
    // Если видео нет, то показываем сообщение об ошибке и выходим из функции

    // Показываем сообщение об ошибке и выходим из функции
    // trailerVideo.src = "path/to/placeholder/image.png";
    // trailerVideo.alt = "Извините, мы не смогли найти трейлер.";
    // modal.style.display = "block";
    return;
  }

  // Получаем первое видео из списка
  const video = data.results[0];

  // Устанавливаем источник видео для трейлера на URL видео на YouTube
  trailerVideo.src = `https://www.youtube.com/embed/${video.key}`;

  // Показываем модальное окно
  modal.style.display = 'block';

  // Ждем, пока модальное окно полностью раскроется
  await new Promise(resolve => {
    // modalContent.style.height = 'fit-content';
    modalContent.addEventListener('transitionend', resolve, { once: true });
  });
});

// Обрабатываем клики на кнопке закрытия модального окна
closeModalBtn.addEventListener('click', () => {
  // Скрываем модальное окно
  modal.style.display = 'none';

  // Сбрасываем источник и alt текст для трейлера
  trailerVideo.src = '';
  trailerVideo.alt = '';

  // Сбрасываем высоту содержимого модального окна (для следующего раза)
  // modalContent.style.height = 0;
});

// Обрабатываем клики на фоне модального окна
modal.addEventListener('click', event => {
  // Если клик был на фоне (т.е. не на содержимом модального окна), закрываем модальное окно
  if (event.target === modal) {
    closeModalBtn.click();
  }
});
