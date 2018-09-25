$(document).ready(function() {
  $(window).scroll($.throttle(200, setActiveClass));
});

function setActiveClass( event ) {
  var position = $(window).scrollTop() + $(window).height() / 2;
  var $background = $('#background-image');

  $('article').each(function(index, article) {
    var $article = $(article)
    var articleTop = $article.position().top;
    var articleHeight = $article.innerHeight();

    if (position > articleTop && articleTop + articleHeight > position) {
      var src = $article.attr('data-background');

      $background.empty();
      $background.append('main > article.active:before { background-image: url(' + src + ')}');

      $article.addClass('active');
    } else {
      $article.removeClass('active');
    }
  });
};