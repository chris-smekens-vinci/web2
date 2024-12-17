import { Movie } from '../types';
import '../styles/MovieCard.css';
import { TrashIcon } from '@heroicons/react/20/solid';

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
                <TrashIcon className="trash-icon" onClick={() => onDelete(movie.id)} />
            </li>
        </div>
    );
};

export default MovieCard;