interface Movie {
    title: string;
    director: string;
    duration: number;
    urlImage?: string; // "?" means that the property is optional
    description?: string;
    budget?: number;
};

export type { Movie };