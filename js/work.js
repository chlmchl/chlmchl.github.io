$(document).ready(function() {
  $('#fullpage').fullpage({
    loopBottom: true,
    slidesNavigation: true,
    verticalCentered: false,
    recordHistory: true,
    paddingBottom: '150px',
    lazyloading: true,
    anchors: ['2016', '2015'],
    menu: '#menu',
    scrollOverflow: true,
  });
});
