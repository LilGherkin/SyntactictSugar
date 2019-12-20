const router = require("express").Router();
const projectController = require("../../controller/projectController");

// Matches with "/api/project"
router.route("/")
  .get(projectController.findAll)
  .post(projectController.create);

router.route('/get/:id')
  .get(projectController.findOne);

router.route("/getprojuser/:user")
  .get(projectController.findUser);
// Matches with "/api/projects/:id"
router
  .route("/:id")
  // .get(usersController.findById)
  // .put(usersController.update)
  .delete(projectController.remove);

module.exports = router;