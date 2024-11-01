/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
*/

//import { Movie } from "../types";
import PageTitle from "./PageTitle";
import Cinema from "./Cinema";

const App = () => {
  const pageTitle = "Informations sur les films dans les cinémas";

  const cinema1Name = "UGC DeBrouckère";

  const moviesCinema1 = [
    {
      title: "SPIDER-MAN",
      director: "Sam Raimi",
    },
    {
      title: "GLADIATOR",
      director: "Ridley Scott",
    },
  ];

  const cinema2Name = "Kinépolis Imagibraine";

  const moviesCinema2 = [
    {
      title: "THE PURSUIT OF HAPPYNESS",
      director: "Gabriele Muccino",
    },
    {
      title: "BAD BOYS: RIDE OR DIE",
      director: "Adil El Arbi, Bilall Fallah",
    },
  ];
  
  return (
    <div>
      <PageTitle title={pageTitle} />

      <Cinema
        name={cinema1Name}
        movies={moviesCinema1}
      />

      <Cinema
        name={cinema2Name}
        movies={moviesCinema2}
      />
    </div>
  );
};

export default App;