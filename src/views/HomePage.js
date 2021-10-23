import { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import { toast } from 'react-toastify';

import { getTrendingMovies } from '../api/movies-api';
import MovieList from '../components/MovieList';

export default function HomePage() {
  const [movies, setMovies] = useState(null);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setShowLoader(true);
        const movies = await getTrendingMovies();
        setMovies(movies);
      } catch (error) {
        toast.error(error.message, { theme: 'colored' });
      } finally {
        setShowLoader(false);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <>
      <h1>Trending movies today</h1>
      {showLoader && (
        <Loader
          type="Oval"
          color="#00BFFF"
          height={80}
          width={80}
          timeout={3000}
          style={{ textAlign: 'center' }}
        />
      )}

      {movies && <MovieList movies={movies} />}
    </>
  );
}
