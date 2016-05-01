var mongoose = require("mongoose");
mongoose.connect(process.env.MONGOLAB_URI ||
                 process.env.MONGOHQ_URL ||
                'mongodb://localhost/test');

module.exports.Animal = require('./animals.js');
