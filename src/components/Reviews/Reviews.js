import { useState, useEffect } from 'react';
import { getMovieReviews } from '../../api/movies-api';
import Notification from '../Notification';

export default function Reviews({ movieId }) {
  const [review, setReview] = useState(null);

  useEffect(() => {
    const fetchMovieReview = async () => {
      const movieCredits = await getMovieReviews(movieId);
      setReview(movieCredits);
    };

    fetchMovieReview();
  }, [movieId]);

  return (
    <div>
      {review ? (
        <ul>
          {review.map(item => {
            return (
              <li key={item.id}>
                <h3>{item.author}</h3>
                <p>{item.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <Notification />
      )}
    </div>
  );
}
