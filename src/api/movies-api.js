const API_KEY = '74b3d185775f996114b8f83bcbb83c33';
const BASE_URL = 'https://api.themoviedb.org/3/';

// ==========  By Trend  ==========
export const getTrendingMovies = async (currentPage = 1) => {
  const url = `${BASE_URL}trending/movie/day?api_key=${API_KEY}&page=${currentPage}`;

  const response = await fetch(url);
  const { results } = await response.json();
  return response.ok ? results : Promise.reject(new Error('Not found'));
};

// ==========  By Keyword  ==========
export const getMoviesByKeyWord = async (query, currentPage = 1) => {
  const url = `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=${currentPage}&include_adult=false`;

  const response = await fetch(url);
  const { results } = await response.json();
  return response.ok ? results : Promise.reject(new Error('Not found'));
};

export const getMovieDetails = async (movieId = null) => {
  const url = `${BASE_URL}movie/${movieId}?&api_key=${API_KEY}&language=en-US`;

  const response = await fetch(url);
  const movie = await response.json();
  return response.ok ? movie : Promise.reject(new Error('Not found'));
};

export const getMovieCredits = async movieId => {
  const url = `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`;
  const response = await fetch(url);
  const { cast } = await response.json();
  return response.ok ? cast : Promise.reject(new Error('Not found'));
};

export const getMovieReviews = async movieId => {
  const url = `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`;

  const response = await fetch(url);
  const { results } = await response.json();
  return response.ok
    ? results.length > 1
      ? results
      : null
    : Promise.reject(new Error('Not found'));
};
