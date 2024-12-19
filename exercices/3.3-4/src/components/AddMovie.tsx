import { Movie } from "../types";
import { SyntheticEvent, useState } from "react";
import '../styles/AddMovie.css';

interface AddMovieProps {
    onAddMovie: (movies: Movie) => void;
};

const AddMovie = ({onAddMovie}: AddMovieProps) => {
    // Variables d'états pour les champs du formulaire
    const [title, setTitle] = useState("");
    const [director, setDirector] = useState("");
    const [duration, setDuration] = useState(0);
    const [urlImage, setUrlImage] = useState("");
    const [description, setDescription] = useState("");
    const [budget, setBudget] = useState(0);

    // L'objet "event" : Stopper l'action par défaut associée à un événement. Et lorsqu'on attache une même callback à une multitude d'éléments, pour retrouver la cible de l'événement.
    // Grâce à l'objet "event", nous avons accès à la valeur de chaque input via e.target.value.
    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        onAddMovie({ title, director, duration, urlImage, description, budget });
        setTitle("");
        setDirector("");
        setDuration(0);
        setUrlImage("");
        setDescription("");
        setBudget(0);
    };

    return (
        <form onSubmit={handleSubmit} className="movie-form">
            <h1>Add a movie</h1>
            <label>Title *</label>
            <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} required />
            <label>Director *</label>
            <input type="text" value={director} onChange={(event) => setDirector(event.target.value)} required />
            <label>Duration *</label>
            <input type="number" value={duration} onChange={(event) => setDuration(parseInt(event.target.value))} required />
            <label>Film poster (url)</label>
            <input type="text" value={urlImage} onChange={(event) => setUrlImage(event.target.value)} />
            <label>Description</label>
            <textarea value={description} onChange={(event) => setDescription(event.target.value)} />
            <label>Budget (in millions)</label>
            <input type="number" value={budget} onChange={(event) => setBudget(parseInt(event.target.value))} />
            <button type="submit">Add Movie</button>
        </form>
    );
};

export default AddMovie;