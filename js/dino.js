$(document).ready(function() {
    var getDinos = $.get('http://dinoipsum.herokuapp.com/api/?format=html&paragraphs=3'),
    fillContainer = function(html) {
      $('#some-awesome-container').html(html);
    },
    oops = function() {
      console.log('Where did all the dinosaurs go?');
    };
    $('.button').click(function() {
    getDinos.then(fillContainer, oops);
    event.preventDefault();
  });
});
