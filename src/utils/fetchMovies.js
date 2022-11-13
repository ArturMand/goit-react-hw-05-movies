import axios from 'axios';
const API__KEY = '2a9369ec86027d03e58d7a41eb0edc95';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchGetTrending = async () => {
  try {
    return await axios
      .get(`/trending/movie/day?api_key=${API__KEY}`)
      .then(r => r.data.results);
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchSearchMovies = async query => {
  try {
    return await axios
      .get(`/search/movie?api_key=${API__KEY}&language=en-US&query=${query}`)
      .then(r => r.data.results);
  } catch (error) {
    throw new Error(error);
  }
};
export const fetchGetMovieDetails = async movieId => {
  try {
    return await axios
      .get(`/movie/${movieId}?api_key=${API__KEY}&language=en-US`)
      .then(r => r.data);
  } catch (error) {
    throw new Error(error);
  }
};
export const fetchGetMovieCredits = async movieId => {
  try {
    return await axios
      .get(`/movie/${movieId}/credits?api_key=${API__KEY}&language=en-US`)
      .then(r => r.data.cast);
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchGetMovieReviews = async movieId => {
  try {
    return await axios
      .get(
        `/movie/${movieId}/reviews?api_key=${API__KEY}&language=en-US&page=1`
      )
      .then(r => r.data.results);
  } catch (error) {
    throw new Error(error);
  }
};
