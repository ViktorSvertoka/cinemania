import LibraryAPI from './library-api-service';

const library = new LibraryAPI();

library.setLibrary();



// ============================= TESTS ================================

// localStorage.setItem(
//   'library',
//   JSON.stringify([
//     { mike: 'tyson' },
//     { floyd: 'mayweather' },
//     { name: 'mango' },
//   ])
// );

// library.setLibrary();

// library.addMovie({ name: 'cat' });
// library.addMovie({ name: 'cat' });

// library.addMovie({ name: 'pussy' });
// library.addMovie({ name: 'juicy' });
// library.addMovie({ name: 'mango' });
// library.addMovie({ name: 'poly' });
// library.addMovie({ name: 'ajax' });

// library.deleteMovie({ name: 'pussy' });
// library.deleteMovie({ name: 'pussy' });

// library.deleteMovie({ name: 'juicy' });
// library.deleteMovie({ name: 'juicy' });

// console.log(library.movies);
// console.log(localStorage.getItem('library'));
// console.log(JSON.stringify(library.movies) === localStorage.getItem('library'));
