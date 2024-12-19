import { Link } from "react-router-dom";
import '../styles/NavBar.css';

interface NavBarProps {
  theme: string;
};

const NavBar = (props: NavBarProps) => {
	const { theme } = props;
	return (
		<nav className={`navbar ${theme}`}>
		<Link to="/">Home</Link>
		<Link to="/cinema">Cinema</Link>
		<Link to="/movie-list">Movie List</Link>
		<Link to="/add-movie">Add a Movie</Link>
		</nav>
  	);
};

export default NavBar;