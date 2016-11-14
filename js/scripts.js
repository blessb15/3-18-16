$(document).ready(function(){

  var y = $(window).scrollTop();

  $('.move-down').click(function() {
    $(window).scrollTop($(window).height());
  });

  $(window).scroll(function(){
    if ($(window).scrollTop() >= 100){
      $('.navigation').addClass('nav-fade');
      $('.logo').addClass('logo-shrink');
      $('.burger-icon').addClass('burger-shrink');
      $('.minimize-icon').addClass('minimize-shrink');
      $('.nav-window').addClass('nav-window-fade');
    }
    if ($(window).scrollTop() < 100){
      $('.navigation').removeClass('nav-fade');
      $('.logo').removeClass('logo-shrink');
      $('.burger-icon').removeClass('burger-shrink');
      $('.minimize-icon').removeClass('minimize-shrink');
      $('.nav-window').removeClass('nav-window-fade');
    }
  });

  $('.nav-option').click(function(){
    $('.nav-toggle-minimize').addClass('nav-hidden');
    $('.nav-fixed').addClass('nav-hidden');
    $('.nav-toggle-burger').removeClass('nav-hidden');
    $('.nav-window').hide();
  });

  $('.nav-toggle-burger').click(function() {
    $('.nav-toggle-burger').addClass('nav-hidden');
    $('.nav-toggle-minimize').removeClass('nav-hidden');
    $('.nav-fixed').removeClass('nav-hidden');
    $('.nav-window').show();
  });

  $('.nav-toggle-minimize').click(function() {
    $('.nav-toggle-minimize').addClass('nav-hidden');
    $('.nav-fixed').addClass('nav-hidden');
    $('.nav-toggle-burger').removeClass('nav-hidden');
    $('.nav-window').hide();
  });

  $('.email-send').click(function(){
    $('.contact').hide();
    $('.projects').show();
  });

  var timeLoop = setTimeout(projectPicLoop, 5000);

  var expressItImages = ['img/exp2.png', 'img/exp3.png', 'img/expressitpic.png'];
  var thinkDifferetImages = ['img/TD2.png', 'img/TD3.png', 'img/thinkdifferent.png'];
  var totallyseriousImages = ['img/TSP2.png', 'img/TSP3.png', 'img/TotallySerious.png'];

  var int = 0;

  function projectPicLoop(){
    $('.expressit').css('background-image', 'url(' + expressItImages[int] + ')');
    $('.thinkdifferent').css('background-image', 'url(' + thinkDifferetImages[int] + ')');
    $('.totallyserious').css('background-image', 'url(' + totallyseriousImages[int] + ')');

    int ++;

    if (int > 2){
      int = 0;
    }

    setTimeout(projectPicLoop, 5000);
  }

  $('.expressit .image-overlay').hover(function() {
    $('.expressit .overlay-text').show();
  }, function(){
    $('.expressit .overlay-text').hide();
  });

  $('.thinkdifferent .image-overlay').hover(function() {
    $('.thinkdifferent .overlay-text').show();
  }, function(){
    $('.thinkdifferent .overlay-text').hide();
  });

  $('.totallyserious .image-overlay').hover(function() {
    $('.totallyserious .overlay-text').show();
  }, function(){
    $('.totallyserious .overlay-text').hide();
  });

  $('.blocktalk .image-overlay').hover(function() {
    $('.blocktalk .overlay-text').show();
  }, function(){
    $('.blocktalk .overlay-text').hide();
  });

});
