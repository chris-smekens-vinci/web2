import Cinema from "../Cinema";
import { Movie } from "../../types";

const CinemaPage = () => {
  const pageTitle = "Information about movies in cinemas";

  const cinema1Name = "UGC DeBrouckère";

  const moviesCinema1 : Movie[] = [
    {
      title: "SPIDER-MAN: ACROSS THE SPIDER-VERSE",
      director: "Joaquim Dos Santos, Kemp Powers, Justin K. Thompson",
      duration: 117,
      description: "Miles Morales revient pour le prochain chapitre de la saga Spider-Verse. Alors qu’il fait face à de nouveaux défis et rencontre différentes versions de Spider-Man à travers plusieurs dimensions, Miles doit accepter son identité tout en naviguant dans un multivers rempli de dangers, de découvertes et de possibilités infinies.",
    },
    {
      title: "THE BATMAN",
      director: "Matt Reeves",
      duration: 176,
      description: "Bruce Wayne, alias Batman, enquête sur une série de meurtres mystérieux qui secouent Gotham City. En tant que détective et justicier, il découvre un complot complexe lié à la corruption qui mine la ville, tout en affrontant des ennemis emblématiques comme le Riddler et en confrontant ses propres démons intérieurs."
    },
    {
      title: "SAW X",
      director: "Kevin Greutert",
      duration: 91,
      description: "Dans ce dernier chapitre de la saga *Saw*, John Kramer, alias Jigsaw, retourne à ses racines pour mener une mission personnelle en quête de justice. Après avoir découvert qu'il a été victime d'une arnaque médicale, il met en place des pièges macabres pour punir ceux qui ont abusé de sa confiance, tout en dévoilant des secrets du passé."
    },
    {
      title: "DEADPOOL & WOLVERINE",
      director: "Shawn Levy",
      duration: 104,
      description: "Deadpool revient pour sa troisième aventure, cette fois dans une aventure à travers le multivers. S'associant avec Wolverine, Deadpool affronte de nouveaux et anciens ennemis tout en naviguant à travers des réalités alternatives, apportant sa dose habituelle d'humour, d'action et de chaos à l'écran."
    }
  ];

  const cinema2Name = "Kinépolis Imagibraine";

  const moviesCinema2 : Movie[] = [
    {
      title: "BOYZ N THE HOOD",
      director: "John Singleton",
      duration: 112,
      description: "Ce film raconte l'histoire de Trey, un jeune homme qui grandit dans le quartier difficile de South Central à Los Angeles. En tant qu'adulte, il doit faire face aux défis de la violence, des choix de vie difficiles et des pressions sociales, tout en cherchant à trouver sa propre voie entre l'amitié, la famille et les attentes de la rue."
    },
    {
      title: "BAD BOYS: RIDE OR DIE",
      director: "Adil El Arbi, Bilall Fallah",
      duration: 124,
      description: "Dans cette nouvelle aventure explosive, les détectives Mike Lowrey et Marcus Burnett sont de retour pour affronter une menace redoutable. Alors qu'ils doivent naviguer entre leur amitié tumultueuse et les défis professionnels, ils sont déterminés à éliminer le crime à Miami tout en prouvant que leur lien est plus fort que jamais.",
    },
    {
      title: "IRON-MAN",
      director: "Jon Favreau",
      duration: 126,
      description: "Après avoir été enlevé par des terroristes, le génie industriel Tony Stark construit une armure high-tech pour s'échapper. De retour chez lui, il décide de perfectionner son invention pour devenir Iron Man, un super-héros qui lutte contre le mal tout en apprenant à assumer ses responsabilités.",
    },
    {
      title: "THE HANGOVER",
      director: "Todd Phillips",
      duration: 100,
      description: "Lors d'un enterrement de vie de garçon à Las Vegas, Doug et ses trois amis se réveillent sans aucun souvenir de la nuit précédente. Ils découvrent que Doug a disparu, et ils doivent retracer leurs pas à travers une série de situations imprévues et de rencontres folles pour le retrouver avant le mariage."
    }
  ];
  
  return (
    <div>
      <h1>{pageTitle}</h1>
      <Cinema name={cinema1Name} movies={moviesCinema1} />
      <Cinema name={cinema2Name} movies={moviesCinema2} />
    </div>
  );
};

export default CinemaPage;