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
      }]
    };
    console.log('formData', dataObject);
    $.post('/api/animals', dataObject, function(animal) {
      console.log('animal after POST', animal);
      renderAnimal(animal);  //render the server's response
    });
    $(this).trigger("reset");
  });


  // $('#animals').on('click', handleAnimalClick);
  $('#animals').on('click', '.delete-animal', handleDeleteClick);
  $('#animals').on('click', 'edit-animal', handleEditClick);
  // $('#animals').on('click', '.save-animal', handleSaveClick);
});

// var animalId = $modal.find('form').data('animal-id');

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

//   // show the save changes button
//   $albumRow.find('.save-album').toggleClass('hidden');
//   // hide the edit button
//   $albumRow.find('.edit-album').toggleClass('hidden');
//
//
//   // get the album name and replace its field with an input element
//   var albumName = $albumRow.find('span.album-name').text();
//   $albumRow.find('span.album-name').html('<input class="edit-album-name" value="' + albumName + '"></input>');
//
//   // get the artist name and replace its field with an input element
//   var artistName = $albumRow.find('span.artist-name').text();
//   $albumRow.find('span.artist-name').html('<input class="edit-artist-name" value="' + artistName + '"></input>');
//
//   // get the releasedate and replace its field with an input element
//   var releaseDate = $albumRow.find('span.album-releaseDate').text();
//   $albumRow.find('span.album-releaseDate').html('<input class="edit-album-releaseDate" value="' + releaseDate + '"></input>');
// }
//
// // after editing an album, when the save changes button is clicked
// function handleSaveChangesClick(e) {
//   var albumId = $(this).parents('.album').data('album-id'); // $(this).closest would have worked fine too
//   var $albumRow = $('[data-album-id=' + albumId + ']');
//
//   var data = {
//     name: $albumRow.find('.edit-album-name').val(),
//     artistName: $albumRow.find('.edit-artist-name').val(),
//     releaseDate: $albumRow.find('.edit-album-releaseDate').val()
//   };
//   console.log('PUTing data for album', albumId, 'with data', data);
//
//   $.ajax({
//     method: 'PUT',
//     url: '/api/albums/' + albumId,
//     data: data,
//     success: handleAlbumUpdatedResponse
//   });
}


function handleDeleteClick(e) {
  // var animalId = $(this).parents('.animal').data('animal-id');
  var animalId = $(this).closest('id');
  console.log('deleting animal', animalId);
  $.ajax({
    url: '/api/animals/:id' + animalId,
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
