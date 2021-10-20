import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getMovieDetails } from '../api/movies-api';

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState({});

  const { movieId } = useParams();

  useEffect(() => {
    async function fetchMovies() {
      try {
        //  setShowLoader(true);
        const movieInfo = await getMovieDetails(movieId);

        // if (!movies.length) {
        //   toast.error('Enter proper query', { theme: 'colored' });
        // }

        console.log(movieInfo);

        setMovie({ ...movieInfo });
      } catch (error) {
        // toast.error(error.message, { theme: 'colored' });
      } finally {
        // setShowLoader(false);
      }
    }

    fetchMovies();
  }, [movieId]);

  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
      />
      <p>Title: {movie.title}</p>
      <p>Votes: {movie.vote_average}</p>
      <p>Genres: {movie.genres?.map(({ name }) => name).join(', ')}</p>
      <p>Additional information</p>
      <ul>
        <li>Cast</li>
        <li>Reviews</li>
      </ul>
    </div>
  );
}
