import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../api/movies-api';
import MovieList from '../components/MovieList';

export default function HomePage() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      const movies = await getTrendingMovies();
      setMovies(movies);
    };

    fetchTrendingMovies();
  }, []);

  return (
    <>
      <h1>Trending movies</h1>

      {movies && <MovieList movies={movies} />}
    </>
  );
}
