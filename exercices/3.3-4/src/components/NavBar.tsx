import { Link, useNavigate } from "react-router-dom";
import { MaybeAuthenticatedUser } from "../types";
import '../styles/NavBar.css';

interface NavBarProps {
  authentificatedUser: MaybeAuthenticatedUser;
  clearUser: () => void;
  theme: string;
};

const NavBar = (props: NavBarProps) => {
	const { theme, authentificatedUser, clearUser } = props;

	const handleLogout = () => {
		clearUser();
		navigate('/login'); // pour rediriger l'utilisateur vers la page de connexion
	};

	const navigate = useNavigate();

	if(authentificatedUser) {
		return (
			<nav className={`navbar ${theme}`}>
				<Link to="/">Home</Link>
				<Link to="/cinema">Cinema</Link>
				<Link to="/movie-list">Movie List</Link>
				<Link to="/add-movie">Add a Movie</Link>
				<button onClick={handleLogout}>Log Out</button>
			</nav>
		);
	}
	return (
		<nav className={`navbar ${theme}`}>
			<Link to="/">Home</Link>
			<Link to="/cinema">Cinema</Link>
			<Link to="/movie-list">Movie List</Link>
			<Link to="/login">Login</Link>
			<Link to="/register">Register</Link>
		</nav>
  	);
};

export default NavBar;