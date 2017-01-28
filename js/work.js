$(document).ready(function() {
  $('#fullpage').fullpage({
    loopBottom: true,
    slidesNavigation: true,
    verticalCentered: false,
    recordHistory: true,
    anchors: ['work'],
    menu: '#menu', 
    afterRender: function(){
       $('#menu').hide();
    },
    afterLoad: function(anchor, index) {
      if (index == 1){
        $('#menu').fadeOut();
      } else {
        $('#menu').fadeIn();   
      }
    }
  });
});