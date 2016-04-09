/* CLIENT-SIDE JS */

$(document).ready(function() {
  console.log('app.js loaded!');
  $.get('/api/animals').success(function (animals) {
    animals.forEach(function(animal) {
      renderAnimal(animal);
    });
  });

  $('#animal-form form').on('submit', function(e) {
    e.preventDefault();
    var formData = $(this).serialize();
    console.log('formData', formData);
    $.post('/api/animals', formData, function(album) {
      console.log('animal after POST', animal);
      renderAnimal(animal);  //render the server's response
    });
    $(this).trigger("reset");
  });

});


function renderAnimal(animal) {
  console.log('rendering animal', animal);
  var animalHtml = $('#animals-template').html();
  console.log('got templatehtml');
  var animalsTemplate = Handlebars.compile(animalHtml); //returns a function
  var html = animalsTemplate(animal);
  $('.scrollbox').append(html);
}
