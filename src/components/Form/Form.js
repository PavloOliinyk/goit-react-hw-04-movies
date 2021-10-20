import { useState } from 'react';

export default function Form({ handleSubmit }) {
  const [value, setValue] = useState('');

  const handleChahge = e => {
    const { value } = e.target;

    setValue(value.toLowerCase());
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        handleSubmit(value);
      }}
    >
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
  );
}
