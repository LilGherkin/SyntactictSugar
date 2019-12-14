const router = require("express").Router();
const CommentController = require("../../controller/CommentController");

// Matches with "/api/comments"
router.route("/")
  .get(CommentController.findAll)
  .post(CommentController.create);

// Matches with "/api/comments/:id"
router
  .route("/:id")
  // .get(usersController.findById)
  // .put(usersController.update)
  .delete(CommentController.remove);

module.exports = router;