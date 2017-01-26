$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['home', 'work', 'about']
  });

  $(".typed").typed({
      strings: ["la street.", "ma gueule.", "bien ou bien ?"],
      loop: true
  });

  $('.img-container img').each(function(index, item) {
    $(item).css('transition-delay', index * 0.05 + 's');
  })

  $('.img-container img').hover(function(event) {
    var src = $(event.target).attr('src');

    $('.img-container img').css('opacity', '0');
    $('.grid-background img').attr('src', src);
  },
  function(event) {
    $('.img-container img').css('opacity', '1');
  });
});