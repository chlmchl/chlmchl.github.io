$(document).ready(function() {
  $('#fullpage').fullpage({
    loopBottom: true,
    navigation: true,
    scrollOverflow: true,
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