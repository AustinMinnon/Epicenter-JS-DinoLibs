// var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('.button').click(function() {
    var input = $('#name').val();
    event.preventDefault();
    // $('#location').val("");
    $('.name').text("your input " + input + ".");
    $.get('http://dinoipsum.herokuapp.com/api/?format=html&paragraphs=3&words=15', function(response) {
      console.log(response);
    });
  });
});
