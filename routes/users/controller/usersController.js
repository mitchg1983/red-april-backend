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

const updateUser = async (req, res) => {
  console.log("updateUser is starting");
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
  try {
    const { id } = req.params;
    let foundUser = await User.findById(id);
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
  getOneUser
};

// const response = await fetch(`${url}/tasks/create-task`, {
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     mode: "cors",
//     method: "POST",
//     body: JSON.stringify(data)
// });
