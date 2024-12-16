import React, { useState } from 'react';
import RandomDog from './RandomDog';
import '../styles/App.css';

const App: React.FC = () => {
  const [key] = useState<number>(0);

  return (
    <div className="container">
      <div className="dog-images">
        <RandomDog key={`${key}-1`} />
        <RandomDog key={`${key}-2`} />
        <RandomDog key={`${key}-3`} />
      </div>
    </div>
  );
};

export default App;