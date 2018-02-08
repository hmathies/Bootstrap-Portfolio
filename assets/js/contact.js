

$( document ).ready(function() {

    $('form').submit(function(event) {
        event.preventDefault();
        alert("working");

        $.ajax({
            url: "https://formspree.io/hlmathies@gmail.com",
            method: "POST",
            data: {
                name: $('#js-name').val(),
                email: $('#js-email').val(),
                message: $('#js-message').val()
            },
            dataType: "json"
        }).error(function(jqXHR, status, error){
            alert('Ooops! Something went wrong. Please try again."');
        }).success(function(data, status, jqXHR) {
            alert('Thank you for your message!');
            $('form').find('#js-name, #js-email, #js-message').val('');
        });
    });

});
