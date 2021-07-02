import './App.css';
import MovieList from './MovieList';
import Nav from './Nav';
import {MovieProvider} from './MovieListContext';
import AddMovie from './AddMovie';


function App() {
  return (
    <MovieProvider>
      <div >
        <Nav />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
