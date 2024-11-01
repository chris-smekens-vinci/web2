import { Movie } from "../types";

interface CinemaProps {
    name: string;
    movies: Movie[]; // Pour définir comme type un array d'un certain type en TS, il suffit d'ajouter des crochets [] à la suite du type. Par exemple, pour un array de Movie : movies: Movie[];
}

//movies contient un tableau d'objets représentant des movies.
//La fonction map permet d'itérer sur chacun des objets de movies et de générer un nouvel array d'éléments React qui seront rendus par React le moment venu.
//L'attribut key d'elements React qui se trouve dans un array afin de déterminer comment mettre à jour la vue générée par un composant quand il est "re-render".
const Cinema = (props: CinemaProps) => ( 
    <div>
      <h2>{props.name}</h2>
        <ul>
            {props.movies.map((movie) => (
                <li key={movie.title}>
                    <strong>{movie.title}</strong> - Réalisateur :{movie.director}
                </li>            
            ))}
        </ul>
    </div>
);

export default Cinema;

  