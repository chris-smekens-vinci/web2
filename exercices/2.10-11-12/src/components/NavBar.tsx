import { Link } from "react-router-dom";
import '../css/NavBar.css';

const NavBar = () => {
  return (
	<nav className="navbar">
	  <Link to="/">Home</Link>
	  <Link to="/cinema">Cinema</Link>
	  <Link to="/movie-list">Movie List</Link>
	</nav>
  );
};

export default NavBar;