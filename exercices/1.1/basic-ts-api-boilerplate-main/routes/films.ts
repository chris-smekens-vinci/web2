import { Router } from "express";

import path from "node:path";
import { Film } from "../types";
import { parse } from "../utils/json";

const router = Router();

const jsonDbPath = path.join(__dirname, "/../data/films.json");

const defaultFilms: Film[] = [
    {
        id: 1,
        title: "Spider-Man",
        director: "Sam Raimi",
        duration: 121,
        budget: 139,
        description: "https://example.com/spiderman",
        imageUrl: "https://example.com/spiderman.jpg"
    },
    {
        id: 2,
        title: "Iron Man",
        director: "Jon Favreau",
        duration: 126,
        budget: 140,
        description: "https://example.com/ironman",
        imageUrl: "https://example.com/ironman.jpg"
    },
    {
        id: 3,
        title: "Deadpool",
        director: "Tim Miller",
        duration: 108,
        budget: 58,
        description: "https://example.com/deadpool",
        imageUrl: "https://example.com/deadpool.jpg"
    },
    {
        id: 4,
        title: "Logan",
        director: "James Mangold",
        duration: 137,
        budget: 97,
        description: "https://example.com/logan",
        imageUrl: "https://example.com/logan.jpg"
    }
];

/* Read all the films from the list
   GET /films?order=title : ascending order by title
   GET /films?order=-title : descending order by title
*/
router.get("/", (req, res) => {
    if (req.query.order && typeof req.query.order !== "string") {
      return res.sendStatus(400);
    }
  
    const orderByTitle =
      typeof req.query.order === "string" && req.query.order.includes("title")
        ? req.query.order
        : undefined;
  
    let orderedMenu: Film[] = [];
    const films = parse(jsonDbPath, defaultFilms);
    if (orderByTitle)
      orderedMenu = [...films].sort((a, b) => a.title.localeCompare(b.title));
  
    if (orderByTitle === "-title") orderedMenu = orderedMenu.reverse();
  
    return res.json(orderedMenu.length === 0 ? films : orderedMenu);
  });

// Read the film identified by an id in the list
router.get("/:id", (req, res) => {
    const films = parse(jsonDbPath, defaultFilms);
    const idInRequest = parseInt(req.params.id, 10);
    const indexOfFilmFound = films.findIndex(
      (film: Film) => film.id === idInRequest
    );
  
    if (indexOfFilmFound < 0) return res.sendStatus(404);
  
    return res.json(films[indexOfFilmFound]);
  });

  export default router;
