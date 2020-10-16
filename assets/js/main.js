$(document).ready(function () {
  navmenuColor();
});

$(function () {
  $(document).scroll(navmenuColor);
});

function navmenuColor() {
  var $nav = $("header");
  $nav.toggleClass("scrolled", $(document).scrollTop() > $("content").offset().top - $nav.height() - 30);
}
