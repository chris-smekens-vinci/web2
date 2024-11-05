import { Movie } from "../types";
import { useState } from "react";
import './MovieComp.css';

interface MovieCompProps {
  movie: Movie;
};

const MovieComp = (props: MovieCompProps) => {
  const [showDescription, setShowDescription] = useState(false);
  const { movie } = props;
  return (
    <li>
      <p>
        <strong onClick={() => setShowDescription(!showDescription)}>{movie.title}</strong> - Réalisateur : {movie.director}
      </p>
        {showDescription && (
          <p>
            <h4>Description : </h4>
            <p className="description">{movie.description}</p>
          </p>
        )}
    </li> 
  );
};

export default MovieComp;