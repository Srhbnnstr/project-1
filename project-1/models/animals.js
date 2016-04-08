var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var AnimalSchema = new Schema({
  Name: String,
  image: String,
  location: String,
  facts: [typeSchema],
});

var Animal = mongoose.model('Animal', AnimalSchema);

module.exports = Animal;
