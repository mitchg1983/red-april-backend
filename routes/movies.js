var express = require("express");
var router = express.Router();

const {
    getAllMovies,
    createMovie,
    getOneMovie,
    findMovieByName,
} = require("./movies/controller/moviesController");

router.get("/get-all-movies", getAllMovies);
router.get("/get-one-movie/:id", getOneMovie);
router.get("/find-movie-by-name/:title", findMovieByName);
router.post("/create-movie", createMovie);

module.exports = router;