var y = $(window).scrollTop();

$('.move-down').click(function() {
  $(window).scrollTop(y + 770);
});

$('.move-down2').click(function() {
  $(window).scrollTop(y + 1540);
});

$('.move-down3').click(function() {
  $(window).scrollTop(y + 2310);
});

$('.move-up').click(function() {
  $(window).scrollTop();
});
