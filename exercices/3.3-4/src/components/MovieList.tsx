import MovieCard from '../components/MovieCard';
import { Movie } from '../types';
import '../styles/MovieList.css';

interface MovieListProps {
    //name: string;
    movies: Movie[];
    onDelete: (id: number) => void;
};

// la collection de Movies est gérée dans le composant Movie
const MovieList = (props: MovieListProps) => {
    const { movies, onDelete } = props;
    return (
        <div className='movie-list'>
            <ul>
                {movies.map((movie) => (
                        <MovieCard key={movie.title} movie={movie} onDelete={onDelete} />
                ))}
            </ul>
        </div>
    );
};

export default MovieList;

