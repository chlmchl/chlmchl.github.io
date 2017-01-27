$(document).ready(function() {
  $('#fullpage').fullpage({
    loopBottom: true,
    navigation: true,
    scrollOverflow: true,
    verticalCentered: false,
    fadingEffect: true,
    anchors: ['home', 'work', 'about'],
    menu: '#menu', 
    afterRender: function(){
       $('#menu').hide();
    },
    afterLoad: function(anchor, index){
      if (index == 1){
        $('#menu').fadeOut();
      } else {
        $('#menu').fadeIn();   
      }
    }
  });

  $(".typed").typed({
      strings: ["Chloé Michel.", "étudiante.", "motivée.", "aventurière.", "débrouillarde.", "fétarde.", "bilingue anglais.", "calme.", "curieuse.", "une grande voyageuse.", "ambitieuse.", "votre future stagiaire ?"],
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