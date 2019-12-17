const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  comment: String
});

const Comment = mongoose.model("Comments", userSchema);

module.exports = Comment;