import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Form({ handleSubmit }) {
  const location = useLocation();
  const queryURL = new URLSearchParams(location.search).get('query');
  const [value, setValue] = useState('');

  const handleChahge = e => {
    const { value } = e.target;

    setValue(value.toLowerCase());
  };

  useEffect(() => {
    if (!queryURL) {
      setValue('');
    }

    setValue(queryURL);
  }, [queryURL]);

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        if (!value) {
          toast.warn('Try to type:)', { theme: 'colored' });
          return;
        }

        handleSubmit(value);
      }}
    >
      <input
        // className={s.SearchFormInput}
        type="text"
        autoComplete="off"
        name="query"
        autoFocus
        value={value ?? ''}
        placeholder="Type movie title"
        onChange={handleChahge}
      />
      <button type="submit" style={{ marginLeft: '10px' }}>
        Search movies
      </button>
    </form>
  );
}
