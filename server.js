/* eslint-disable no-console */
const express = require("express");
const morgan = require("morgan");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "sugarclient/build")));
app.use(express.json());// for parsing json data
app.use(express.urlencoded({extended:true})) // parsing form data

const port = process.env.SERVER_PORT || 3333;
// app.use((_, res) => {
//     res.sendFile(join(__dirname, "build", "index.html"));
// });

app.use(routes);
 app.get("*", (req, res) => {
     res.sendFile(path.join(__dirname, "sugarclient", "build", "index.html"));
 });

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/user"
);


app.listen(port, () => console.log(`Listening on port ${port}`));

