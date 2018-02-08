
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

               }
       });

   });

 });


        //
        //    $.ajax({
        //        url: 'insert.php',
        //        dataType: 'text',
        //        type: 'post',
        //        contentType: 'application/x-www-form-urlencoded',
        //        data: $(this).serialize(),
        //        success: function( data, textStatus, jQxhr ){
        //         $('#alertt').fadeIn(2000);
        //         $('#alertt').html( data );
        //         $('#alertt').fadeOut(3000);
        //        resetForm('userInf');
        //     },
        //     error: function( jqXhr, textStatus, errorThrown ){
        //         console.log( errorThrown );
        //     }
        // });
