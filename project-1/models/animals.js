var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var AnimalSchema = new Schema({
  animalName: String,
  location: String,
  facts: [ String ]
});

var Album = mongoose.model('Animal', AnimalSchema);
