$(function() {
    $('body').removeClass('fade-out');
});




function collapse() {
  $('.menu__item').click(function(event) {
    if ($(event.target).parents('.collapsible').length === 0) {
      event.preventDefault();

      $(event.target).parents('.menu__item-wrapper').first().find('.collapsible').first().slideToggle();
    }
  });
}


/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2014, Codrops
 * http://www.codrops.com
 * Based on the <a href="https://dribbble.com/shots/1663008-Old-Designspiration-Menu-Concept">Dribble shot by Michael Martinho
 */
(function() {

  var bodyEl = document.body,
    content = document.querySelector( '.section' ),
    openbtn = document.getElementById( 'open-button' ),
    closebtn = document.getElementById( 'close-button' ),
    isOpen = false;

  function init() {
    initEvents();
  }

  function initEvents() {
    openbtn.addEventListener( 'click', toggleMenu );
    if( closebtn ) {
      closebtn.addEventListener( 'click', toggleMenu );
    }

    // close the menu element if the target it´s not the menu element or one of its descendants..
    content.addEventListener( 'click', function(ev) {
      var target = ev.target;
      if( isOpen && target !== openbtn ) {
        toggleMenu();
      }
    } );
  }

  function toggleMenu() {
    if( isOpen ) {
      classie.remove( bodyEl, 'show-menu' );
    }
    else {
      classie.add( bodyEl, 'show-menu' );
    }
    isOpen = !isOpen;
  }

  init();

})();



$(document).ready(function() {
  collapse();
  $('.tell-me-more').click(function(event) {
    $($(event.target).attr('target')).fadeToggle();
  });
  $(document).click(function(event) {
    if ($(event.target).hasClass('overlay')) {
      $(event.target).parent().fadeToggle();
    }
  });
  $(document).keydown(function(event) {
    if (event.which === 27) {
      $('.overlay').parent().fadeOut();
    }
  });
});
