import { useState, SyntheticEvent } from "react";
import "../index.css";
import { useNavigate, useOutletContext } from "react-router-dom";
import { MovieContext } from "../types";

const LoginPage = () => {

   const { loginUser } : MovieContext = useOutletContext();
  
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");
  
    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        try {
        await loginUser({ username, password });
        navigate("/");
        } catch (err) {
        console.error("LoginPage::error: ", err);
            setError("This user does not exist !");
        }
    };
  
    const handleUsernameInputChange = (e: SyntheticEvent) => {
      const input = e.target as HTMLInputElement;
      setUsername(input.value);
    };
  
    const handlePasswordChange = (e: SyntheticEvent) => {
      const input = e.target as HTMLInputElement;
      setPassword(input.value);
    };
  
    return (
        <form onSubmit={handleSubmit} className="login-register-form">
          <h1>Sign In to Your Account</h1>
          <label htmlFor="username">Username</label>
          <input
            value={username}
            type="text"
            id="username"
            name="username"
            onChange={handleUsernameInputChange}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            value={password}
            type="text"
            id="password"
            name="password"
            onChange={handlePasswordChange}
            required
          />
          <button type="submit">Sign In</button>
          {error && <p className="error-message">{error}</p>}
        </form>
    );
  };
  
  export default LoginPage;
