//import { StrictMode } from 'react'
//import { createRoot } from 'react-dom/client'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from './components/App.tsx'
import HomePage from './pages/HomePage.tsx';
import CinemaPage from './pages/CinemaPage.tsx';
import MovieListPage from './pages/MovieListPage.tsx';
import AddMoviePage from './pages/AddMoviePage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/cinema",
        element: <CinemaPage />,
      },
      {
        path: "/movie-list",
        element: <MovieListPage />,
      },
      {
        path: "/add-movie",
        element: <AddMoviePage />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>  
  </React.StrictMode>
);

