var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Fact= require('./fact');

var AnimalSchema = new Schema({
  name: String,
  image: String,
  location: String,
  facts: [ Fact.schema ]
});

var Animal = mongoose.model('Animal', AnimalSchema);
module.exports = Animal;
