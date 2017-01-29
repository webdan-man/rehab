"use strict";

$(function(){

	$(document).ready(function(){

		// стабилизация
		var isMobile = false;

		function stabilize(){
			$('section:not(:hidden)').each(function(index, el) {
				var eTop = $(this).offset().top; 
				var posTop = eTop - $(window).scrollTop();
				if(posTop>-$(window).height()/2&&posTop<$(window).height()/2){
					$("html, body").animate({ scrollTop: $(this).offset().top}, 250);
				}
			});
		}

		$("html, body").on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){
			$("html, body").stop();
		});

		if (isMobile != true) {
			$(window).scroll(function(){
				clearTimeout($.data(this, 'scrollTimer'));				
				$.data(this, 'scrollTimer',setTimeout(stabilize,1500));
			});
		}
		
		// убираем плейсхолдер при фокусе
		$('input, textarea').focus(function(){
			$(this).data('placeholder',$(this).attr('placeholder'))
			$(this).attr('placeholder','');
		});
		$('input,textarea').blur(function(){
			$(this).attr('placeholder',$(this).data('placeholder'));
		});

		//работа меню
		$('.menu-btn').on('click', function() {
			$('.menu').addClass('down').css('padding-left', '0');
			$('body').css({'overflow': 'hidden', 'padding-right': '17px'});
		});
		$('#close-menu').on('click', function() {
			$('.menu').removeClass('down').css('padding-left', '17px');
			$('body').css({'overflow': 'auto', 'padding-right': '0'});
		});






//==========EoF==============
});
});