/* CLIENT-SIDE JS */


$(document).ready(function() {
  console.log('app.js loaded!');
  $.get('/api/animals').success(function (animals) {
    albums.forEach(function(animal) {
      renderAnimal(animal);
    });
  });
});



 $(document).ready(function() {
   console.log('app.js loaded!');
   $.ajax({
     url: '/api/animals',
     method: 'GET',
     success: handleSuccess,
     error: handleError
   });
 });


    function handleSuccess(json){
    console.log(json);
    json.forEach(renderAnimal);
    }

    function handleError(e) {
      console.log('uh oh');
      $('#albums').text('Something went wrong.');
    }
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

 // this function takes a single album and renders it to the page
   function renderAnimal(animal) {
     //console.log('rendering album:', album)
   console.log('rendering animal', animal);
   var animalHtml = $('#animal-template').html();
   //console.log('got templatehtml')
   var animalstemplate = Handlebars.compile(animalHtml); //returns a function
   var html = animalstemplate(animal);
   $('#animals').prepend(html);
 }
