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
    $.post('/api/animals', formData, function(animal) {
      console.log('animal after POST', animal);
      renderAnimal(animal);  //render the server's response
    });
    $(this).trigger("reset");
  });


  // $('#animals').on('click', handleAnimalClick);
  $('#animals').on('click', '.delete-animal', handleDeleteClick);
  // $('#animals').on('click', 'edit-animal', handleEditClick);
  // $('#animals').on('click', '.save-animal', handleSaveClick);
});

function fetchAndReRenderAnimalWithId(animalId) {
  $.get('/api/animals/' + animalId, function(data) {
    // remove the current instance of the animal from the page
    $('div[data-animal-id=' + animalId + ']').remove();
    // re-render it with the new animal
    renderAnimal(data);
  });
}

function handleDeleteClick(e) {
  var $animalRow = $(this).closest('.animal');
  var animalId = $animalRow.data('animal-id');
  console.log('deleting animal' + animalId);
  $.ajax({
    url: '/api/animals/' + animalId,
    method: 'DELETE',
    success: handleDeleteAnimalSuccess
  });
}

function handleDeleteAnimalSuccess(data) {
  var deletedAnimalId = data._id;
  console.log('removing the following animal from the page:', deletedAnimalId);
  $('div[data-animal-id=' + deletedAnimalId + ']').remove();
}

function renderAnimal(animal) {
  console.log('rendering animal', animal);
  var animalHtml = $('#animals-template').html();
  // console.log('got templatehtml');
  var animalsTemplate = Handlebars.compile(animalHtml); //returns a function
  var html = animalsTemplate(animal);
  $('.scrollbox').append(html);
}
