import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../api/movies-api';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

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

      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      )}
    </>
  );
}
