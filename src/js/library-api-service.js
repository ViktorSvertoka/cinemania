export default class LibraryAPI {
  constructor() {
    this.keyValue = 'library';
    this.movies = localStorage.getItem(this.keyValue);
  }

  updateLocalStorage() {
    localStorage.setItem(this.keyValue, JSON.stringify(this.movies));
  }

  setLibrary() {
    const localStorageData = localStorage.getItem(this.keyValue);

    if (localStorageData) {
      this.movies = JSON.parse(localStorageData);
    } else {
      localStorage.setItem(this.keyValue, JSON.stringify([]));
      this.movies = [];
    }

    // console.log(this.movies);
  }

  addMovie(movie) {
    if (!JSON.stringify(this.movies).includes(JSON.stringify(movie))) {
      this.movies.push(movie);
      this.updateLocalStorage();
      return;
    } else {
      console.log('movie already in library', movie);
    }
  }

  deleteMovie(movie) {
    if (JSON.stringify(this.movies).includes(JSON.stringify(movie))) {
      for (let i = 0; i < this.movies.length; i++) {
        if (JSON.stringify(this.movies[i]) === JSON.stringify(movie)) {
          this.movies.splice(i, 1);
          this.updateLocalStorage();
          return;
        }
      }
    } else {
      console.log('there is no such movie', movie);
    }
  }
}
