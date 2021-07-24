
function openNav() {
  document.getElementById("myNav").style.height = "100%";
  $('ul.main_nav li:first-child a').mouseover();    
}
function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

jQuery(document).ready(function($){
  var $overlay = $('<div id="overlay"></div>')
  var $image = $('<img>');
  $overlay.append($image);
  $('body').append($overlay);
  //Hover and show in big image
  $('.thumb a').hover(function(){
    var $src = $(this).attr('data-img-src');
    $('#main-img img').attr('src', $src);
  });
});

$(document).ready(function () {
    ma5menu({
        position: 'left',
        closeOnBodyClick: true
    });
});