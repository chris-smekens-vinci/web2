import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Movie, MovieContext, NewMovie, MaybeAuthenticatedUser, User, AuthenticatedUser } from "../types";
import { addMovie, fetchMovies } from "../utils/film-service";
import '../styles/App.css';
import { getAuthenticatedUser, storeAuthenticatedUser, clearAuthenticatedUser } from "../utils/session";

function App() {
  const title = "iMovies";
  const footerText = "© 2024 iMovies. All rights reserved.";

  // User
  const [authenticatedUser, setAuthenticatedUser] =
  useState<MaybeAuthenticatedUser>(undefined);

  // Navigation
  const navigate = useNavigate();

  // Movies
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
    const authenticatedUser = getAuthenticatedUser();
    if (authenticatedUser) {
      setAuthenticatedUser(authenticatedUser);
    }
  }, []);

  const movieAdded = async (newMovie: NewMovie) => {
    console.log("Movie to add:", newMovie);
    try {
        if (!authenticatedUser) {
          throw new Error("User is not authenticated");
        }
        const movieToBeAdded = await addMovie(newMovie, authenticatedUser);
        console.log("Movie added:", movieToBeAdded);
        await initMovies();
        navigate("/movie-list");
    } catch (error) {
        console.error(error);
    }
  };

  // Theme
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Register User
  const registerUser = async (newUser: User) => {
      try {
        const options = {
          method: "POST",
          body: JSON.stringify(newUser),
          headers: {
            "Content-Type": "application/json",
          },
        };

        const response = await fetch("/api/auths/register", options);

        if (!response.ok)
          throw new Error(
            `fetch error : ${response.status} : ${response.statusText}`
          );

        const createdUser: AuthenticatedUser = await response.json();

        setAuthenticatedUser(createdUser);
        storeAuthenticatedUser(createdUser);

        console.log("createdUser: ", createdUser);
      } catch (err) {
        console.error("registerUser::error: ", err);
        throw err;
      }
  }

  // Login User
  const loginUser = async (user: User) => {
    try {
      const options = {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await fetch("/api/auths/login", options);

      if (!response.ok)
        throw new Error(
          `fetch error : ${response.status} : ${response.statusText}`
        );

      const authenticatedUser: AuthenticatedUser = await response.json();
      console.log("authenticatedUser: ", authenticatedUser);

      setAuthenticatedUser(authenticatedUser);
      storeAuthenticatedUser(authenticatedUser);
      
    } catch (err) {
      console.error("loginUser::error: ", err);
      throw err;
    }
  };

  // Logout User
  const clearUser = () => {
    clearAuthenticatedUser();
    setAuthenticatedUser(undefined);
  };
  


  const movieContext: MovieContext = {
    movies,
    movieAdded,
    //setMovies,
    registerUser,
    loginUser,
  };

  return (
    <div className={`app ${theme}`}>
      <Header title={title} theme={theme} toggleTheme={toggleTheme}>
        <NavBar authentificatedUser={authenticatedUser} clearUser={clearUser} theme={theme}/>
      </Header>

      <main className="page-content">
        <Outlet context={movieContext}/>
      </main>

      <Footer text={footerText} theme={theme} toggleTheme={toggleTheme}/>
    </div>
  )
};

export default App;
