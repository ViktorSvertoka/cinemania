import LibraryAPI from './library-api-service';

const library = new LibraryAPI();

library.setLibrary();

export default class BtnState {
  constructor(btn, btnStateStorageKey, movie) {
    this.btn = btn;
    this.btnStateStorageKey = btnStateStorageKey;
    this.movie = movie;
  }

  setBtnState() {
      const isInLibrary = library.movies.some(m => m.id === this.movie.id);
      if (isInLibrary) {
        this.btn.setAttribute('data-action', 'remove');
        this.btn.textContent = 'Remove from library';
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
  }

  toAdd() {
      library.addMovie(this.movie);
      this.btn.removeEventListener('click', this.toAdd);
      this.btn.setAttribute('data-action', 'remove');
      localStorage.setItem(this.btnStateStorageKey, 'remove');
      this.btn.textContent = 'Remove from library';
    //   console.log(this.btn.getAttribute('data-action'));
  }

  toRemove() {
      library.deleteMovie(this.movie);
      this.btn.removeEventListener('click', this.toRemove);
      this.btn.setAttribute('data-action', 'add');
      localStorage.setItem(this.btnStateStorageKey, 'add');
      this.btn.textContent = 'Add to library';
    //   console.log(this.btn.getAttribute('data-action'));
  }
}