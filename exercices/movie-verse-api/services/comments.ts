import path from "node:path";

import { Comment } from "../types";

import { parse, serialize } from "../utils/json";
import { readOne } from "./films";

const jsonDbPath = path.join(__dirname, "/../data/comments.json"); 

// Read All Comments filter by filmId if provided
const readAllComments = (filmId: number | undefined = undefined): Comment[] => {
  const comments = parse<Comment>(jsonDbPath);

  return filmId
    ? comments.filter((comment) => comment.filmId === filmId)
    : comments;
};

const createComment = (comment: Comment): void => {
  const comments = parse<Comment>(jsonDbPath);

  // Check that the film exists
  const existingFilm = readOne(comment.filmId);
  if (!existingFilm) {
    throw new Error("Film not found");
  }

  // Check that the username has not already commented on the film
  const userHasCommented = comments.find(
    (c) => c.filmId === comment.filmId && c.username === comment.username
  );

  if (userHasCommented) {
    throw new Error("User has already commented on this film");
  }

  comments.push(comment);
  serialize(jsonDbPath, comments);

};

const deleteComment = (filmId : number, username : string): Comment => {
  const comments = parse<Comment>(jsonDbPath);

  const index = comments.findIndex((c) => c.filmId === filmId && c.username === username);

  if (index === -1) {
    throw new Error("Comment not found");
  }

  const [deletedComment] = comments.splice(index, 1);
  serialize(jsonDbPath, comments);

  return deletedComment;
};

export { readAllComments, createComment, deleteComment };

