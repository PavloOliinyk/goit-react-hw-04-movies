import { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import { useHistory, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

import { getMoviesByKeyWord } from '../api/movies-api';
import Form from '../components/Form';
import MovieList from '../components/MovieList';

export default function MoviesPage() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState(null);
  const [showLoader, setShowLoader] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const queryURL = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    if (!queryURL) {
      setMovies(null);
      return;
    }

    async function fetchMovies() {
      try {
        setShowLoader(true);
        const fetchedMovies = await getMoviesByKeyWord(queryURL ?? query);

        if (!fetchedMovies.length) {
          toast.error('Enter proper query', { theme: 'colored' });
        }

        setMovies(fetchedMovies);
      } catch (error) {
        toast.error(error.message, { theme: 'colored' });
      } finally {
        setShowLoader(false);
      }
    }

    fetchMovies();
  }, [query, queryURL]);

  const handleSubmit = value => {
    setQuery(value);
    history.push({ ...location, search: `query=${value}` });
  };

  return (
    <>
      <Form handleSubmit={handleSubmit} />

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
