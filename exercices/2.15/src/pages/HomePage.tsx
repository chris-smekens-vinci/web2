import MovieTitleList from "../components/MovieTitleList";
import { useOutletContext } from "react-router-dom";
import { MovieContext } from "../types";

const HomePage = () => {
    const { movies }: MovieContext = useOutletContext();
    return (
        <>
            <h1>Welcome to iMovies !</h1>
            <p>Your go-to app for discovering and managing movies!</p>
            <h2>What is iMovies ?</h2>
            <p>iMovies is an intuitive and user-friendly app that allows you to easily track and explore your favorite movies. From discovering new releases to adding your personal movie list, iMovies makes it simple to organize your cinematic experience. You can also find information about nearby cinemas, showtimes, and available screenings for your favorite films.</p>
            <div>
                <h2>My favorite movies</h2>
                <MovieTitleList movies={movies} />
            </div>
        </>
    );
}
export default HomePage;