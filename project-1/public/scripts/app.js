/* CLIENT-SIDE JS */

$(document).ready(function() {
  // make an aJAX call to my server  
  $.ajax({
    method: 'GET',
    url: '/api/sanity',
    success: sanitySuccess,
    error: sanityError
  });
});
 function sanitySuccess(success) {
   console.log("YOU DID IT!");
   messageReceived = success;
   console.log(messageReceived);
 }

 function sanityError(error) {
   console.log("ERROR!!");
   console.log(error);
 }
