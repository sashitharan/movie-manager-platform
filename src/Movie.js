import React from 'react';

function Movie(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <h3> {props.price}</h3>
      <p>{props.description}</p>

    </div>
  );
}
export default Movie;
