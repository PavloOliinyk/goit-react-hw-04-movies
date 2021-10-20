import { Link } from 'react-router-dom';

export default function MovieList({ movies }) {
  // const { url } = useRouteMatch();

  // console.log(url);

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
}
