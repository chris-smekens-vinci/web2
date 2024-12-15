import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Movie, MovieContext, NewMovie } from "../types";
import '../styles/App.css';

const defaultMovies : Movie[] = [
  {
    id: 1,
    title: "SPIDER-MAN",
    director: "Sam Raimi",
    duration : 121,
    urlImage: "https://m.media-amazon.com/images/M/MV5BZWM0OWVmNTEtNWVkOS00MzgyLTkyMzgtMmE2ZTZiNjY4MmFiXkEyXkFqcGc@._V1_.jpg",
    description: "Peter Parker, un jeune étudiant, est mordu par une araignée radioactive. Il découvre bientôt qu'il a des super-pouvoirs : il est capable de grimper aux murs, une force surhumaine et un 'sens d'araignée'.",
    budget: 139,
  },
  {
    id: 2,
    title: "GLADIATOR",
    director: "Ridley Scott",
    duration : 155,
    urlImage: "https://m.media-amazon.com/images/I/71LPLHCs7HL.jpg",
    description: "Le général romain Maximus, fidèle soutien de l'empereur Marc Aurèle, est trahi par le fils de ce dernier, Commode, qui s'empare du pouvoir et fait massacrer sa famille. Réduit en esclavage, Maximus devient gladiateur et prépare sa vengeance.",
    budget: 103,
  },
  {
    id: 3,
    title: "PULP FICTION",
    director: "Quentin Tarantino",
    duration : 154,
    urlImage: "https://m.media-amazon.com/images/M/MV5BYTViYTE3ZGQtNDBlMC00ZTAyLTkyODMtZGRiZDg0MjA2YThkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    description: "Ce film culte suit plusieurs histoires entrelacées de criminels, de gangsters et de boxeurs dans le Los Angeles des années 1990. Avec son mélange de dialogues percutants, de violence stylisée et de références pop, 'Pulp Fiction' est devenu un classique du cinéma indépendant et a marqué le style distinctif de Tarantino.",
    budget: 8,
  },
  {
    id: 4,
    title: "CASINO",
    director: "Martin Scorsese",
    duration : 178,
    urlImage: "https://m.media-amazon.com/images/M/MV5BMDRlZWZjZjYtYzY2NS00ZWVjLTkwYzAtZTA2ZDAzMGRiYmYwXkEyXkFqcGc@._V1_.jpg",
    description: "Dans le Las Vegas des années 1970, l'histoire suit Sam 'Ace' Rothstein, un expert des jeux, qui est chargé de gérer un casino pour la mafia. Alors qu'il s'efforce de maintenir l'ordre et de maximiser les profits, il se retrouve entraîné dans un monde de trahisons, de violence et de corruption, mettant en péril sa vie et celle de ses proches.",
    budget: 52,
  },
  {
    id: 5,
    title: "BLADE",
    director: "Stephen Norrington",
    duration : 120,
    urlImage: "https://m.media-amazon.com/images/M/MV5BNzAzMmY3OWMtNDgyMS00Y2U4LTlmM2UtY2YwMmM0MDI5ODJmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    description: "Dans un monde où vampires et humains coexistent, Blade, un chasseur mi-humain mi-vampire, utilise ses pouvoirs pour protéger l'humanité. Armé de compétences surnaturelles et d'armes redoutables, il lutte contre une menace vampirique qui pourrait plonger le monde dans les ténèbres.",
    budget: 45,
  },
  {
    id: 6,
    title: "THE HANGOVER PART II",
    director: "Todd Phillips",
    duration : 102,
    urlImage: "https://m.media-amazon.com/images/M/MV5BMTM2MTM4MzY2OV5BMl5BanBnXkFtZTcwNjQ3NzI4NA@@._V1_FMjpg_UX1000_.jpg",
    description: "Phil, Stu, Alan et Doug se rendent en Thaïlande pour le mariage de Stu. Après la soirée d'enterrement de vie de garçon, ils se réveillent dans une chambre d'hôtel à Bangkok, sans aucun souvenir de la nuit précédente. Ils doivent retrouver Teddy avant le mariage.",
    budget: 80,
  },
  {
    id: 7,
    title: "THE GODFATHER",
    director: "Francis Ford Coppola",
    duration : 175,
    urlImage: "https://m.media-amazon.com/images/M/MV5BYTJkNGQyZDgtZDQ0NC00MDM0LWEzZWQtYzUzZDEwMDljZWNjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    description: "Ce classique du cinéma suit la famille Corleone, une puissante dynastie mafieuse dirigée par le patriarche Vito Corleone. Alors que la famille lutte pour maintenir son pouvoir et son influence, le film explore des thèmes de loyauté, de trahison et de justice, offrant un regard sombre et captivant sur le crime organisé.",
    budget: 6,
  },
  {
    id: 8,
    title: "HOME ALONE",
    director: "Chris Columbus",
    duration : 103,
    urlImage: "https://m.media-amazon.com/images/M/MV5BMTUzMzg4MTg2M15BMl5BanBnXkFtZTYwNDM4OTk4._V1_.jpg",
    description: "Lorsque Kevin McCallister est oublié par sa famille pour les vacances de Noël, il doit se débrouiller seul pour protéger sa maison des cambrioleurs. Avec des pièges ingénieux et un esprit vif, il défend son domicile contre les voleurs maladroits, apprenant des leçons sur la famille et la responsabilité.",
    budget: 18,
  },
  {
    id: 9,
    title: "MALCOLM X",
    director: "Spike Lee",
    duration : 202,
    urlImage: "https://m.media-amazon.com/images/M/MV5BMTAzMjQ0NDMtY2I2Ny00M2FmLWEzNDQtNzgzYzIwZjhkZWRmXkEyXkFqcGc@._V1_.jpg",
    description: "Ce biopic puissant retrace la vie de Malcolm X, leader emblématique des droits civiques, de son enfance tumultueuse à sa transformation en figure militante. À travers ses luttes pour l'égalité et la justice, le film explore les thèmes de l'identité, de la foi et de la lutte contre l'oppression.",
    budget: 35,
  },
  {
    id: 10,
    title: "THE PURSUIT OF HAPPYNESS",
    director: "Gabriele Muccino",
    duration : 117,
    urlImage: "https://www.criticsinc.com/photos/movieposters/p/pursuitofhappyness.jpg",
    description: "Basé sur une histoire vraie, le film suit Chris Gardner, un vendeur en difficulté qui, malgré l'adversité, se bat pour offrir une vie meilleure à son fils. En surmontant la pauvreté et les obstacles personnels, il poursuit son rêve de devenir courtier en bourse, illustrant la force de la détermination et de l'amour parental.",
    budget: 21,
  }
];

function App() {
  const title = "iMovies";
  const footerText = "© 2024 iMovies. All rights reserved.";

  const navigate = useNavigate();

  const [movies, setMovies] = useState(defaultMovies);

  const movieAdded = (newMovie: NewMovie) => {
      console.log("the movie to add is:", newMovie);
      const nextId = Math.max(...movies.map((movie) => movie.id)) + 1;
      const movieToBeAdded = { id: nextId, ...newMovie };
      setMovies([...movies, movieToBeAdded]); 
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
