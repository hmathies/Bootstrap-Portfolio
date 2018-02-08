$(document).ready(function(){


    $(".submit").click(function(event){
      event.preventDefault();

      $.ajax({
          url: "http://formspree.io/hlmathies@gmail.com",
          method: "POST",
          data: {
              name: $('#js-name').val(),
              email: $('#js-email').val(),
              message: $('#js-message').val()
          },
          dataType: "json"
        }).error(function(jqXHR, status, error){
          alert("Ooops! Something went wrong. Please try again.");
        }).success(function(data,status,jqXHR){
          alert("Thanks for your message!");
          $(".submit").find("#js-name, #js-email, #js-message").val("");
        })
      });
    });

});


// $( document ).ready(function() {
//
//     $('form').submit(function(event) {
//         event.preventDefault();
//
//         $.ajax({
//             url: "http://formspree.io/alena@makeschool.com",
//             method: "POST",
//             data: {
//                 email: $('#js-email').val(),
//                 message: $('#js-message').val()
//             },
//             dataType: "json"
//         }).error(function(jqXHR, status, error){
//             alert('Uh oh, something went wrong. Please try again.');
//         }). success(function(data, status, jqXHR) {
//             alert('Thank you for your message. Kitty will get back to you soon.');
//             $('form').find('#js-email, #js-message').val('');
//         });
//     });
//
// });
