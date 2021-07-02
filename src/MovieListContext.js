import React, {useState, createContext} from 'react';

export const MovieListContext = createContext('');

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: 'Anniyan',
      price: '$20',
      id: 1,
      description: 'This movie is about ....',
    },
    {
      name: 'OK Kanmani',
      price: '$10',
      id: 2,
      description: 'This movie is about ....',
    },
    {
      name: 'Kaala',
      price: '$30',
      id: 3,
      description: 'This movie is about ....',
    },
    {
      name: 'Chandramukhi',
      price: '$40',
      id: 4,
      description: 'This movie is about ....',
    },
  ]);

  return (
    <MovieListContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieListContext.Provider>
  );
};
