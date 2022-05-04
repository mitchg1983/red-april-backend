const mongoose = require("mongoose");

const moviesSchema = new mongoose.Schema({
  id: String,
  title: String,
  director: String,
  poster: "",
  userStats: {
    watched: "",
    liked: "",
  },
});

module.exports = mongoose.model("movies", moviesSchema);
