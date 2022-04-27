const User = require("../model/usersModel");
const errorHandler = require("../utils/errorHandler");

const getAllUsers = async (req, res) => {
  console.log("Beginning getAllUsers");
  try {
    let allUsers = await User.find();
    res.status(200).json({
      payload: allUsers,
    });
  } catch (err) {
    res.status(500).json(error);
  }
};

const createUser = async (req, res) => {
  console.log("Beginning createUser");
  try {
    // console.log(req.body);
    const { name, username, movieData, userData } = req.body;
    const newUser = new User({
      name: name,
      username: username,
      movieData: movieData,
      userData: userData,
    });
    const savedUser = await newUser.save();
    res.status(200).json({
      message: "New user is saved!",
      payload: savedUser,
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

module.exports = {
  createUser,
  getAllUsers,
};
