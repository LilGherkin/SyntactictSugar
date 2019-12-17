const router = require("express").Router();
const userRoutes = require("./user.js");
const commentRoutes = require("./comments.js");
const projectRoutes = require("./projects.js");

// user routes
router.use("/users", userRoutes);
router.use("/comments", commentRoutes);
router.use("/projects", projectRoutes);

module.exports = router;
