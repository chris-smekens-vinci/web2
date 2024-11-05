import Header from "./Header";
import './App.css'
import PageTitle from "./PageTitle";
import Cinema from "./Cinema";
import { Movie } from "../types";
import Footer from "./Footer";

const App = () => {
  const pageTitle = "Informations sur les films dans les cinémas";

  const cinema1Name = "UGC DeBrouckère";

  const moviesCinema1 : Movie[] = [
    {
      title: "SPIDER-MAN",
      director: "Sam Raimi",
      description: "Peter Parker, un jeune étudiant, est mordu par une araignée radioactive. Il découvre bientôt qu'il a des super-pouvoirs : il est capable de grimper aux murs, une force surhumaine et un 'sens d'araignée'.",
    },
    {
      title: "GLADIATOR",
      director: "Ridley Scott",
      description: "Maximus, un général romain trahi et réduit à l'esclavage, se bat pour sa survie et cherche à venger la mort de sa famille. Dans l'arène, il devient gladiateur et se bat pour la gloire, tout en cherchant à renverser l'empereur corrompu Commode."
    },
    {
      title: "BATMAN: THE DARK KNIGHT",
      director: "Christopher Nolan",
      description: "Alors que Gotham City est plongée dans le chaos, Batman s'allie au procureur de district Harvey Dent et au lieutenant Jim Gordon pour combattre le crime. Cependant, l'arrivée du Joker, un criminel psychopathe, teste leurs limites et menace de plonger la ville dans l'anarchie.",
    },
    {
      title: "MALCOM X",
      director: "Spike Lee",
      description: "Ce biopic puissant retrace la vie de Malcolm X, leader emblématique des droits civiques, de son enfance tumultueuse à sa transformation en figure militante. À travers ses luttes pour l'égalité et la justice, le film explore les thèmes de l'identité, de la foi et de la lutte contre l'oppression.",
    }
  ];

  const cinema2Name = "Kinépolis Imagibraine";

  const moviesCinema2 : Movie[] = [
    {
      title: "THE PURSUIT OF HAPPYNESS",
      director: "Gabriele Muccino",
      description: "Basé sur une histoire vraie, le film suit Chris Gardner, un vendeur en difficulté qui, malgré l'adversité, se bat pour offrir une vie meilleure à son fils. En surmontant la pauvreté et les obstacles personnels, il poursuit son rêve de devenir courtier en bourse, illustrant la force de la détermination et de l'amour parental.",
    },
    {
      title: "BAD BOYS: RIDE OR DIE",
      director: "Adil El Arbi, Bilall Fallah",
      description: "Dans cette nouvelle aventure explosive, les détectives Mike Lowrey et Marcus Burnett sont de retour pour affronter une menace redoutable. Alors qu'ils doivent naviguer entre leur amitié tumultueuse et les défis professionnels, ils sont déterminés à éliminer le crime à Miami tout en prouvant que leur lien est plus fort que jamais.",
    },
    {
      title: "IRON-MAN",
      director: "Jon Favreau",
      description: "Après avoir été enlevé par des terroristes, le génie industriel Tony Stark construit une armure high-tech pour s'échapper. De retour chez lui, il décide de perfectionner son invention pour devenir Iron Man, un super-héros qui lutte contre le mal tout en apprenant à assumer ses responsabilités.",
    },
    {
      title: "CASINO",
      director: "Martin Scorsese",
      description: "Dans le Las Vegas des années 1970, l'histoire suit Sam 'Ace' Rothstein, un expert des jeux, qui est chargé de gérer un casino pour la mafia. Alors qu'il s'efforce de maintenir l'ordre et de maximiser les profits, il se retrouve entraîné dans un monde de trahisons, de violence et de corruption, mettant en péril sa vie et celle de ses proches.",
    }
  ];
  
  return (
    <div>
      <Header urlLogo="https://images.unsplash.com/photo-1563381013529-1c922c80ac8d?q=80&w=3213&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        <h1>SM Theaters : Movies</h1>
      </Header>

      <main className="page-content">
        <PageTitle title={pageTitle} />

        <Cinema
          name={cinema1Name}
          movies={moviesCinema1}
        />

        <Cinema
          name={cinema2Name}
          movies={moviesCinema2}
        />
      </main>
      <Footer urlLogo="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        <p>© 2024 Slime Movie Theaters</p>
      </Footer>
    </div>
  );
};

export default App;