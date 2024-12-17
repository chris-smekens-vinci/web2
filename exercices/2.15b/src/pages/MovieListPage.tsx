import MovieList from "../components/MovieList";
import { useOutletContext } from 'react-router-dom';
import { MovieContext } from '../types';
import { deleteMovie } from '../utils/film-service';

function MovieListPage() {
  const pageTitle = "My favorite movies";

  const { movies, setMovies }: MovieContext = useOutletContext(); 

  const handleDelete = async (id: number) => {
    try {
        await deleteMovie(id);
        setMovies(movies.filter(movie => movie.id !== id));
    } catch (error) {
        console.error("Failed to delete movie:", error);
    }
  };

  return (
    <>
     <h1>{pageTitle}</h1>
     <MovieList movies={movies} onDelete={handleDelete} /> 
    </>
  )
}

export default MovieListPage
