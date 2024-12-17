import { useMatch, useOutletContext } from "react-router-dom";
import { MovieContext } from "../types";
import MovieCard from "../components/MovieCard";
import { deleteMovie } from "../utils/film-service";

const MoviePage = () => {
    const { movies, setMovies }: MovieContext = useOutletContext();

    const match = useMatch("/movie/:id");
    const movieId = Number(match?.params.id);

    if (isNaN(movieId)) return <p>Movie not found</p>;

    const movieFound = movies.find((movie) => movie.id === movieId);

    if (!movieFound) return <p>Movie not found</p>;

    const handleDelete = async (id: number) => {
        try {
            await deleteMovie(id);
            setMovies(movies.filter((movie) => movie.id !== id));
        } catch (error) {
            console.error("Failed to delete movie:", error);
        }
    };

    return (
        <MovieCard movie={movieFound} onDelete={handleDelete} />
    );
};

export default MoviePage;