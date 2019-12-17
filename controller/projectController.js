const db = require("../models");

// Defining methods for the UsersController
module.exports = {
  findAll: function(req, res) {
    res.json({this: "works345"});
    // db.Project
    //  .find()
    //  .then(dbModel => res.json(dbModel))
    //  .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log(req.body)
    db.Project
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Project
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
