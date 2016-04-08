/* CLIENT-SIDE JS */

$(document).ready(function() {
  // make an aJAX call to my server

 function handleSuccess(json){
 console.log(json);
 json.forEach(renderAnimal);
 }

 function handleError(e) {
   console.log('uh oh');
   $('#albums').text('Something went wrong.');
 }


 $(document).ready(function() {
   console.log('app.js loaded!');
   $.ajax({
     url: '/api/animals',
     method: 'GET',
     success: handleSuccess,
     error: handleError
   });

   $('#aninmal-form form').on ('submit', handleAnimalSubmit);
  });

 function handleAnimalSubmit(e) {
   e.preventDefault();
   var formData =$(this).serialize();
   // $.post('/api/albums', formData, handleFormSubmitResponse);
   $.ajax({
   method: 'POST',
   url: '/api/animals',
   data: formData,
   success: handleFormSubmitResponse
 });

 $(this).trigger('reset');
 }

 function handleFormSubmitResponse(json) {
   console.log("rendering animal", json);
   renderAnimal(json);
 }

   $( "#animal-form" ).on( "submit", function( event ) {
   event.preventDefault();
   console.log( $( this ).serialize() );
   $(this).trigger('reset');
 });

 // this function takes a single album and renders it to the page
   function renderAnimal(animal) {
     //console.log('rendering album:', album)
   console.log('rendering animal', animal);
   var templateHtml = $('#animal-template').html();
   //console.log('got templatehtml')
   var templateFun = Handlebars.compile(templateHtml); //returns a function
   var newHtml = templateFun(animal-template);
   $('#animals').prepend(newHtml);
 }
 });
 });
