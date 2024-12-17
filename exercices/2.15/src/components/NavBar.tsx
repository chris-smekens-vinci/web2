import { Link } from "react-router-dom";
import '../styles/NavBar.css';

const NavBar = () => {
  return (
	<nav className="navbar">
	  <Link to="/">Home</Link>
	  <Link to="/cinema">Cinema</Link>
	  <Link to="/movie-list">Movie List</Link>
	  <Link to="/add-movie">Add a Movie</Link>
	</nav>
  );
};

export default NavBar;