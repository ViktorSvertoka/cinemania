import renderMoviesCards from './cards-rendering';
import LibraryAPI from './library-api-service';

const library = new LibraryAPI();
library.setLibrary();
checkStorage();

export function checkStorage() {
  library.setLibrary();
  if (library.movies.length === 0) {
    if (!document.querySelector('.my-lib__no-movies')) {
      return;
    }
    document
      .querySelector('.my-lib__no-movies')
      .classList.remove('visually-hidden');
    document.querySelector('.my-lib__gallery-list').innerHTML = '';
  } else {
    renderMoviesCards(library.movies, '.my-lib__gallery-list');
  }
}
