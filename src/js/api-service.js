import axios from 'axios';
import { KEY } from './api-key.js';
const BASE_URL = 'https://api.themoviedb.org/3/';

axios
  .get(`${BASE_URL}trending/movie/week`, {
    params: {
      api_key: KEY,
    },
  })
  .then(response => {
    const movies = response.data.results;
    const movieList = document.getElementById('movie-list');

    movies.forEach(movie => {
      const li = document.createElement('li');
      const img = document.createElement('img');
      const h3 = document.createElement('h3');
      const p = document.createElement('p');
      const spanRating = document.createElement('span');
      const spanGenre = document.createElement('span');

      img.src = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
      h3.textContent = movie.title;
      p.textContent = movie.overview;

      axios
        .get(`${BASE_URL}movie/${movie.id}`, {
          params: {
            api_key: KEY,
          },
        })
        .then(response => {
          const genres = response.data.genres
            .slice(0, 2)
            .map(genre => genre.name);
          spanGenre.textContent = genres.join(', ');
          spanRating.textContent = response.data.vote_average;
        })
        .catch(error => {
          console.log(error);
        });

      li.appendChild(img);
      li.appendChild(h3);
      li.appendChild(p);
      li.appendChild(spanRating);
      li.appendChild(spanGenre);

      movieList.appendChild(li);
    });
  })
  .catch(error => {
    console.log(error);
  });
