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
    this.movies.push(movie);
    this.updateLocalStorage();
  }

  deleteMovie(movie) {
    const index = this.movies.findIndex(m => m.id === movie.id);
      this.movies.splice(index, 1);
      this.updateLocalStorage();
  }
}

