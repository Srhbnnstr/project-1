var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var factSchema = new Schema({
  fact: String,
  timeAdded: String,
  animal: String
});

var Fact = mongoose.model('Fact', factSchema);

module.exports = Fact;
