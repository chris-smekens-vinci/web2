import { useState } from 'react' //le hook useState de React, qui permet aux composants fonctionnels de gérer leur état interne.
import './ClickCounter.css'

interface ClickCounterProps {
    title : string;
    message10Clicks : string;
    hoverOverTheCounter : string;
};

//initialise une variable d'état count avec une valeur initiale de 0.
//setCount est une fonction qui permet de mettre à jour la l'état de count.
const ClickCounter = ({ title, message10Clicks, hoverOverTheCounter }: ClickCounterProps) => {
    const [count, setCount] = useState(0);
    const [mouseHover, setMouseHover] = useState(false);

    return (
        <div className="card">
            <h2>{title}</h2>
            <p className="mouseOnButton">{mouseHover && hoverOverTheCounter}</p>
            <button onClick={() => setCount((count) => count + 1)}
                    onMouseEnter={() => setMouseHover(true)}
                    onMouseLeave={() => setMouseHover(false)}> 
            count is {count}
            </button>
            {count >= 10 && <p className="message10Clicks">{message10Clicks}</p>}
            <p>
            Edit <code>src/App.tsx</code> and save to test HMR
            </p>
      </div>
    );
};

export default ClickCounter;

