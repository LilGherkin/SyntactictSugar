const db = require("../models");

// Defining methods for the CommentController
module.exports = {
  findAll: function(req, res) {
    res.json({this: "works234"});
  },
  create: function(req, res) {
    console.log(req.body)
    db.Comments
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Comments
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
