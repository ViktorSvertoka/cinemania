import renderMoviesCards from "./cards-rendering";
import LibraryAPI from "./library-api-service";

const library = new LibraryAPI();

library.setLibrary();

renderMoviesCards(library.movies,'.my-lib__gallery-list');