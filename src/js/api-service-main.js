import axios from 'axios';

export default class APIService {
  constructor() {
    this.key = '992758a4802a699e8df27d4d6efc34fb';
    this.baseURL = 'https://api.themoviedb.org/3/';
    this.page = 0;
  }

  resetPage() {
    this.page = 0;
  }

  async getTrends(param, page) {
    if (arguments.length < 2) {
      try {
        this.page += 1;
        const response = await axios.get(
          `${this.baseURL}trending/movie/${param}?api_key=${this.key}&page=${this.page}`
        );

        console.log(response.data.results);

        return response.data.results;
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const response = await axios.get(
          `${this.baseURL}trending/movie/${param}?api_key=${this.key}&page=${page}`
        );

        console.log(response.data);

        return response.data;
      } catch (error) {
        console.log(error);
      }
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

  async searchMovieByQuery(query, page) {
    if (arguments.length < 2) {
      try {
        this.page += 1;
        const response = await axios.get(
          `${this.baseURL}search/movie?api_key=${this.key}&query=${query}&page=${this.page}`
        );

        return response.data.results;
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const response = await axios.get(
          `${this.baseURL}search/movie?api_key=${this.key}&query=${query}&page=${page}`
        );

        return response.data;
      } catch (error) {
        console.log(error);
      }
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
