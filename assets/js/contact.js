
$( document ).ready(function() {

       $('form').submit(function(event) {
           event.preventDefault();

           $.ajax({
               url: "https://formspree.io/hlmathies@gmail.com",
               method: "POST",
               dataType: "json",
               data: {
                   name: $('#js-name').val(),
                   email: $('#js-email').val(),
                   message: $('#js-message').val()
               },
               success: function(data){
                   $("form").trigger("reset"); //reset form
                   alert("Thanks for your message! I'll be in touch.");

               }
       });

   });

 });
