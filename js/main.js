function fullpage() {
  $('#fullpage').fullpage({
    loopBottom: true,
    slidesNavigation: false,
    verticalCentered: false,
    normalScrollElements: '.desc',
    lazyloading: true,
    recordHistory: true,
    anchors: ['hello', 'cip', 'bodydouble', '0001', 'processing', 'photography'],
    onLeave: function(index, nextIndex) {
      if (index === 1) {
        $('header button a p').first().addClass('orange');
        $('#EN_FR ul li a').addClass('orange');
      }
      if (nextIndex === 1) {
        $('header button a p').first().removeClass('orange');
        $('#EN_FR ul li a').removeClass('orange');
      }
      if (nextIndex === 6) {
        $('footer.footer').show();
      } else {
        $('footer.footer').hide();
      }
    }
  });
};


// function parallax() {
//   var paris = $('#parallax_paris').get(0);
//   var iphone = $('#parallax_0001').get(0);
//   var svg = $('#svg_parallax').get(0);

  

//   var construct = function(selector) {
//     return new Parallax(selector, {
//       calibrateX: false,
//       calibrateY: true,
//       invertX: true,
//       invertY: true,
//       limitX: false,
//       limitY: false,
//       scalarX: 2,
//       scalarY: 1,
//       frictionX: 0.1,
//       frictionY: 0.1,
//       originX: 0.1,
//       originY: 0.1,
//     });
//   };
//   construct(paris);
//   construct(iphone);
//   construct(svg);

// };

function main() {
  $('p').hide();
  $('p').slideToggle(900);
  $('p').fadeIn(1000);
};

$(document).ready(function() {
  console.log('lolo');
  fullpage();
  // parallax();
  main();
});
