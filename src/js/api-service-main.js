import axios from 'axios';

export default class APIService {
  constructor() {
    this.key = '992758a4802a699e8df27d4d6efc34fb';
    this.baseURL = 'https://api.themoviedb.org/3/';
    this.page = 1;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  async getTrends(param) {
    try {
      const response = await axios.get(
        `${this.baseURL}trending/movie/${param}?api_key=${this.key}`
      );

      console.log(response.data.results);

      return response.data.results;
    } catch (error) {
      console.log(error);
    }
  }

  async getUpcoming() {
    try {
      const response = await axios.get(
        `${this.baseURL}movie/upcoming?api_key=${this.key}`
      );

      console.log(response.data.results);

      return response.data.results;
    } catch (error) {
      console.log(error);
    }
  }

  async searchMovieByQuery(query) {
    try {
      const response = await axios.get(
        `${this.baseURL}search/movie?api_key=${this.key}&query=${query}`
      );

      this.incrementPage();

      console.log(response.data.results);

      return response.data.results;
    } catch (error) {
      console.log(error);
    }
  }

  async getMovieInfo(id) {
    try {
      const response = await axios.get(
        `${this.baseURL}movie/${id}?api_key=${this.key}`
      );

      console.log(response.data);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async getMovieTrailer(id) {
    try {
      const response = await axios.get(
        `${this.baseURL}movie/${id}/videos?api_key=${this.key}`
      );

      console.log(response.data.results[0]);

      return response.data.results[0];
    } catch (error) {
      console.log(error);
    }
  }

  async getGenresList() {
    try {
      const response = await axios.get(
        `${this.baseURL}genre/movie/list?api_key=${this.key}`
      );

      console.log(response.data.genres);

      return response.data.genres;
    } catch (error) {
      console.log(error);
    }
  }

  async getMovieContries() {
    try {
      const response = await axios.get(
        `${this.baseURL}configuration/countries?api_key=${this.key}`
      );

      console.log(response.data);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}
