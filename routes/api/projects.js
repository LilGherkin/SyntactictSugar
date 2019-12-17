const router = require("express").Router();
const projectController = require("../../controller/projectController");

// Matches with "/api/project"
router.route("/")
  .get(projectController.findAll)
  .post(projectController.create);

// Matches with "/api/projects/:id"
router
  .route("/:id")
  // .get(usersController.findById)
  // .put(usersController.update)
  .delete(projectController.remove);

module.exports = router;