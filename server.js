/* eslint-disable no-console */
const express = require("express");
const morgan = require("morgan");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "client/build")));
app.use(express.json());// for parsing json data
app.use(express.urlencoded({ extended: true })) // parsing form data

const port = process.env.SERVER_PORT || 3333;
// app.use((_, res) => {
//     res.sendFile(join(__dirname, "build", "index.html"));
// });

app.use(routes);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// Connect to the Mongo DB
mongoose.connect('mongodb://Mark:databas3password@ds253368.mlab.com:53368/heroku_n3zsj9l9', { useNewUrlParser: true })
  .then(() => console.log(`Database connected successfully`))
  .catch(err => console.log(err));

app.listen(port, () => console.log(`Listening on port ${port}`));