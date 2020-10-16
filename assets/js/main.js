$(document).ready(function () {
  navmenuColor();
  localize();
});

$(function () {
  $(document).scroll(navmenuColor);
});

function navmenuColor() {
  var $nav = $("header");
  $nav.toggleClass("scrolled", $(document).scrollTop() > $("content").offset().top - $nav.height() - 30);
}

function localize() {
  $.ajax("languages/"+(Cookies.get('language') ?? "english")+".json", { dataType: "json" }).done(function (data) {
  $("[id*=txt-]").each(function () {
    $(this).html(data[$(this).attr("id")]);
  });
  });
}
function changeLanguage(lang){
    Cookies.set('language', lang);
    localize();
}
