const User = require("../model/usersModel");
const errorHandler = require("../utils/errorHandler");

const getAllUsers = async (req, res) => {
  console.log("Beginning getAllUsers...");
  try {
    let allUsers = await User.find();
    console.log("allUsers found! :", allUsers);
    res.status(200).json({
      payload: allUsers,
    });
  } catch (err) {
    res.status(500).json(error);
  }
};

const createUser = async (req, res) => {
  console.log("Beginning createUser...");
  try {
    const { name, username, movieData, userData } = req.body;
    const newUser = new User({
      name: name,
      username: username,
      movieData: movieData,
      userData: userData,
    });
    console.log("Creating new user:", newUser);
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

const updateUser = async (req, res) => {
  console.log("updateUser is starting...");
  try {
    const updatedUser = await User.findOneAndUpdate(
      { name: req.body.name },
      req.body,
      { new: true }
    );
    res.status(200).json({
      message: "The user was updated...",
      payload: updatedUser,
    });
  } catch (error) {
    res.status(500).json({ error: errorHandler(error) });
  }
};

const getOneUser = async (req, res) => {
  console.log("Starting getOneUser...");
  const { id } = req.params;
  console.log("Params: ", id);
  try {
    let foundUser = await User.findById(id);
    console.log("User found by id!: ", foundUser);
    res.status(200).json({
      message: "User found!",
      payload: foundUser,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  createUser,
  getAllUsers,
  updateUser,
  getOneUser,
};

//API Key
//  944bb56ef0798c430cff54fa23c6b6cf
