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

		//подгрузка объектов
		$('.header .vid-over').click(function(){
		  $(this).html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/ogjkRFi810w?autoplay=1;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>')
		});
		$('.frame-3d').click(function(e){
			e.preventDefault();
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
		$('#right-button').click(function(event) {
			if($('#calc-name').val() == '' || $('#calc-tel').val() == '') {
				event.preventDefault();
				$('#error-modal').arcticmodal();
				if($('#calc-name').val() == '') {$('#calc-name').css({'box-shadow': '0 0 4px 1px #F02D0E'});}
				if($('#calc-tel').val() == '') {$('#calc-tel').css({'box-shadow': '0 0 4px 1px #F02D0E'});}
			}
		});

		//style select
		$('.slct').click(function(){
			/* Заносим выпадающий список в переменную */
			var dropBlock = $(this).parent().find('.drop');
			/* Делаем проверку: Если выпадающий блок скрыт то делаем его видимым*/
			if( dropBlock.is(':hidden') ) {
				dropBlock.slideDown('fast');
				/* Выделяем ссылку открывающую select */
				$(this).addClass('active');
				/* Работаем с событием клика по элементам выпадающего списка */
				$('.drop').find('li').click(function(){
					/* Заносим в переменную HTML код элемента
					списка по которому кликнули */
					var selectResult = $(this).html();
					/* Находим наш скрытый инпут и передаем в него
					значение из переменной selectResult */
					$(this).parent().parent().find('input').val(selectResult);
					/* Передаем значение переменной selectResult в ссылку которая
					открывает наш выпадающий список и удаляем активность */
					$(this).parent().parent().find('.slct').removeClass('active').html(selectResult);
					/* Скрываем выпадающий блок */
					dropBlock.slideUp('fast');
				});
			/* Продолжаем проверку: Если выпадающий блок не скрыт то скрываем его */
			} else {
				$(this).removeClass('active');
				dropBlock.slideUp('fast');
			}
			/* Предотвращаем обычное поведение ссылки при клике */
			return false;
		});

		//masked phone
		$(".masked").mask("+7 (999) 999-99-99");








//==========EoF==============
});
});