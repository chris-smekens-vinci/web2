import React, { useEffect, useState } from 'react';

const RandomDog: React.FC = () => {
  const [dogImage, setDogImage] = useState<string>('');

  const fetchDogImage = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      setDogImage(data.message);
    } catch (error) {
      console.error('Error fetching dog image:', error);
    }
  };

  useEffect(() => {
    fetchDogImage();
    const interval = setInterval(fetchDogImage, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {dogImage ? <img src={dogImage} alt="Random Dog" /> : <p>Loading...</p>}
    </div>
  );
};

export default RandomDog;