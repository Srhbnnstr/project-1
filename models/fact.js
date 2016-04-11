var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var factSchema = new Schema({
  fact: [ Array ],
  timeAdded: { type : Date, default: Date.now },
  animal: String
});

var Fact = mongoose.model('Fact', factSchema);

module.exports = Fact;
