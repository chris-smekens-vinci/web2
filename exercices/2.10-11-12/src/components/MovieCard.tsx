import { Movie } from '../types';
import '../styles/MovieCard.css';

interface MovieCardProps {
    movie: Movie;
};

const MovieCard = (props: MovieCardProps) => {
    const { movie } = props;
    return (
        <div className='movie-card'>
            <li>
                <img src={movie.urlImage} alt="poster" />
                <strong>{movie.title}</strong>
                <p>Réalisateur : {movie.director}</p>
                <p>Durée : {movie.duration}</p>
                <p>Description : {movie.description}</p>
                <p>Budget : {movie.budget} millions</p>
            </li>
        </div>
    );
};

export default MovieCard;