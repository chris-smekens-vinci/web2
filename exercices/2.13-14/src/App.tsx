import React, { useEffect, useState } from 'react';
import Joke from './components/Joke';
import { JokeType } from './types';
import './App.css';

const App: React.FC = () => {
  const [joke, setJoke] = useState<JokeType | null>(null);

  const fetchJoke = () => {
    fetch('https://v2.jokeapi.dev/joke/Any?type=single')
      .then(response => response.json())
      .then(data => setJoke(data));
  };

  useEffect(() => {
    fetchJoke(); // Appelle fetchJoke() lors du premier rendu du composant. Le code à l'intérieur de useEffect est une fonction qui sera exécutée après que le composant soit rendu.

    const interval = setInterval(fetchJoke, 10000); // Fetch a new joke every 10 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []); // Le tableau vide [] en second argument signifie que cet effet ne s'exécutera qu'une seule fois, après le premier rendu du composant.

  // Si joke est "truthy" (existe, non vide, non null, non undefined), alors la première partie est exécutée. Sinon, la seconde partie est exécutée.
  return (
    <div>
      <h1>Random Joke</h1>
      {joke ? <Joke joke={joke} /> : <p>Loading...</p>}
      <button className="reload-button" onClick={fetchJoke}>Reload Joke</button>
      <br />
      <br />
      <p>
        <cite>https://v2.jokeapi.dev/joke.category</cite>
      </p>
    </div>
  );
};

export default App;