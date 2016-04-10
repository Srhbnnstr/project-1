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

});

function renderAnimal(animal) {
  console.log('rendering animal', animal);
  var animalHtml = $('#animals-template').html();
  // console.log('got templatehtml');
  var animalsTemplate = Handlebars.compile(animalHtml); //returns a function
  var html = animalsTemplate(animal);
  $('.scrollbox').append(html);
}

$('Animal').on('click', handleAnimalClick);

// when the add song button is clicked, display the modal
function handleAnimalClick(e) {
  console.log('animal clicked!');
  var currentAnimalId = $(this).closest('.data-animal-id').data('animal-id');
  console.log('id',currentAnimalId);
  $('#animalModal').data('animal-id', currentAnimalId);
  $('#animalModal').modal();  // display the modal!
  }

// (function() {
//   // Simple modal
// 	var modal = {
// 		init: function() {
// 			// Setup the template
// 			this.source = $("#modal-template").html();
// 			// Setup outercontainer
// 			this.outercontainer = $('body');
// 			// Get the stuff
// 			this.clickToOpenModal();
// 			// Close the stuff
// 			this.closeModal();
//
// 		},
// 		clickToOpenModal: function(context, thisLink) {
// 			$('h4').on('click', function(e) {
//         console.log('i was clicked');
// 				var thisLink = $(this);
// 				var context = {
				// 	title: thisLink.data('title'),
				// 	content: thisLink.data('content')

// 				e.preventDefault();
// 		     // Do nothing if open
// 		     if ( modal.outercontainer.children('div#modal').length ) return;
// 		     // Attach the content to the the modal
// 				modal.attachTemplate(context, thisLink);
// 				// Trigger the open event
// 				thisLink.trigger('open');
// 			});
//
// 		},
// 		attachTemplate: function(context, thisLink) {
// 			 var source = Handlebars.compile(this.source);
//         this.outercontainer
//           .append(source(context))
//           .promise()
//           .done(function() {
//           this
//             .children('div#modal')
//             .addClass('modal-visible');
//            // Close the stuff
//            thisLink.one('open', function() {
//              modal.closeModal();
//            });
//
//        });
// 		},
// 		closeModal: function() {
// 			var container = $("div#modal");
// 			// Remove modal on click background
// 			container.on('click', function() {
// 				container.remove();
// 			});
// 			// Remove modal on keypress ESC
// 			$(document).on( 'keydown', function (e) {
// 			    if ( e.keyCode === 27 ) {
// 			       container.remove();
// 			    }
// 			});
// 			// You can click on modal body
// 			container.find('div.modal-body').on('click', function(e) {
// 				e.stopPropagation();
// 			});
// 		}
// 	};
//
// 	modal.init();
//
// })();
