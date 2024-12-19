import AddMovie from '../components/AddMovie';
import { useOutletContext } from 'react-router-dom';
import { MovieContext } from '../types';

const AddMoviePage = () => {
    const { movieAdded }: MovieContext = useOutletContext();
    return (
       <>
        <AddMovie onAddMovie={movieAdded}/>
       </>
    );
};

export default AddMoviePage;