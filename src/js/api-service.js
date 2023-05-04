import axios from 'axios';
import { KEY } from './api-key.js';

const BASE_URL = 'https://api.themoviedb.org/3/';

export default class APIService {
  constructor() {
    this.page = 1;
  }

  async fetchGenres() {
    const {
      data: { genres },
    } = await axios.get(`${BASE_URL}/genre/movie/list?api_key=${KEY}`);
    return genres;
  }

  async search(type, query) {
    const { data } = await axios.get(
      `${BASE_URL}/search/${type}?query=${query}&api_key=${KEY}&page=${this.page}`
    );
    return data;
  }

  async fetchTrailer(id) {
    const { data } = await axios.get(
      `${BASE_URL}/movie/${id}/videos?api_key=${KEY}`
    );
    return data;
  }

  get page() {
    return this._page;
  }

  set page(newPage) {
    this._page = newPage;
  }
}
