const router = require("express").Router();
const userRoutes = require("./user.js");

// user routes
router.use("/users", userRoutes);

module.exports = router;
