import renderMoviesCards from './cards-rendering';
import LibraryAPI from './library-api-service';

const library = new LibraryAPI();

library.setLibrary();
checkStorage();

window.addEventListener('storage', () => {
    console.log('hello');
  console.log(JSON.parse(localStorage.getItem(library.keyValue)));
  checkStorage();
});

function checkStorage() {
  if (library.movies.length === 0) {
    console.log(library.movies.length);
    if (!document.querySelector('.my-lib__no-movies')) {
      return;
    }
    document
      .querySelector('.my-lib__no-movies')
      .classList.remove('visually-hidden');
  } else {
    renderMoviesCards(library.movies, '.my-lib__gallery-list');
  }
}
