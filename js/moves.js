var y = $(window).scrollTop();
var expressit = $('.expressit').height();
var totallyserious = $('.totallyserious').height();
var blocktalk = $('.blocktalk').height();

$('.move-down').click(function() {
  $(window).scrollTop($(window).height());
  console.log("yo1");
});

$('.move-down2').click(function() {
  $(window).scrollTop($(window).height() * 2);
  console.log("yo2");
});

$('.move-down3').click(function() {
  $(window).scrollTop($(window).height() * 3);
  console.log("yo3");
});

$('.move-up').click(function() {
  $(window).scrollTop(totallyserious - blocktalk - expressit);
  console.log("yo4");
});
