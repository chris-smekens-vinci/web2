import path from "node:path";

import { Film, NewFilm } from "../types";

import { serialize, parse } from "../utils/json";

const jsonDbPath = path.join(__dirname, "/../data/films.json");

const defaultFilms: Film[] = [
  {
    id: 1,
    title: "SPIDER-RMAN",
    director: "Sam Raimi",
    urlImage: "https://m.media-amazon.com/images/M/MV5BZWM0OWVmNTEtNWVkOS00MzgyLTkyMzgtMmE2ZTZiNjY4MmFiXkEyXkFqcGc@._V1_.jpg",
    duration: 121,
    description: "Peter Parker, un jeune étudiant, est mordu par une araignée radioactive. Il découvre bientôt qu'il a des super-pouvoirs : il est capable de grimper aux murs, une force surhumaine et un 'sens d'araignée'.",
    budget: 139
  },
  {
    id: 2,
    title: "GLADIATOR",
    director: "Ridley Scott",
    urlImage: "https://m.media-amazon.com/images/I/71LPLHCs7HL.jpg",
    duration: 155,
    description: "Le général romain Maximus, fidèle soutien de l'empereur Marc Aurèle, est trahi par le fils de ce dernier, Commode, qui s'empare du pouvoir et fait massacrer sa famille. Réduit en esclavage, Maximus devient gladiateur et prépare sa vengeance.",
    budget: 103
  },
  {
    id: 3,
    title: "PULP FICTION",
    director: "Quentin Tarantino",
    urlImage: "https://m.media-amazon.com/images/M/MV5BYTViYTE3ZGQtNDBlMC00ZTAyLTkyODMtZGRiZDg0MjA2YThkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    duration : 154,
    description: "Ce film culte suit plusieurs histoires entrelacées de criminels, de gangsters et de boxeurs dans le Los Angeles des années 1990. Avec son mélange de dialogues percutants, de violence stylisée et de références pop, 'Pulp Fiction' est devenu un classique du cinéma indépendant et a marqué le style distinctif de Tarantino.",
    budget: 8
  },
  {
    id: 4,
    title: "CASINO",
    director: "Martin Scorsese",
    urlImage: "https://m.media-amazon.com/images/M/MV5BMDRlZWZjZjYtYzY2NS00ZWVjLTkwYzAtZTA2ZDAzMGRiYmYwXkEyXkFqcGc@._V1_.jpg",
    duration : 178,
    description: "Dans le Las Vegas des années 1970, l'histoire suit Sam 'Ace' Rothstein, un expert des jeux, qui est chargé de gérer un casino pour la mafia. Alors qu'il s'efforce de maintenir l'ordre et de maximiser les profits, il se retrouve entraîné dans un monde de trahisons, de violence et de corruption, mettant en péril sa vie et celle de ses proches.",
    budget: 52
  },
  {
    id: 5,
    title: "BLADE",
    director: "Stephen Norrington",
    urlImage: "https://m.media-amazon.com/images/M/MV5BNzAzMmY3OWMtNDgyMS00Y2U4LTlmM2UtY2YwMmM0MDI5ODJmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    duration : 120,
    description: "Dans un monde où vampires et humains coexistent, Blade, un chasseur mi-humain mi-vampire, utilise ses pouvoirs pour protéger l'humanité. Armé de compétences surnaturelles et d'armes redoutables, il lutte contre une menace vampirique qui pourrait plonger le monde dans les ténèbres.",
    budget: 45
  },
  {
    id: 6,
    title: "THE HANGOVER PART II",
    director: "Todd Phillips",
    urlImage: "https://m.media-amazon.com/images/M/MV5BMTM2MTM4MzY2OV5BMl5BanBnXkFtZTcwNjQ3NzI4NA@@._V1_FMjpg_UX1000_.jpg",
    duration : 102,
    description: "Phil, Stu, Alan et Doug se rendent en Thaïlande pour le mariage de Stu. Après la soirée d'enterrement de vie de garçon, ils se réveillent dans une chambre d'hôtel à Bangkok, sans aucun souvenir de la nuit précédente. Ils doivent retrouver Teddy avant le mariage.",
    budget: 80
  },
  {
    id: 7,
    title: "THE GODFATHER",
    director: "Francis Ford Coppola",
    urlImage: "https://m.media-amazon.com/images/M/MV5BYTJkNGQyZDgtZDQ0NC00MDM0LWEzZWQtYzUzZDEwMDljZWNjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    duration : 175,
    description: "Ce classique du cinéma suit la famille Corleone, une puissante dynastie mafieuse dirigée par le patriarche Vito Corleone. Alors que la famille lutte pour maintenir son pouvoir et son influence, le film explore des thèmes de loyauté, de trahison et de justice, offrant un regard sombre et captivant sur le crime organisé.",
    budget: 6
  },
  {
    id: 8,
    title: "HOME ALONE",
    director: "Chris Columbus",
    urlImage: "https://m.media-amazon.com/images/M/MV5BMTUzMzg4MTg2M15BMl5BanBnXkFtZTYwNDM4OTk4._V1_.jpg",
    duration : 103,
    description: "Lorsque Kevin McCallister est oublié par sa famille pour les vacances de Noël, il doit se débrouiller seul pour protéger sa maison des cambrioleurs. Avec des pièges ingénieux et un esprit vif, il défend son domicile contre les voleurs maladroits, apprenant des leçons sur la famille et la responsabilité.",
    budget: 18
  },
  {
    id: 9,
    title: "MALCOLM X",
    director: "Spike Lee",
    urlImage: "https://m.media-amazon.com/images/M/MV5BMTAzMjQ0NDMtY2I2Ny00M2FmLWEzNDQtNzgzYzIwZjhkZWRmXkEyXkFqcGc@._V1_.jpg",
    duration : 202,
    description: "Ce biopic puissant retrace la vie de Malcolm X, leader emblématique des droits civiques, de son enfance tumultueuse à sa transformation en figure militante. À travers ses luttes pour l'égalité et la justice, le film explore les thèmes de l'identité, de la foi et de la lutte contre l'oppression.",
    budget: 35
  },
  {
    id: 10,
    title: "THE PURSUIT OF HAPPYNESS",
    director: "Gabriele Muccino",
    urlImage: "https://www.criticsinc.com/photos/movieposters/p/pursuitofhappyness.jpg",
    duration : 117,
    description: "Basé sur une histoire vraie, le film suit Chris Gardner, un vendeur en difficulté qui, malgré l'adversité, se bat pour offrir une vie meilleure à son fils. En surmontant la pauvreté et les obstacles personnels, il poursuit son rêve de devenir courtier en bourse, illustrant la force de la détermination et de l'amour parental.",
    budget: 21
  },
  {
    id: 11,
    title: "SPIDER-MAN: ACROSS THE SPIDER-VERSE",
    director: "Joaquim Dos Santos, Kemp Powers, Justin K. Thompson",
    urlImage: "https://m.media-amazon.com/images/M/MV5BMzA0YzI4NDYtYjgyZi00NmZmLWFiODgtNTA4NDliYWQxMDQ4XkEyXkFqcGc@._V1_QL75_UX480_.jpg",
    duration : 117,
    description: "Dans cette suite, Miles Morales explore le multivers, retrouve Gwen Stacy et rejoint une équipe de Spider-People pour affronter une menace qui pourrait détruire toutes les réalités.",
    budget: 90
  },
  {
    id: 12,
    title: "THE BATMAN",
    director: "Matt Reeves",
    urlImage: "https://m.media-amazon.com/images/M/MV5BOWQwYmE3NTQtOGFlYS00YTBkLWI4MTQtNjc2MjdhMTRiMWEyXkEyXkFqcGc@._V1_.jpg",
    duration : 176,
    description: "Dans ce reboot, Batman enquête sur une série de meurtres à Gotham City, révélant des secrets sombres sur la ville et sa propre famille.",
    budget: 180
  },
  {
    id: 13,
    title: "LOGAN",
    director: "James Mangold",
    urlImage: "https://m.media-amazon.com/images/M/MV5BOTNlMGJmYzUtMDFlZC00NjExLWJkOTQtMWJmYjZhOTJiNDIzXkEyXkFqcGc@._V1_.jpg",
    duration : 137,
    description: "Dans un futur proche, Logan, alias Wolverine, est affaibli et malade. Il vit caché et prend soin du professeur Xavier. Mais un jour, une jeune mutante traquée par des mercenaires arrive chez lui, entraînant Logan dans une ultime mission.",
    budget: 97
  },
  {
    id: 14,
    title: "DEADPOOL & WOLVERINE",
    director: "Shawn Levy",
    urlImage: "https://m.media-amazon.com/images/M/MV5BZTk5ODY0MmQtMzA3Ni00NGY1LThiYzItZThiNjFiNDM4MTM3XkEyXkFqcGc@._V1_.jpg",
    duration : 117,
    description: "Deadpool et Wolverine s'associent pour une mission dangereuse, affrontant des ennemis redoutables et des secrets sombres.",
    budget: 120
  }
];

const readAll = (minimumDuration: number | undefined = undefined): Film[] => {
  const films = parse(jsonDbPath, defaultFilms);
  return minimumDuration
    ? films.filter((film) => film.duration >= minimumDuration)
    : films;
};

const readOne = (id: number): Film | undefined => {
  const films = parse(jsonDbPath, defaultFilms);
  return films.find((film) => film.id === id);
};

const createOne = (newFilm: NewFilm): Film | undefined => {
  const films = parse(jsonDbPath, defaultFilms);

  const existingFilm = films.find(
    (film) =>
      film.title.toLowerCase() === newFilm.title.toLowerCase() &&
      film.director.toLowerCase() === newFilm.director.toLowerCase()
  );

  if (existingFilm) {
    return undefined;
  }

  const film = { id: nextId(), ...newFilm };

  films.push(film);
  serialize(jsonDbPath, films);

  return film;
};

const deleteOne = (id: number): Film | undefined => {
  const films = parse(jsonDbPath, defaultFilms);

  const index = films.findIndex((film) => film.id === id);

  if (index === -1) {
    return undefined;
  }

  const [film] = films.splice(index, 1);
  serialize(jsonDbPath, films);

  return film;
};

const updateOne = (
  id: number,
  updatedFilm: Partial<NewFilm>
): Film | undefined => {
  const films = parse(jsonDbPath, defaultFilms);

  const index = films.findIndex((film) => film.id === id);

  if (index === -1) {
    return undefined;
  }

  const film = { ...films[index], ...updatedFilm };

  films[index] = film;
  serialize(jsonDbPath, films);

  return film;
};

const updateOrCreateOne = (
  id: number,
  updatedFilm: NewFilm
): Film | undefined => {
  const films = parse(jsonDbPath, defaultFilms);

  const index = films.findIndex((film) => film.id === id);

  if (index === -1) {
    return createOne(updatedFilm);
  }

  const film = { ...films[index], ...updatedFilm };

  films[index] = film;
  serialize(jsonDbPath, films);

  return film;
};

const nextId = () =>
  parse(jsonDbPath, defaultFilms).reduce(
    (maxId, film) => Math.max(maxId, film.id),
    0
  ) + 1;

export { readAll, readOne, createOne, deleteOne, updateOne, updateOrCreateOne };
