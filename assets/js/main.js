$(document).ready(function () {
  navmenuColor();
  localize();

  $(".beer-slider").each(function () { new BeerSlider(this); });
});

$(function () {
  $(document).scroll(navmenuColor);
});

function navmenuColor() {
  var $nav = $("header");
  if ($("content").length) $nav.toggleClass("scrolled", $(document).scrollTop() > $("content").offset().top - $nav.height() - 30);
  else $nav.removeClass("scrolled");
}

function localize() {
  $.ajax("languages/" + (Cookies.get("language") ?? "english") + ".json", { dataType: "json" }).done(function (data) {
    $("[id*=txt-]").each(function () {
      $(this).html(data[$(this).attr("id")]);
    });
    $("[id*=beer-]").each(function () {
      $(this).attr("data-beer-label", data[$(this).attr("id")]);
    });
    $("body").trigger("localized");
  });
}
function changeLanguage(lang) {
  Cookies.set("language", lang, { sameSite: 'Lax', expires: 365 });
  localize();
}

function getLatestRelease(repo, event) {
  $.ajax("https://api.github.com/repos/MazeWave/" + repo + "/releases/latest", { dataType: "json" }).done(function (data) {
    window.location = data.assets[0].browser_download_url;
  });
  event.preventDefault();
}