$(document).ready(function() {
  $('#fullpage').fullpage({
    loopBottom: true,
    slidesNavigation: false,
    verticalCentered: false,
    lazyloading: true,
    recordHistory: true,
    anchors: ['hello', 'cip', '0001', 'processing', 'photography'], 
  });
});

function main() {
  $('p').hide();
  $('p').slideToggle(900);
  $('p').fadeIn(1000);
};


$(document).ready(main);