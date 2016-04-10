/************
 * DATABASE *
 ************/

 var db = require('../models');

 // GET /api/animals
function index(req, res) {
  db.Animal.find({}, function(err, allAnimals) {
    res.json(allAnimals);
  });
}

 function create(req, res) {
   console.log('body', req.body);

   db.Animal.create(req.body, function(err, animal) {
     if (err) { console.log('error', err); }
     console.log(animal);
     res.json(animal);
   });
 }

 function show(req, res) {
   db.Animal.findById(req.params.AnimalId, function(err, foundAnimal) {
     if(err) {console.log('animalsController.show error', err); }
     console.log('albumsController.show responding with', foundAnimal);
     res.json(foundAnimal);
   });
 }

 function destroy(req, res) {
    db.Animal.findOneAndRemove({_id: req.params.animalId}, function(err, foundAnimal){
      res.json(foundAnimal);
    });
 }

 function update(req, res) {
   // FILL ME IN !
 }


 // export public methods here
 module.exports = {
   index: index,
   create: create,
   show: show,
   destroy: destroy,
   update: update
 };
