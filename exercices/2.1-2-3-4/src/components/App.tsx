/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
*/

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
    },
    {
      title: "GLADIATOR",
      director: "Ridley Scott",
    },
    {
      title: "BATMAN: THE DARK KNIGHT RISES",
      director: "Christopher Nolan",
    },
    {
      title: "MALCOM X",
      director: "Spike Lee",
    }
  ];

  const cinema2Name = "Kinépolis Imagibraine";

  const moviesCinema2 : Movie[] = [
    {
      title: "THE PURSUIT OF HAPPYNESS",
      director: "Gabriele Muccino",
    },
    {
      title: "BAD BOYS: RIDE OR DIE",
      director: "Adil El Arbi, Bilall Fallah",
    },
    {
      title: "IRON-MAN",
      director: "Jon Favreau",
    },
    {
      title: "CASINO",
      director: "Martin Scorsese",
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