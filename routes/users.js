var express = require("express");
var router = express.Router();

const {
  getAllUsers,
  createUser,
  updateUser,
  getOneUser,
  findUserByName,
  // updateUserWatched,
} = require("./users/controller/usersController");

router.get("/get-all-users", getAllUsers);
router.post("/create-user", createUser);
router.put("/update-user", updateUser);
router.get("/get-one-user/:id", getOneUser);
router.get("/find-user-by-name/:username", findUserByName);
// router.put("/update-user-watched", updateUserWatched)

module.exports = router;
