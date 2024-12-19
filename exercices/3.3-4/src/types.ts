interface Movie {
    id: number;
    title: string;
    director: string;
    duration: number;
    urlImage?: string; // "?" means that the property is optional
    description?: string;
    budget?: number;
};

interface MovieContext {
    movies: Movie[];
    setMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
    movieAdded: (newMovie: NewMovie) => void;
};

type NewMovie = Omit<Movie, "id">;

export type { Movie, MovieContext, NewMovie };