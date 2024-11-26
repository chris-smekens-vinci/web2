import { Movie } from '../types';
import '../styles/MovieCard.css';

interface MovieListProps {
    //name: string;
    movies: Movie[];
};

// la collection de Movies est gérée dans le composant Movie
const MovieList = (props: MovieListProps) => {
    const { movies } = props;
    return (
        <div className='movie-card'>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.title}>
                        <img src={movie.urlImage} alt="poster" />
                        <strong>{movie.title}</strong>
                        <p>Réalisateur : {movie.director}</p>
                        <p>Durée : {movie.duration}</p>
                        <p>Description : {movie.description}</p>
                        <p>Budget : {movie.budget} millions</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MovieList;

