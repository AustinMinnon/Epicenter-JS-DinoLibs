$(document).ready(function() {
  $('.button').click(function() {
    var paragraphs = $('#paragraphs').val();
    var words = $('#words').val();
    var getUserDinos = $.get('http://dinoipsum.herokuapp.com/api/?format=html&paragraphs='+ paragraphs +'&words='+ words),
    fillContainer = function(html) {
      $('#some-awesome-container').append(html);
    },
    oops = function() {
      console.log('Where did all the dinosaurs go?');
    };
    getUserDinos.then(fillContainer, oops);
    event.preventDefault();
  });
    $('.button2').click(function() {
    var getDinos = $.get('http://dinoipsum.herokuapp.com/api/?format=html&paragraphs=3'),
      fillContainer = function(html) {
        $('#some-custom-container').html(html);
      },
      oops = function() {
        console.log('Where did all the dinosaurs go?');
      };
      getDinos.then(fillContainer, oops);
      event.preventDefault();
  });
});

// http://dinoipsum.herokuapp.com/api?key1=value1&key2=value2...
// 'http://dinoipsum.herokuapp.com/api?' + paragraphs + '=value1&'
//  + words + '=value2...'

// (http://dinoipsum.herokuapp.com/api?key1=value1&key2=value2...)
//  comment
 // ('http://dinoipsum.herokuapp.com/api/?format=html&paragraphs=' + paragraphs + '&words=' + words)

// ('http://dinoipsum.herokuapp.com/api?key1=' + paragraphs + 'value1&key2=' + words + '...')

// var paragraphs = $('#paragraphs').val();
// var words = $('#words').val();
// event.preventDefault();
// $.get('http://dinoipsum.herokuapp.com/api?' + paragraphs + '=value1&'
//  + words + '=value2...').then(function(response) {
//    $("#dino").append(response[1])
//  }).fail(function(error) {
//   $('.error').text(error.responseJSON.message);
// });
