const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  name: String,
  url: String,
  content: String,
});

const Project = mongoose.model("Projects", projectSchema);

module.exports = Project;