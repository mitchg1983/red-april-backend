const Movie = require("../model/moviesModel");
const errorHandler = require("../../users/utils/errorHandler");

const getAllMovies = async (req, res) => {
  console.log("Starting getAllMovies...");
  try {
    let allMovies = await Movie.find();
    console.log("allMovies found! :", allMovies);
    res.status(200).json({
      payload: allMovies,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

const createMovie = async (req, res) => {
    console.log("Beginning createMovie...");
    try {
      const { title, director, stats } = req.body;
      const newMovie = new Movie({
        title: title,
        director: director,
        poster: "",
        userStats: {
            watched: "",
            liked: ""
        },
      });
      console.log("Creating new movie:", newMovie);
      const savedMovie = await newMovie.save();
      res.status(200).json({
        message: "New movie is saved!",
        payload: savedMovie,
      });
    } catch (error) {
      if (error.code === 11000) {
        return res.status(500).json({
          message: error,
          error: `duplicate found?`,
        });
      }
      res.status(500).json({
        message: "Error encountered...",
        error: error.errors,
      });
    }
  };

  const getOneMovie = async (req, res) => {
    console.log("Starting getOneMovie...");
    const { id } = req.params;
    console.log("Params: ", id);
    try {
      let foundMovie = await Movie.findById(id);
      console.log("Movie found by id! :", foundMovie);
      res.status(200).json({
        message: "Movie found!",
        payload: foundMovie,
      });
    } catch (error) {
      res.status(500).json(error);
    }
  };
  

module.exports = {
    getAllMovies,
    createMovie,
    getOneMovie,
};
