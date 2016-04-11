var db = require('../models');

// app.get('/api/animals/:animalId/facts', controllers.facts.index);
function index(req, res) {
  db.Animal.findById(req.params.animalId, function(err, foundAnimal) {
    console.log('responding with animals:', foundAnimal.facts);
    res.json(foundAnimal.facts);
  });
}

//POST '/api/animals/:animalId/facts'
function create(req,res) {
  db.Animal.findById(req.params.animalId, function(err, foundAnimal) {
    console.log(req.body);
    var newFact = new db.Fact(req.body);
    foundAnimal.facts.push(newFact);
    foundAnimal.save(function(err, savedAnimal) {
      console.log('newFact created: ', newFact);
      res.json(newFact);
    });
  });
}

module.exports = {
  index: index,
  create: create
};
