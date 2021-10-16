import { useState, useEffect } from 'react';
import { getMoviesByKeyWord } from '../api/movies-api';

export default function MoviesPage() {
  const [value, setValue] = useState('');
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

  const handleChahge = e => {
    const { value } = e.target;

    setValue(value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    setQuery(value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          // className={s.SearchFormInput}
          type="text"
          autoComplete="off"
          name="query"
          autoFocus
          value={value}
          // placeholder="Search images and photos"
          onChange={handleChahge}
        />
        <button type="submit">Search movies</button>
      </form>

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
