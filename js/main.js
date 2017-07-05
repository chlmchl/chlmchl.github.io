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

$(document).ready(function() {
  var scene = document.getElementById('parallax');
  var parallax = new Parallax(scene, { 
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
});

$(document).ready(function() {
  var scene = document.getElementById('parallax_0001');
  var parallax = new Parallax(scene, { 
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
});

$(document).ready(main);