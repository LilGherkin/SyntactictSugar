/* eslint-disable no-console */
const express = require("express");
const morgan = require("morgan");
const app = express();
const path = require("path");

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "sugarclient/build")));

const port = process.env.SERVER_PORT || 3333;
// app.use((_, res) => {
//     res.sendFile(join(__dirname, "build", "index.html"));
// });

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "sugarclient", "build", "index.html"));
});

app.listen(port, () => console.log(`Listening on port ${port}`));

