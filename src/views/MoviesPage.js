import { useState, useEffect } from 'react';
import { getMoviesByKeyWord } from '../api/movies-api';
import Form from '../components/Form';
import MovieList from '../components/MovieList';

export default function MoviesPage() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!query) {
      return;
    }

    async function fetchMovies() {
      try {
        //  setShowLoader(true);
        const fetechedMovies = await getMoviesByKeyWord(query);

        // if (!movies.length) {
        //   toast.error('Enter proper query', { theme: 'colored' });
        // }

        setMovies(fetechedMovies);
      } catch (error) {
        // toast.error(error.message, { theme: 'colored' });
      } finally {
        // setShowLoader(false);
      }
    }

    fetchMovies();
  }, [query]);

  const handleSubmit = value => setQuery(value);

  return (
    <>
      <Form handleSubmit={handleSubmit} />

      {movies && <MovieList movies={movies} />}
    </>
  );
}
