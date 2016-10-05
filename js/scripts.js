var y = $(window).scrollTop();

$('.move-down').click(function() {
  $(window).scrollTop($(window).height());
  console.log("yo1");
});

$(window).scroll(function(){
  if ($(window).scrollTop() >= 100){
    $('.navigation').addClass('nav-fade');
    $('.logo').addClass('logo-shrink');
    $('.burger-icon').addClass('burger-shrink');
    $('.minimize-icon').addClass('minimize-shrink');
  }
  if ($(window).scrollTop() < 100){
    $('.navigation').removeClass('nav-fade');
    $('.logo').removeClass('logo-shrink');
    $('.burger-icon').removeClass('burger-shrink');
    $('.minimize-icon').removeClass('minimize-shrink');
  }
});

$('.nav-toggle-burger').click(function() {
  console.log("hit");
  $('.nav-toggle-burger').addClass('nav-hidden');
  $('.nav-toggle-minimize').removeClass('nav-hidden');
});

$('.nav-toggle-minimize').click(function() {
  console.log("hit2");
  $('.nav-toggle-minimize').addClass('nav-hidden');
  $('.nav-toggle-burger').removeClass('nav-hidden');
});
