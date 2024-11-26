//import { Movie } from "../types";
import MovieList from "../components/MovieList";
import { useOutletContext } from 'react-router-dom';
import { MovieContext } from '../types';

function MovieListPage() {
  const pageTitle = "My favorite movies";

  //const [movies] = useState(defaultMovies);

  const { movies }: MovieContext = useOutletContext(); // Récupère les films via le contexte


  // (<MovieList movies={movies} />) -> movies (qui est l’état dynamique contenant la liste actuelle des films).
  return (
    <>
     <h1>{pageTitle}</h1>
     <MovieList movies={movies} /> {/* Passe la liste dynamique */}
    </>
  )
}

export default MovieListPage
