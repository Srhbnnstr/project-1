var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Fact = require('./fact.js');

var AnimalSchema = new Schema({
  Name: String,
  image: String,
  location: String,
  facts: [ Fact.schema ]
});

var Animal = mongoose.model('Animal', AnimalSchema);

module.exports = Animal;
var Fact = require('./fact.js');
