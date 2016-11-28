$(document).ready(function(){

  var y = $(window).scrollTop();

  $('.move-down').click(function() {
    $(window).scrollTop($(window).height());
  });

  $(window).scroll(function(){
    if ($(window).scrollTop() >= 100){
      $('.navigation').addClass('nav-fade');
    }
    if ($(window).scrollTop() < 100){
      $('.navigation').removeClass('nav-fade');
    }
  });

  $('.expressit .image-overlay').hover(function() {
    $('.expressit .overlay-text').show();
    $('.expressit-image').addClass('blur');
  }, function(){
    $('.expressit .overlay-text').hide();
    $('.expressit-image').removeClass('blur');
  });

  $('.thinkdifferent .image-overlay').hover(function() {
    $('.thinkdifferent .overlay-text').show();
    $('.thinkdifferent-image').addClass('blur');
  }, function(){
    $('.thinkdifferent-image').removeClass('blur');
    $('.thinkdifferent .overlay-text').hide();
  });

  $('.totallyserious .image-overlay').hover(function() {
    $('.totallyserious .overlay-text').show();
    $('.totallyserious-image').addClass('blur');
  }, function(){
    $('.totallyserious-image').removeClass('blur');
    $('.totallyserious .overlay-text').hide();
  });

  $('.blocktalk .image-overlay').hover(function() {
    $('.blocktalk .overlay-text').show();
    $('.blacktalk-image').addClass('blur');
  }, function(){
    $('.blocktalk-image').removeClass('blur');
    $('.blocktalk .overlay-text').hide();
  });

});
