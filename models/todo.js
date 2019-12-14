const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for todo
const SSSchema = new Schema({
  action: {
    type: String,
    required: [true, 'The todo text field is required']
  }
})

//create model for todo
const SyntacticSugar = mongoose.model('SyntacticSugar', SSSchema);

module.exports = SyntacticSugar;