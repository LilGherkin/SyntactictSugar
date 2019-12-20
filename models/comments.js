const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  comment: String,
  user: String,
  img: String
});

const Comment = mongoose.model("Comments", userSchema);

module.exports = Comment;