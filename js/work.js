$(document).ready(function() {
  $('#fullpage').fullpage({
    loopBottom: true,
    slidesNavigation: true,
    scrollOverflow: true,
    verticalCentered: false,
    recordHistory: true,
    anchors: ['projets', 'work', 'about'],
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