import React, { useState } from 'react';
import RandomDog from './RandomDog';
import '../styles/App.css';

const App: React.FC = () => {
  const [key, setKey] = useState<number>(0);

  const refreshDogs = () => {
    setKey(prevKey => prevKey + 1);
  };

  return (
    <div className="container">
      <button onClick={refreshDogs}>Refresh Dogs</button>
      <div className="dog-images">
        <RandomDog key={`${key}-1`} />
        <RandomDog key={`${key}-2`} />
        <RandomDog key={`${key}-3`} />
      </div>
    </div>
  );
};

export default App;