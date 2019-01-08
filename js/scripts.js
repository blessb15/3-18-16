$(document).ready(function(){
	$('.top-btn').hide();
	var y = $(window).scrollTop();

	$('#projects').click(function(){
		var element = document.getElementById('projectsDiv');
		element.scrollIntoView({behavior: "smooth"});
	});	

	$(window).scroll(function(){
		console.log($(window).scrollTop());
		if ($(window).scrollTop() >= 100 || $('.contact-window').hasClass('active')){
			$('.navigation').addClass('nav-fade');
		}
		if ($(window).scrollTop() < 100 && !($('.contact-window').hasClass('active'))){
			$('.navigation').removeClass('nav-fade');
		}
		if($(window).width() > 1037){
			if($(window).scrollTop() + $(window).height() == $(document).height()){
				$('.top-btn').fadeIn();
			} else {
				$('.top-btn').fadeOut();
			}
		}
	});

	if($(window).width() < 1037){
		$('.top-btn').hide();
	}
	$(window).resize(function(){
		if($(window).width() < 1037){
			$('.top-btn').fadeOut();
		}
	})

	$('.top-btn, .nav-logo').click(function(){$('html, body').animate({scrollTop:0},500);return false;});

	$('.expressit .image-overlay').hover(function() {
		$('.expressit .overlay-text').show();
		$('.expressit-image').addClass('blur');
	}, function(){
		$('.expressit .overlay-text').hide();
		$('.expressit-image').removeClass('blur');
	});

	$('.dapperdev .image-overlay').hover(function() {
		$('.dapperdev .overlay-text').show();
		$('.dapperdev-image').addClass('blur');
	}, function(){
		$('.dapperdev-image').removeClass('blur');
		$('.dapperdev .overlay-text').hide();
	});

	var isNav = false;
	$('.nav-contact').click(function(){
		if(isNav == false){
			$('.contact-window').addClass('active');
			$('.navigation').addClass('nav-active');
			isNav = true;
		} else {
			isNav = false; 
			$('.contact-window').removeClass('active');
			$('.navigation').removeClass('nav-active');
		}
	});

});
