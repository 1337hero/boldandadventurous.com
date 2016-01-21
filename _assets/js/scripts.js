$(document).ready(function documentReady() {

  var $article      = $('.article').eq(0);
  var $body         = $('body').eq(0);
  var $heading      = $('h1').eq(0);
  var $readProgress = $('.read-progress').eq(0);
  var $window       = $(window);
  var headingSize   = 36;
  var readPercent;
  var min;
  var max;

  var scrollish = function scrollish() {

    min          = $window.height();
    max          = ($article.offset().top + $article.height());
    readPercent  = 100 * (
      ($window.height() + window.pageYOffset - min) / (max - min)
    );

    if (readPercent > 100) readPercent = 100;
    else if (readPercent < 0) readPercent = 0;

    $readProgress.width(readPercent + '%');

    var scrolledY = $window.scrollTop();
    $('.article-header').css(
      'background-position',
      'left ' + (scrolledY * 0.6) + 'px'
    );
  };

  if ($article.length) {

    $heading.css('visibility', 'hidden');

    while (headingSize <= 120) {

      $heading.css('fontSize', headingSize + 'px');

      if ($heading.height() > 200) {
        $heading.css('fontSize', (headingSize - 1) + 'px');
        break;
      }

      headingSize++;
    }

    $heading.css('visibility', 'visible');
    $window.scroll(scrollish);
    scrollish();

    // TODO probably want to inject a new elevator element in the footer
    $('.page-header-scroll i').on('click', function elevatorClick(e) {

      window.scrollTo(0, 0);
    });
  }
});



