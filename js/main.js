function translate() {
  i18n.init(function(err, t) {
    $("body").i18n({
      lng: "en",
      escapeInterpolation: false
    });
  });
  console.log('lala1');
};

function fullpage() {
  $('#fullpage').fullpage({
    loopBottom: true,
    slidesNavigation: false,
    verticalCentered: false,
    normalScrollElements: '.desc',
    lazyloading: true,
    recordHistory: true,
    anchors: ['hello', 'cip', '0001', 'processing', 'photography'],
  });
};


function parallax() {
  var logo = $('#parallax').get(0);
  var iphone = $('#parallax_0001').get(0);
  var svg = $('#svg_parallax').get(0);
  var paris = $('#parallax_paris').get(0);

  var construct = function(selector) {
    return new Parallax(selector, {
      calibrateX: false,
      calibrateY: true,
      invertX: true,
      invertY: true,
      limitX: false,
      limitY: false,
      scalarX: 2,
      scalarY: 1,
      frictionX: 0.1,
      frictionY: 0.1,
      originX: 0.1,
      originY: 0.1,
    });
  };

  construct(paris);
  construct(logo);
  construct(iphone);
  construct(svg);

};

function main() {
  $('p').hide();
  $('p').slideToggle(900);
  $('p').fadeIn(1000);
};

$(document).ready(function() {
  translate();
  fullpage();
  parallax();
  main();
});
