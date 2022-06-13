$(function() {

	new WOW().init();

	$(".hamburger").click(function(){
		$(this).toggleClass("is-active");

		if($(this).hasClass('is-active')){
			$('.menu').slideDown(300);
		}else{
			$('.menu').slideUp(300);
		}
	});

});