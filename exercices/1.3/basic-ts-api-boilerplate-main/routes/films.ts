import { Router } from "express";

//import path from "node:path";
import { Film, NewFilm } from "../types";
//import { parse, serialize } from "../utils/json";

const router = Router();

//const jsonDbPath = path.join(__dirname, "/../data/films.json");

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

let getCounter = 0;

router.use((req, _res, next) => {
  if (req.method === "GET"){
    getCounter++;
    console.log(`GET requests counter: ${getCounter}`)
  }
  next();
});

router.get("/", (req, res) => {
    if (req.query["minimum-duration"] === undefined) {
      return res.json(defaultFilms);
    }
    
    if ((isNaN(Number(req.query['minimum-duration'])) || Number(req.query['minimum-duration']) <= 0) || (isNaN(Number(req.query['minimum-budget'])) || Number(req.query['minimum-budget']) <= 0)) {
      return res.json("Wrong minimum duration or budget")
    }

    const filteredFilms = defaultFilms.filter((film) => film.duration >= Number(req.query['minimum-duration']));

    return res.json(filteredFilms);
  });

// Read the film identified by an id in the list
router.get("/:id", (req, res) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.sendStatus(400);   
  }
  const film = defaultFilms.find((film) => film.id === id);

  if (film === undefined) {
    return res.sendStatus(404); 
  }

  return res.send(film);
});

  router.post("/", (req, res) => {
    const body: unknown = req.body;
    if (
      !body ||
      typeof body !== "object" ||
      !("title" in body) ||
      !("director" in body) ||
      !("duration" in body) ||
      !("budget" in body) ||
      !("description" in body) ||
      !("imageUrl" in body) ||
      typeof body.title !== "string" ||
      typeof body.director !== "string" ||
      typeof body.duration !== "number" ||
      typeof body.budget !== "number" ||
      typeof body.description !== "string" ||
      typeof body.imageUrl !== "string" ||
      !body.title.trim() ||
      !body.director.trim() ||
      !body.description.trim() ||
      !body.imageUrl.trim()
    ) {
      return res.sendStatus(400);
    }

  const newFilm = body as NewFilm;

  const nextId =
    defaultFilms.reduce((acc, film) => (film.id > acc ? film.id : acc), 0) + 1;

  const addedFilm: Film = { id: nextId, ...newFilm };

  defaultFilms.push(addedFilm);

  const existingFilm = defaultFilms.find((film) => 
    film.title.toLowerCase() === newFilm.title.toLowerCase() &&
    film.director.toLowerCase() === newFilm.director.toLowerCase()
  );

  if (existingFilm) {
    return res.sendStatus(409);
  }

  return res.json(addedFilm);
  });

  export default router;