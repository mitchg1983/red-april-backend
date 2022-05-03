const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
    id: String,
    //password: String,
    name: String,
    username: String,
    movieData: [],
    userData: [],
    date: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model("users", usersSchema);