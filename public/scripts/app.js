/* CLIENT-SIDE JS */

$(document).ready(function() {
  console.log('app.js loaded!');
  $.get('/api/animals').success(function (animals) {
    animals.forEach(function(animal) {
      renderAnimal(animal);
    });
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

 //
 // $(document).ready(function() {
 //   console.log('app.js loaded!');
 //   $.ajax({
 //     url: '/api/animals',
 //     method: 'GET',
 //     success: handleSuccess,
 //     error: handleError
 //   });
 // });

    // function handleSuccess(json){
    // console.log(json);
    // json.forEach(renderAnimal);
    // }
    //
    // function handleError(e) {
    //   console.log('uh oh');
    //   $('#albums').text('Something went wrong.');
    // }
 //
 //   $('#aninmal-form form').on ('submit', handleAnimalSubmit);
 //  });
 //
 // function handleAnimalSubmit(e) {
 //   e.preventDefault();
 //   var formData =$(this).serialize();
 //   // $.post('/api/albums', formData, handleFormSubmitResponse);
 //   $.ajax({
 //   method: 'POST',
 //   url: '/api/animals',
 //   data: formData,
 //   success: handleFormSubmitResponse
 // });
 //
 // $(this).trigger('reset');
 // }
 //
 // function handleFormSubmitResponse(json) {
 //   console.log("rendering animal", json);
 //   renderAnimal(json);
 // }
 //
 //   $( "#animal-form" ).on( "submit", function( event ) {
 //   event.preventDefault();
 //   console.log( $( this ).serialize() );
 //   $(this).trigger('reset');
 // });
