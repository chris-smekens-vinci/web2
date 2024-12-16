import React from 'react';
import { JokeType } from '../types';

interface JokeProps {
  joke: JokeType;
};

const Joke: React.FC<JokeProps> = ({ joke }) => {
  return (
    <div>
      <h2>Category: {joke.category}</h2>
      <p>{joke.joke}</p>
    </div>
  );
};

export default Joke;