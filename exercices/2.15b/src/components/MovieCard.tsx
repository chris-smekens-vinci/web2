import { Movie } from '../types';
import '../styles/MovieCard.css';

interface MovieCardProps {
    movie: Movie;
    onDelete: (id: number) => void;
};

const MovieCard = (props: MovieCardProps) => {
    const { movie, onDelete } = props;
    return (
        <div className='movie-card'>
            <li>
                <img src={movie.urlImage} alt="poster" />
                <strong>{movie.title}</strong>
                <p>Réalisateur : {movie.director}</p>
                <p>Durée : {movie.duration} minutes</p>
                <p>{movie.description}</p>
                <p>Budget : {movie.budget} millions</p>
                <button onClick={() => onDelete(movie.id)}>Delete</button>
            </li>
        </div>
    );
};

export default MovieCard;