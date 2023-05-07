import LibraryAPI from './library-api-service';

const library = new LibraryAPI();

library.setLibrary();

export default class BtnState {
  constructor(btn, btnStateStorageKey, fetchFunction) {
    this.btn = btn;
    this.btnStateStorageKey = btnStateStorageKey;
    this.fetchFunction = fetchFunction;
  }

  setBtnState() {
    this.fetchFunction().then(movie => {
      const isInLibrary = library.movies.some(m => m.id === movie.id);
      if (isInLibrary) {
        this.btn.setAttribute('data-action', 'remove');
        this.btn.textContent = 'Remove';
        // console.log(isInLibrary);
      } else {
        this.btn.setAttribute('data-action', 'add');
        this.btn.textContent = 'Add to library';
        // console.log(isInLibrary, 'else');
      }

      this.btn.addEventListener('click', () => {
        if (this.btn.getAttribute('data-action') === 'add') {
          this.toAdd();
        } else {
          this.toRemove();
        //   console.log('Callback:', this.fetchFunction);
        }
      });
    });
  }

  toAdd() {
    this.fetchFunction().then(movie => {
      library.addMovie(movie);
      this.btn.removeEventListener('click', this.toAdd);
      this.btn.setAttribute('data-action', 'remove');
      localStorage.setItem(this.btnStateStorageKey, 'remove');
      this.btn.textContent = 'Remove';
    //   console.log(this.btn.getAttribute('data-action'));
    });
  }

  toRemove() {
    this.fetchFunction().then(movie => {
      library.deleteMovie(movie);
      this.btn.removeEventListener('click', this.toRemove);
      this.btn.setAttribute('data-action', 'add');
      localStorage.setItem(this.btnStateStorageKey, 'add');
      this.btn.textContent = 'Add to library';
    //   console.log(this.btn.getAttribute('data-action'));
    });
  }
}