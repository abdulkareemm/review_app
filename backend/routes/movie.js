const express = require("express");
const {
  uploadTrailer,
  createMovie,
  updateMovieWithoutPoster,
  updateMovieWithPoster,
  removeMovie,
} = require("../controllers/movie");
const { isAuth, isAdmin } = require("../middlewares/auth");
const { parseData } = require("../middlewares/helper");
const { uploadVideo, uploadImage } = require("../middlewares/multer");
const { validateMovie, validate, validateMovieWithOutPoster } = require("../middlewares/validator");
const router = express.Router();

router.post(
  "/upload-trailer",
  isAuth,
  isAdmin,
  uploadVideo.single("video"),
  uploadTrailer
);
router.post(
  "/create",
  isAuth,
  isAdmin,
  uploadImage.single("poster"),
  parseData,
  validateMovie,
  validate,
  createMovie
);
router.patch(
  "/update-movie-without-poster/:movieId",
  isAuth,
  isAdmin,
  // parseData,
  validateMovieWithOutPoster,
  validate,
  updateMovieWithoutPoster
);
router.patch(
  "/update-movie-with-poster/:movieId",
  isAuth,
  isAdmin,
  uploadImage.single("poster"),
  parseData,
  validateMovie,
  validate,
  updateMovieWithPoster
);
router.delete("/:movieId", isAuth, isAdmin, removeMovie);

module.exports = router;
