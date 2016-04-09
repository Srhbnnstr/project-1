var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/anifull-test');

var Animal = require('./animals');

module.exports.Animal = Animal;
module.exports.Fact = require('./fact');
