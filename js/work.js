$(document).ready(function() {
  $('#fullpage').fullpage({
    loopBottom: true,
    slidesNavigation: true,
    verticalCentered: false,
    recordHistory: true,
    paddingBottom: '150px',
    lazyloading: true,
    anchors: ['work'],
    menu: '#menu',
    scrollOverflow: true
  });
});
