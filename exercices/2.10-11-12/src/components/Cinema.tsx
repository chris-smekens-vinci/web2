import { Movie } from "../types";
//import MovieComp from "./MovieComp";

interface CinemaProps {
    name: string;
    movies: Movie[]; // Pour définir comme type un array d'un certain type en TS, il suffit d'ajouter des crochets [] à la suite du type. Par exemple, pour un array de Movie : movies: Movie[];
}

//movies contient un tableau d'objets représentant des movies.
//La fonction map permet d'itérer sur chacun des objets de movies et de générer un nouvel array d'éléments React qui seront rendus par React le moment venu.
//L'attribut key d'elements React qui se trouve dans un array afin de déterminer comment mettre à jour la vue générée par un composant quand il est "re-render".
const Cinema = (props: CinemaProps) => {
    const { name, movies } = props;
    return (
        <div>
            <h2>{name}</h2>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.title}>
                        <div className="movie-title">{movie.title}</div>
                        <div className="movie-director">Réalisé par : {movie.director}</div>
                        <div className="movie-duration">Durée : {movie.duration}</div>
                        <div className="movie-description">{movie.description}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cinema;

  