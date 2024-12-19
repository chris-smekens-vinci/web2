import { Router } from "express";
import { containsOnlyExpectedKeys } from "../utils/validate";

import { authorize } from "../utils/auths";
import { Comment } from "../types";

import {
  createComment,
  deleteComment,
  readAllComments,
} from "../services/comments";

const router = Router();

const expectedKeys = ["filmId", "username", "comment"];

// Read all comments
router.get("/", (req, res) => {
  const filmId = 
    "filmId" in req.query ? Number(req.query["filmId"]) : undefined;

  if (filmId !== undefined && (isNaN(filmId) || filmId <= 0)) {
    return res.sendStatus(400);
  }
  // filter comments by filmId
  const filteredCommments = readAllComments(filmId);
  return res.send(filteredCommments);
});

// Create a comment
router.post("/", authorize, (req, res) => {
    const body: unknown = req.body;
  
    if (
        !body ||
        typeof body !== "object" ||
        !("comment" in body) ||
        !("filmId" in body) ||
        typeof body.comment !== "string" ||
        typeof body.filmId !== "number" ||
        !Number.isInteger(body.filmId) ||
        body.filmId <= 0 ||
        !body.comment.trim() ||
        !("user" in req) ||
        typeof req.user !== "object" ||
        !req.user ||
        !("username" in req.user) ||
        typeof req.user.username !== "string"
    ) {
      return res.sendStatus(400);
    }
    
    if (!containsOnlyExpectedKeys(body, expectedKeys)) {
      return res.sendStatus(400);
    }

    const newComment : Comment = {
        filmId: body.filmId,
        username: req.user.username,
        comment: body.comment,
    };

    try {
        createComment(newComment);
        return res.send(newComment);
    }
    catch (error) {
        if (!(error instanceof Error)) {
            return res.sendStatus(404);
        }
        if (error.message === "Not found") {
            return res.sendStatus(404);
        }
        if (error.message === "Comment already exists") {
            return res.sendStatus(409);
        }
        return res.sendStatus(500);
    }
});

// Delete a comment by filmId
router.delete("/:id", authorize, (req, res) => {
    const filmId = Number(req.params.filmId);
  
    if (
        isNaN(filmId) ||
    filmId <= 0 ||
    !("user" in req) ||
    typeof req.user !== "object" ||
    !req.user ||
    !("username" in req.user) ||
    typeof req.user.username !== "string"
    ){
      return res.sendStatus(400);
    }

    const username = req.user.username;

    try{
        const deletedComment = deleteComment(filmId, username);
        return res.send(deletedComment);
    } catch (error) {
        if (!(error instanceof Error)) {
            return res.sendStatus(404);
        }
        if (error.message === "Not found") {
            return res.sendStatus(404);
        }
        return res.sendStatus(500);
    }

});

export default router;