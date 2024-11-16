import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import '../css/App.css';


function App() {
  const title = "iMovies";
  const footerText = "© 2024 iMovies. All rights reserved.";
  return (
    <div>
      <Header title={title}>
        <NavBar />
      </Header>
      <main className="page-content">
        <Outlet />
      </main>
      <Footer text={footerText} />
    </div>
  )
};

export default App
