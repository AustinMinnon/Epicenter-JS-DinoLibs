// var apiKey = require('./../.env').apiKey;

$(function(){
  $('.button').click(function() {
    // var city = $('#location').val();
    // $('#location').val("");
    $.get('http://dinoipsum.herokuapp.com/api?key1=value1&key2=value2...').then(function(response)
     {
// pull dinos here
    }).fail(function(error) {
      $('.error').text(error.message);
    });
  });
});
