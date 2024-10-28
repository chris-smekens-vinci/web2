import { Router } from "express";
import path from "node:path";
import { Film, NewFilm, FilmToUpdate } from "../types";
import { parse, serialize } from "../utils/json";

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

let getCounter = 0;

router.use((req, _res, next) => {
  if (req.method === "GET"){
    getCounter++;
    console.log(`GET requests counter: ${getCounter}`)
  }
  next();
});

router.get("/", (req, res) => {
  const films = parse(jsonDbPath, defaultFilms);
    if (req.query["minimum-duration"] === undefined) {
      return res.json(films);
    }
    
    if ((isNaN(Number(req.query['minimum-duration'])) || Number(req.query['minimum-duration']) <= 0) || (isNaN(Number(req.query['minimum-budget'])) || Number(req.query['minimum-budget']) <= 0)) {
      return res.json("Wrong minimum duration or budget")
    }

    const filteredFilms = films.filter((film) => film.duration >= Number(req.query['minimum-duration']));

    return res.json(filteredFilms);
  });

// Read the film identified by an id in the list
router.get("/:id", (req, res) => {

  const films = parse(jsonDbPath, defaultFilms);

  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.sendStatus(400);   
  }
  const film = films.find((film) => film.id === id);

  if (film === undefined) {
    return res.sendStatus(404); 
  }

  return res.json(film);
});

// Create a film to be added to the list.
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

  const {title, director, description, imageUrl} = body as NewFilm;

  const films = parse(jsonDbPath, defaultFilms);

  const nextId =
    films.reduce((acc, film) => (film.id > acc ? film.id : acc), 0) + 1;

  const addedFilm: Film = { //id: nextId, ...NewFilm
    id: nextId,
    title,
    director,
    duration: body.duration as number,
    budget: body.budget as number,
    description,
    imageUrl,
   };

  films.push(addedFilm);
  serialize(jsonDbPath, films);

  return res.json(addedFilm);

  /*
  const existingFilm = films.find((film) => 
    film.title.toLowerCase() === newFilm.title.toLowerCase() &&
    film.director.toLowerCase() === newFilm.director.toLowerCase()
  );

  if (existingFilm) {
    return res.sendStatus(409);
  }
   */
  });

  // Delete a film from the list based on its id
  router.delete("/:id", (req, res) => {
    const films = parse(jsonDbPath, defaultFilms);
    console.log("delete operation requested on ", films); // debudg dans la console 
    const id = parseInt(req.params.id);
    const index = films.findIndex((film) => film.id === id);
    if (index < 0) {
      return res.sendStatus(404);
    }
    const deletedElements = films.splice(index, 1); // splice() returns an array of the deleted elements
    const itemsRemoved = deletedElements[0];

    serialize(jsonDbPath, films);

    return res.json(itemsRemoved);
  });

  // Update a film based on its id and new values for its parameters
  // Update d'une ou plusieurs propriété(s) de la ressources
  router.patch("/:id", (req, res) => {
    const body: unknown = req.body;
    if (
      !body ||
      typeof body !== "object" ||
      ("title" in body &&
        (typeof body.title !== "string" || !body.title.trim())) ||
      ("director" in body && (typeof body.director !== "string" || !body.director.trim())) ||
      ("duration" in body && typeof body.duration !== "number") ||
      ("budget" in body && typeof body.budget !== "number") ||
      ("description" in body && (typeof body.description !== "string" || !body.description.trim())) ||
      ("imageUrl" in body && (typeof body.imageUrl !== "string" || !body.imageUrl.trim()))
    ){
      return res.sendStatus(400);
    }

    const filmToUpdate: FilmToUpdate = body;

    const films = parse(jsonDbPath, defaultFilms);
    const id = parseInt(req.params.id);
    const index = films.findIndex((film) => film.id === id);

    if (index < 0) {
      return res.sendStatus(404);
    } 

    const updatedFilm: Film = {
      ...films[index],
      ...filmToUpdate
    };

    films[index] = updatedFilm;

    serialize(jsonDbPath, films);

    return res.json(updatedFilm);
  });

  // Update de toutes les propriétés de la ressources, ou création si la ressource n'existe pas
  router.put("/:id", (req, res) => {
    const films = parse(jsonDbPath, defaultFilms);
    const id = Number(req.params.id);
    const index = films.findIndex((film) => film.id === id);

    if (index === -1) {
      return res.sendStatus(404);
    }
    const body: unknown = req.body;
    if (
      !body ||
      typeof body !== "object" ||
      ("title" in body &&
        (typeof body.title !== "string" || !body.title.trim())) ||
      ("director" in body && (typeof body.director !== "string" || !body.director.trim())) ||
      ("duration" in body && typeof body.duration !== "number") ||
      ("budget" in body && typeof body.budget !== "number") ||
      ("description" in body && (typeof body.description !== "string" || !body.description.trim())) ||
      ("imageUrl" in body && (typeof body.imageUrl !== "string" || !body.imageUrl.trim()))
    ){
      return res.sendStatus(400);
    }

    if (index < 0) {
      const newFilm = body as NewFilm;

    const nextId =
      films.reduce((acc, film) => (film.id > acc ? film.id : acc), 0) + 1;

    const addedFilm = { id: nextId, ...newFilm };

    films.push(addedFilm);

    return res.json(addedFilm);
  }

  const filmToUpdate: FilmToUpdate = body;

  const updatedFilm: Film = {
    ...films[index],
    ...filmToUpdate
  };

  films[index] = updatedFilm;
  serialize(jsonDbPath, films);

  return res.json(updatedFilm);

});

  export default router;