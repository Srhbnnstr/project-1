var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/anifull-test');

module.exports.Animal = require('./animals.js');
