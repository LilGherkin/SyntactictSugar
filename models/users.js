const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String
});

const User = mongoose.model("Users", userSchema);

module.exports = User;
