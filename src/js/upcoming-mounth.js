import APIService from './api-service-main';
import LibraryAPI from './library-api-service';
import BtnState from './btn-state';

const libraryApi = new LibraryAPI();

libraryApi.setLibrary();

const insertResult = document.querySelector('.upcoming__content');
const apiService = new APIService();

makeUpcomingMovieMarkup();

async function makeUpcomingMovieMarkup() {
  try {
    const data = await getRandomUpcomingMovie();
    const markup = createdMarkup(...data);
    insertResult.insertAdjacentHTML('beforeend', markup);
    const libraryBtn = document.getElementById('library-btn-home');
    const btn = new BtnState(libraryBtn, 'btn-upcoming', data[0]);
    btn.setBtnState();
  } catch (error) {
    console.log(error);
  }
}

async function getRandomUpcomingMovie() {
  try {
    const data = await apiService.getUpcoming();
    const randomMovie = data[Math.floor(Math.random() * data.length)];
    const randomMovieGenresId = randomMovie.genre_ids.slice(0, 2);
    const allGenres = await apiService.getGenresList();
    const randomMovieGenres = allGenres
      .filter(g => randomMovieGenresId.includes(g.id))
      .map(g => g.name)
      .join(', ');
    return [randomMovie, randomMovieGenres];
  } catch (error) {
    console.log(error);
  }
}

function createdMarkup(
  {
    id,
    poster_path,
    backdrop_path,
    title,
    overview,
    popularity,
    vote_average,
    vote_count,
    release_date,
  },
  genres
) {
  return `
      <div class="container-position">
        <div class="container-foto">
        <img class="upcoming__foto"
        src="https://image.tmdb.org/t/p/original/${poster_path}"
        srcset="https://image.tmdb.org/t/p/w1280/${backdrop_path} 1280w,
                https://image.tmdb.org/t/p/w780/${poster_path} 500w,
                https://image.tmdb.org/t/p/w300/${poster_path} 342w

        " sizes="(min-width: 1200px) 1280px, (min-width: 768px) 500px, (min-width: 480px) 342px, 100vw"        
  
        alt="Movie Poster">
  
        </div>
        <div class="container-text">
          <p class="upcoming__movie-name">${title}</p>
      <div class='container-text__table-block'>
      <div class='container-text__table-one'>
      <table class="upcoming__movie-data" id="t01">
        <tr class='upcoming__movie-data__row'>
          <td><p>Release date</p></td>
          <td><p class='upcoming__movie-data__release-date'>${release_date}</p></td>
        </tr>
        
        <tr class='upcoming__movie-data__row'>
          <td><p class='upcoming__movie-data__attribute'>Vote / Votes</p></td>
          <td> <p><span class='upcoming__movie-data__vote'>${vote_average}</span> / 
          <span class='upcoming__movie-data__vote'>${vote_count}</span></p></td>
        </tr>
      </table>
      </div>
  
      <div class='container-text__table-two'>
      <table class='upcoming__movie-data'>
          <tr class='upcoming__movie-data__row'>
          <td><p>Popularity</p></td>
          <td><p>${popularity}</p></td>
        </tr>
  
        <tr class='upcoming__movie-data__row'>
          <td><p>Genre</p></td>
          <td><p>${genres}</p></td>
        </tr>
      </table>
      </div>
      </div>
  
          <p class="upcoming__about-title">ABOUT</p>
          <p class="upcoming__about">${overview}</p>
  
          <button type="button" class="upcoming__btn" id ="library-btn-home" data-id=${id}>Remind me</button>
        </div>
      </div>
    `;
}
