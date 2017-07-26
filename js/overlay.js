$(document).ready(function() {
  $('.toggle-overlay').click(function() {
    $('aside').toggleClass('open');
  });

  $('body').keydown(function(event) {
  	if (event.keyCode === 27) {
  		$('aside').removeClass('open');
  	}
  });
});