import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Movie, MovieContext } from "../types";
import '../styles/App.css';

const defaultMovies : Movie[] = [
  {
    title: "SPIDER-MAN",
    director: "Sam Raimi",
    duration : 121,
    urlImage: "https://m.media-amazon.com/images/M/MV5BZWM0OWVmNTEtNWVkOS00MzgyLTkyMzgtMmE2ZTZiNjY4MmFiXkEyXkFqcGc@._V1_.jpg",
    description: "Peter Parker, un jeune étudiant, est mordu par une araignée radioactive. Il découvre bientôt qu'il a des super-pouvoirs : il est capable de grimper aux murs, une force surhumaine et un 'sens d'araignée'.",
    budget: 139,
  },
  {
    title: "GLADIATOR",
    director: "Ridley Scott",
    duration : 155,
    urlImage: "https://m.media-amazon.com/images/I/71LPLHCs7HL.jpg",
    description: "Le général romain Maximus est le plus fidèle soutien de l'empereur Marc Aurèle, qu'il a conduit de victoire en victoire avec une bravoure et un dévouement exemplaires. Jaloux du prestige de Maximus, et plus encore de l'amour que lui voue l'empereur, le fils de Marc Aurèle, Commode, s'arroge brutalement le pouvoir, puis ordonne l'arrestation du général et son exécution. Maximus échappe à ses assassins mais ne peut empêcher le massacre de sa famille. Capturé par un marchand d'esclaves, il devient gladiateur et prépare sa vengeance.",
    budget: 103,
  },
  {
    title: "CASINO",
    director: "Martin Scorsese",
    duration : 178,
    urlImage: "https://m.media-amazon.com/images/M/MV5BMDRlZWZjZjYtYzY2NS00ZWVjLTkwYzAtZTA2ZDAzMGRiYmYwXkEyXkFqcGc@._V1_.jpg",
    description: "Dans le Las Vegas des années 1970, l'histoire suit Sam 'Ace' Rothstein, un expert des jeux, qui est chargé de gérer un casino pour la mafia. Alors qu'il s'efforce de maintenir l'ordre et de maximiser les profits, il se retrouve entraîné dans un monde de trahisons, de violence et de corruption, mettant en péril sa vie et celle de ses proches.",
    budget: 52,
  },
  {
    title: "MALCOM X",
    director: "Spike Lee",
    duration : 202,
    urlImage: "https://m.media-amazon.com/images/M/MV5BMTAzMjQ0NDMtY2I2Ny00M2FmLWEzNDQtNzgzYzIwZjhkZWRmXkEyXkFqcGc@._V1_.jpg",
    description: "Ce biopic puissant retrace la vie de Malcolm X, leader emblématique des droits civiques, de son enfance tumultueuse à sa transformation en figure militante. À travers ses luttes pour l'égalité et la justice, le film explore les thèmes de l'identité, de la foi et de la lutte contre l'oppression.",
    budget: 35,
  },
  {
    title: "THE PURSUIT OF HAPPYNESS",
    director: "Gabriele Muccino",
    duration : 117,
    urlImage: "https://m.media-amazon.com/images/M/MV5BMTQ5NjQ0NDI3NF5BMl5BanBnXkFtZTcwNDI0MjEzMw@@._V1_.jpg",
    description: "Basé sur une histoire vraie, le film suit Chris Gardner, un vendeur en difficulté qui, malgré l'adversité, se bat pour offrir une vie meilleure à son fils. En surmontant la pauvreté et les obstacles personnels, il poursuit son rêve de devenir courtier en bourse, illustrant la force de la détermination et de l'amour parental.",
    budget: 21,
  },
];

function App() {
  const title = "iMovies";
  const footerText = "© 2024 iMovies. All rights reserved.";

  const navigate = useNavigate();

  const [movies, setMovies] = useState(defaultMovies);
  const movieAdded = (newMovie: Movie) => {
      console.log("the movie to add is:", newMovie);
      setMovies([...movies, newMovie]); // ou bien -> setMovies(movies.concat(movie));
      navigate("/movie-list");
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

export default App
