export default class LibraryAPI {
  constructor() {
    this.keyValue = 'library';
    this.movies = localStorage.getItem(this.keyValue);
  }

  updateLocalStorage() {
    localStorage.setItem(this.keyValue, JSON.stringify(this.movies));
    console.log(this.movies, 'updated localS');
  }

  setLibrary() {
    const localStorageData = localStorage.getItem(this.keyValue);

    if (localStorageData) {
      this.movies = JSON.parse(localStorageData);
    } else {
      localStorage.setItem(this.keyValue, JSON.stringify([]));
      this.movies = [];
    }

    console.log(this.movies, 'this.movies');
  }

  addMovie(movie) {
    if (!this.movies.some(m => m.id === movie.id)) {
    this.movies.push(movie);
    this.updateLocalStorage();
    } else {
      console.log('movie already in library', movie.id, movie.title);
      return;
    }
  }

  deleteMovie(movie) {
    const index = this.movies.findIndex(m => m.id === movie.id);
    if (index !== -1) {
      this.movies.splice(index, 1);
      this.updateLocalStorage();
    } else {
      console.log('there is no such movie', movie.id, movie.title);
      return;
    }
  }
}
