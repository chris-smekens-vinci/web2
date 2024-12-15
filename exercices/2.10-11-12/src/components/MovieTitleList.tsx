import { Link } from 'react-router-dom';
import { Movie } from '../types';
import '../styles/MovieTitleList.css';

interface MovieTitleListProps {
    movies: Movie[];
};

const MovieTitleList = (props: MovieTitleListProps) => {
    const { movies } = props;
    return (
        <div className="movie-title-list">
            <ul className="movie-list-home">
                {movies.map((movie) => (
                    <li key={movie.title} className="movie-list-item">
                        <Link to={`/movie/${movie.id}`} className="movie-link">
                            <strong>{movie.title}</strong>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MovieTitleList;