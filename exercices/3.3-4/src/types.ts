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
    //setMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
    movieAdded: (newMovie: NewMovie) => void;
    registerUser: (newUser: User) => Promise<void>;
    loginUser: (user: User) => Promise<void>;
};

type NewMovie = Omit<Movie, "id">;

type User = {
    username: string;
    password: string;
};

type AuthenticatedUser = {
    username: string;
    token: string;
};

type MaybeAuthenticatedUser = AuthenticatedUser | undefined;

export type { Movie, MovieContext, NewMovie, User, AuthenticatedUser, MaybeAuthenticatedUser };