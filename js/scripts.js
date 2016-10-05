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
  }
  if ($(window).scrollTop() < 100){
    $('.navigation').removeClass('nav-fade');
    $('.logo').removeClass('logo-shrink');
    $('.burger-icon').removeClass('burger-shrink');
  }
});
