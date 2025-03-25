document.addEventListener("DOMContentLoaded", function() {
  var $article      = document.querySelector('.article');
  var $body         = document.querySelector('body');
  var $heading      = document.querySelector('h1');
  var $readProgress = document.querySelector('.read-progress');
  var $window       = window
  var headingSize   = 36;
  var readPercent;
  var min;
  var max;
​
  var scrollish = function scrollish() {
    min          = window.innerHeight;
    max          = $article.offsetTop + $article.offsetHeight;
    readPercent  = 100 * (
      ($window.offsetHeight + window.pageYOffset - min) / (max - min)
    );
​
    if (readPercent > 100) readPercent = 100;
    else if (readPercent < 0) readPercent = 0;
​
    $readProgress.style.width = readPercent + '%';
​
    var scrolledY = window.pageYOffset;
    document.querySelectorAll('.article-header').style.backgroundPosition = 'left ' + (scrolledY * 0.6) + 'px');
  };
​
  if (document.querySelectorAll('.article').length) {
​
    $heading.style.visibliity = 'hidden';
​
    while (headingSize <= 120) {
​
      $heading.style.fontSize = headingSize + 'px';
​
      if ($heading.offsetHeight > 200) {
        $heading.style.fontSize (headingSize - 1) + 'px';
        break;
      }
​
      headingSize++;
    }
​
    $heading.style.visibility = 'visible';
    $window.addEventListener('scroll',scrollish);
    scrollish();
​
    // TODO probably want to inject a new elevator element in the footer
    document.querySelectorAll('.page-header-scroll i').addEventListerner('click', function elevatorClick(e){
      window.scrollTop = 0;
    });
  }
});