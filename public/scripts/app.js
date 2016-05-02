$(document).ready(function() {
  console.log('app.js loaded!');
  $.get('/api/animals').success(function (animals) {
    animals.forEach(function(animal) {
      renderAnimal(animal);
    });
  });

  $('#animal-form form').on('submit', function(e) {
    e.preventDefault();
    var dataObject = {
      name: $("#name").val(),
      location: $("#locationInput").val(),
      facts: [{
        fact:$("#fact").val()
      }],
      image: $('#image').append('#url').val()
    };

    console.log('formData', dataObject);
    $.post('/api/animals', dataObject, function(animal) {
      console.log('animal after POST', animal);
      renderAnimal(animal);  //render the server's response
    });
    $(this).trigger("reset");
  });

  $('#animals').on('click', '.delete-animal', handleDeleteClick);
  $('#animals').on('click', '.edit-animal', handleEditClick);
  $('#editModal').on('click', 'button#editModalSubmit', handleUpdateSave);

function fetchAndReRenderAnimalWithId(animalId) {
  $.get('/api/animals/' + animalId, function(data) {
    // remove the current instance of the animal from the page
    $('div[data-animal-id=' + animalId + ']').remove();
    // re-render it with the new animal
    renderAnimal(data);
  });
}

function handleEditClick(e) {
  var $animalRow = $(this).closest('.animal');
  var animalId = $animalRow.data('animal-id');
  console.log('edit animal', animalId);
}

function handleUpdateSave(e) {
  // build all the songs objects up
  var $modal = $('#editModal');
  if($modal.find('form').length < 1) {
    // if there are no form elements, then there are no songs to update
    $modal.modal('hide');
    return;
  }
  var animalId = $modal.find('form').data('animal-id');

  var updatedAnimal = [];
  $modal.find('form').each(function () {
    var singleAnimal = {};
    singleAnimal._id = $(this).attr('id');
    singleAnimal.name = $(this).find('input.name').val();
    singleAnimal.location = $(this).find('input.location').val();
    singleAnimal.fact = $(this).find('input.fact').val();
    singleAnimal.image = $(this).find('input.image').val();
    console.log('found updated data for animal: ', singleAnimal);
    updatedAnimal.push(singleAnimal);
  });
  $modal.modal('hide');
}

function handleDeleteClick(e) {
  var animalId = $(this).closest('id');
  console.log('deleting animal', animalId);
  console.log('Id attribute', e);
  $.ajax({
    url: '/api/animals/' + e.target.attributes.handleId.value,
    method: 'DELETE',
    success: handleDeleteAnimalSuccess
  });
}

function handleDeleteAnimalSuccess(data) {
  var deletedAnimalId = data._id;
  data._id = $(this);
  console.log('removing the following animal from the page:', deletedAnimalId);
  window.location.reload();
}


function renderAnimal(animal) {
  console.log('rendering animal', animal);
  var animalHtml = $('#animals-template').html();
  // console.log('got templatehtml');
  var animalsTemplate = Handlebars.compile(animalHtml); //returns a function
  var html = animalsTemplate(animal);
  $('.scrollbox').append(html);
}
});
