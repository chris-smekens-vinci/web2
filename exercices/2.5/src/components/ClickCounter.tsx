import { useState } from 'react' //le hook useState de React, qui permet aux composants fonctionnels de gérer leur état interne.
import './ClickCounter.css'

//initialise une variable d'état count avec une valeur initiale de 0.
//setCount est une fonction qui permet de mettre à jour la l'état de count.
const ClickCounter = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="card">
            <button onClick={() => setCount((count) => count + 1)}> 
            count is {count}
            </button>
            <p>
            Edit <code>src/App.tsx</code> and save to test HMR
            </p>
      </div>
    );
};

export default ClickCounter;

