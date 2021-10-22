import { useState, useEffect } from 'react';
import { useParams, useRouteMatch, Link, Route } from 'react-router-dom';
import { getMovieDetails } from '../api/movies-api';
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const { url } = useRouteMatch();

  useEffect(() => {
    async function fetchMovies() {
      try {
        //  setShowLoader(true);
        const movieInfo = await getMovieDetails(movieId);

        // if (!movies.length) {
        //   toast.error('Enter proper query', { theme: 'colored' });
        // }

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
    <>
      {movie && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
          />
          <p>
            Title: {movie.title}{' '}
            <span>({movie.release_date.split('-')[0]})</span>
          </p>
          <p>Votes: {movie.vote_average}</p>
          <p>Genres: {movie.genres?.map(({ name }) => name).join(', ')}</p>
          <p>Additional information</p>
          <ul>
            <li>
              <Link to={`${url}/cast`}>Cast</Link>
            </li>
            <li>
              <Link to={`${url}/reviews`}>Reviews</Link>
            </li>
          </ul>
          <Route path={`${url}/cast`}>
            <Cast movieId={movie.id} />
          </Route>
          <Route path={`${url}/reviews`}>
            <Reviews movieId={movie.id} />
          </Route>
        </div>
      )}
    </>
  );
}
