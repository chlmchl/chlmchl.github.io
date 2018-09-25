$(document).ready(function() {
  $('main article').click(function(event) {
    if (!$('.modal-overlay').hasClass('visible')) {
      toggleModal(event);
    }
  });

  $('.modal-overlay').click(function(event) {
    if ($(event.target).is('.modal-overlay')) {
      toggleModal(event);
    }
  });

  $('.modal-overlay button').click(function(event) {
    toggleModal(event);
  });

  $(document).keydown(function(event) {
    if (event.which === 27) {
      toggleModal(event);
    }
  });
});

var toggleModal = function(event) {
  event.stopPropagation();
  if ($('.modal-overlay.visible').length) {
    $('.modal-overlay').removeClass('visible');
    $('body').css('overflow', 'auto');
    
    $('iframe').each(function(index, iframe) {
      var message = JSON.stringify({ method: 'pause' });

      iframe.contentWindow.postMessage(message ,'*');
    });
  } else {
    $(event.currentTarget).find('.modal-overlay').addClass('visible');
    $('body').css('overflow', 'hidden');

  }
}