import React, {useState, useContext} from 'react';
import {MovieListContext} from './MovieListContext';

export default function AddMovie() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [movies, setMovies] = useContext(MovieListContext);
  const [description, setDescription] = useState('');

  function addDescription(e) {
    setDescription(e.target.value);
  }

  function updateName(e) {
    setName(e.target.value);
  }

  function updatePrice(e) {
    setPrice(e.target.value);
  }

  function addMovie(e) {
    e.preventDefault();
    setMovies((prevMovies) => [...prevMovies, {name: name, price: price, description: description}]);
  }

  return (
    <form onSubmit={addMovie}>
      Enter name:{' '}
      <input type="text" name="name" value={name} onChange={updateName} />
      <br />
      Enter price:{' '}
      <input type="text" name="price" value={price} onChange={updatePrice} placeholder='$'/>
      <br />
      Enter description:
      <input
        type="text"
        name="description"
        value={description}
        onChange={addDescription}
      />
      <br />
      <button style={{color: 'green'}}>submit</button>
    </form>
  );
}
