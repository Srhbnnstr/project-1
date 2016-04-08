/************
 * DATABASE *
 ************/

 var db = require('../models');

 // GET /api/albums
function index(req, res) {
  db.Animal.find({}, function(err, allanimals) {
    res.json(allAnimals);
  });
}

 function create(req, res) {
   console.log('body', req.body);

   db.Animal.create(req.body, function(err, album) {
     if (err) { console.log('error', err); }
     console.log(Animal);
     res.json(Animal);
   });
 }
 //
 // function show(req, res) {
 //   db.Animal.findById(req.params.animal, function(err, foundAnimal) {
 //     if(err) { console.log('animalController.show error', err); }
 //     console.log('animalController.show responding with', foundAnimal);
 //     res.json(foundAnimal);
 //   });
 // }

 // function destroy(req, res) {
 //   db.Animal.findOneAndRemove({ _id: req.params.animalId }, function(err, foundAnimal){
 //     res.json(foundAlbum);
 //   });
 // }

 // function update(req, res) {
 //   console.log('updating with data', req.body);
 //   db.Animal.findById(req.params.animalId, function(err, foundAnimal) {
 //     if(err) { console.log('animalController.update error', err); }
 //     foundAlbum.Name = req.body.Name;
 //     foundAnimal.image = req.body.image;
 //     foundAlbum.location = req.body.location;
 //     foundAlbum.facts = req.body.facts;
 //     foundAlbum.save(function(err, savedAnimal) {
 //       if(err) { console.log('saving animal failed'); }
 //       res.json(savedAnimal);
 //     });
 //   });
 //
 // }


 // export public methods here
 module.exports = {
   index: index,
   create: create,
  //  show: show,
  //  destroy: destroy,
  //  update: update
 };
