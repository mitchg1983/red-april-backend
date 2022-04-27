var express = require('express');
var router = express.Router();

const {
  getAllUsers,
  createUser,
} = require("./users/controller/usersController");

router.get("/get-all-users", getAllUsers);
router.post("/create-user", createUser);

module.exports = router;
