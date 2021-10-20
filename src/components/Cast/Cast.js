import { useState, useEffect } from 'react';
import { getMovieCredits } from '../../api/movies-api';

export default function Cast({ movieId }) {
  const [cast, setCast] = useState(null);

  useEffect(() => {
    const fetchMovieCredits = async () => {
      const movieCredits = await getMovieCredits(movieId);
      setCast(movieCredits);
    };

    fetchMovieCredits();
  }, [movieId]);

  // const sortedCast = () => {
  //   if (!cast) {
  //     return;
  //   }

  //   return [...cast].sort((a, b) => b.popularity - a.popularity);
  // };

  return (
    <div>
      {cast && (
        <ul>
          {cast
            .map(item => {
              if (item.known_for_department === 'Acting') {
                return (
                  <li key={item.id}>
                    <img
                      src={`https://image.tmdb.org/t/p/w300${item.profile_path}`}
                      alt={item.title}
                    />
                    <p>{item.name}</p>
                    <p>
                      Character: <span>{item.character}</span>
                    </p>
                  </li>
                );
              }

              return null;
            })
            .slice(0, 12)}
        </ul>
      )}
    </div>
  );
}
