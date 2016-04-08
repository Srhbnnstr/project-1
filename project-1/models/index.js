var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/anifull-test');

var Animal = require('./animal');

module.exports.Animal = Animal;
