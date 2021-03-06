const db = require("../models");

// Defining methods for the CommentController
module.exports = {
    findAll: function (req, res) {
        db.Comment.find(req.query)//.sort({ date: -1 })
            .then(comments => res.json(comments))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        console.log(req.body)
        db.Comment
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Comment
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
