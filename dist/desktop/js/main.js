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
			$(this).css({'box-shadow': 'none'});
			$(this).data('placeholder',$(this).attr('placeholder'))
			$(this).attr('placeholder','');
		});
		$('input,textarea').blur(function(){
			$(this).attr('placeholder',$(this).data('placeholder'));
		});

		//работа меню
		$('.menu-btn').on('click', function() {
			$('.menu').addClass('down').css('padding-left', '0');
			$('#fixed-menu').css('padding-left', '0');
			$('body').css({'overflow': 'hidden', 'padding-right': '17px'});
		});
		$('#close-menu').on('click', function() {
			$('.menu').removeClass('down').css('padding-left', '17px');
			$('#fixed-menu').css('padding-left', '17px');
			$('body').css({'overflow': 'auto', 'padding-right': '0'});
		});

		//video in header
		$('.header .vid-over').click(function(){
		  $(this).html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/ogjkRFi810w?autoplay=1;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>')
		});

		//fixed menu
		$(window).scroll(function () {
			if($(this).scrollTop() > 400) {
				$('#fixed-menu').addClass('down-menu');
			}
			if($(this).scrollTop() <= 400 && $('#fixed-menu').hasClass('down-menu')) {
				$('#fixed-menu').removeClass('down-menu');
			}
		});

		//modal header
		$('.callback-btn').click(function() {$('#callback-modal').arcticmodal();});
		$('#consult-btn').click(function(e) {
			e.preventDefault();
			$('#write-modal').arcticmodal();
		});

		//неправильный ввод полей
		$('.send-form').click(function(event) {
			if($('.person-name').val() == '' || $('.person-tel').val() == '') {
				event.preventDefault();
				$('#error-modal').arcticmodal();
				if($('.person-name').val() == '') {$('.person-name').css({'box-shadow': '0 0 4px 1px #F02D0E'});}
				if($('.person-tel').val() == '') {$('.person-tel').css({'box-shadow': '0 0 4px 1px #F02D0E'});}
			}
		});
		$('.send-form-modal').click(function(event) {
			if($('.person-name-modal').val() == '' || $('.person-tel-modal').val() == '') {
				event.preventDefault();
				$('#error-modal').arcticmodal();
				if($('.person-name-modal').val() == '') {$('.person-name-modal').css({'box-shadow': '0 0 4px 1px #F02D0E'});}
				if($('.person-tel-modal').val() == '') {$('.person-tel-modal').css({'box-shadow': '0 0 4px 1px #F02D0E'});}
			}
		});

		

		//masked phone
		$(".masked").mask("+7 (999) 999-99-99");








//==========EoF==============
});
});