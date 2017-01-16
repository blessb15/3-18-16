$(document).ready(function(){

  var y = $(window).scrollTop();

  $('.move-down').click(function() {
    $(window).scrollTop($(window).height());
  });

  $(window).scroll(function(){
    if ($(window).scrollTop() >= 100 || $('.contact-window').hasClass('active')){
      $('.navigation').addClass('nav-fade');
    }
    if ($(window).scrollTop() < 100 && !($('.contact-window').hasClass('active'))){
      $('.navigation').removeClass('nav-fade');
    }

  });

  $('.chucksplace .image-overlay').hover(function() {
    $('.chucksplace .overlay-text').show();
    $('.chucksplace-image').addClass('blur');
  }, function(){
    $('.chucksplace-image').removeClass('blur');
    $('.chucksplace .overlay-text').hide();
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
    $('.blocktalk-image').addClass('blur');
  }, function(){
    $('.blocktalk-image').removeClass('blur');
    $('.blocktalk .overlay-text').hide();
  });

  $('.brief .image-overlay').hover(function() {
    $('.brief .overlay-text').show();
    $('.brief-image').addClass('blur');
  }, function(){
    $('.brief-image').removeClass('blur');
    $('.brief .overlay-text').hide();
  });

  $('.nav-contact').click(function(){
    if($('.contact-window').hasClass('active')){
      $('.contact-window').removeClass('active');
    } else {
      $('.contact-window').addClass('active');
      $('.navigation').addClass('nav-fade');
    }
  });

});
