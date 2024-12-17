import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Movie, MovieContext, NewMovie } from "../types";
import { useEffect } from "react";
import { addMovie, fetchMovies } from "../utils/film-service";
import '../styles/App.css';

function App() {
  const title = "iMovies";
  const footerText = "© 2024 iMovies. All rights reserved.";

  const navigate = useNavigate();

  const [movies, setMovies] = useState<Movie[]>([]);

  const initMovies = async () => {
    try {
      const movies = await fetchMovies();
      setMovies(movies);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    initMovies();
  }, []);

  const movieAdded = async (newMovie: NewMovie) => {
    console.log("Movie to add:", newMovie);
    try {
        const movieToBeAdded = await addMovie(newMovie);
        console.log("Movie added:", movieToBeAdded);
        await initMovies();
        navigate("/movie-list");
    } catch (error) {
        console.error(error);
    }
  };

  const movieContext: MovieContext = {
      movies,
      movieAdded
  };

  return (
    <div>
      <Header title={title}>
        <NavBar />
      </Header>

      <main className="page-content">
        <Outlet context={movieContext}/>
      </main>

      <Footer text={footerText} />
    </div>
  )
};

export default App;
