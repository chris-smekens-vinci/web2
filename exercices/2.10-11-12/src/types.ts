interface Movie {
    title: string;
    director: string;
    duration: number;
    urlImage?: string; // "?" means that the property is optional
    description?: string;
    budget?: number;
};

interface MovieContext {
    movies: Movie[];
    movieAdded: (newMovie: Movie) => void;
};

export type { Movie, MovieContext };