import express from "express";

//verify token middleware

import VerifyToken from "../utils/VerifyToken.js";

//controller
import {
  fetchMovies,
  createMovieController,
  updateMovieController,
  deleteMovieController,
} from "../controllers/movieController.js";

//catch error function
import catchAsync from "../utils/catchasync.js";

const router = express.Router();

//ACCESS - PUBLIC

router.get("/fetch-all", fetchMovies);
router.put("/create", catchAsync(createMovieController));

//ACCESS - PRIVATE

router.post("/update", VerifyToken, catchAsync(updateMovieController));
router.delete("/delete", VerifyToken, catchAsync(deleteMovieController));

export default router;
