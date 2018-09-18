$(function() { //создаем функцию
  $('.toggles button').click(function(){ //с эффектом при клики на класс toggles и button
    var getId = this.id;
    var getCurrent = $('.posts .' + getId);

    $('.post').not(getCurrent).hide(500);
    getCurrent.show(500); //обращаемся к классу .ПОСТ при клики показывал одинаковые классы
  });

  $('#showall').click(function() {
    $('.post').show(500); //Показывать все
  });
});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items:8
  });
});

if($(window).width() < 420){
  $(".owl-carousel").owlCarousel({
    items:3
  });
}
