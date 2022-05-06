const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
    id: String,
    username: String,
    email: String,
    watched: [],
    liked: {},
    userData: [],
    date: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model("users", usersSchema);