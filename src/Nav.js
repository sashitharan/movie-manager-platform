import React, {useState, useContext} from 'react';
import {MovieListContext} from './MovieListContext';


function Nav() {
    const [movies, setMovies] = useContext(MovieListContext);

    return (
        <div>
            <h3>Movie Manager</h3>
            <p >List of Movies:{movies.length} </p>
        </div>
    )
}
export default Nav;