var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Fact= require('./fact');

// var FactSchema = new Schema({
//   fact: String,
//   timeAdded: { type : Date, default: Date.now },
//   animal: String
// });

var AnimalSchema = new Schema({
  name: String,
  image: String,
  location: String,
  facts: [ Fact.schema ]
});

var Animal = mongoose.model('Animal', AnimalSchema);
module.exports = Animal;
