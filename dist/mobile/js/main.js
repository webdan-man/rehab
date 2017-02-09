"use strict";

$(function(){

	$(document).ready(function(){
		
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
			// $('#fixed-menu').css('padding-left', '0');
			// $('body').css({'overflow-y': 'hidden', 'padding-right': '17px'});
		});
		$('#close-menu').on('click', function() {
			$('.menu').removeClass('down').css('padding-left', '17px');
			// $('#fixed-menu').css('padding-left', '17px');
			// $('body').css({'overflow-y': 'scroll', 'padding-right': '0'});
		});


		//подгрузка объектов
		$('.header .vid-over').click(function(){
			$(this).html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/ogjkRFi810w?autoplay=1;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>')
		});
		$('.frame-3d').click(function(e){
			e.preventDefault();
			$(this).html('<iframe width="100%" height="100%" src="http://rehabfamily.ru/flash/flash/pixiq_rehabclinic.html" frameborder="0" allowfullscreen></iframe>')
		});

		$('.video-block, .vid-1').click(function(e){
			e.preventDefault();
			// if($(this).parent().parent().hasClass('active')) {
				$(this).html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/ogjkRFi810w?autoplay=1;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>');
			// }
		});

		$('.simptom .tabs__caption li').click(function() {$('.wrap-content-psiho .ans-video').html('<img src="img/video-btn.png" alt="btnv">');});
		$('#ans-right li').click(function() {$('#ans-left .ans-video').html('<img src="img/video-btn.png" alt="btnv">');});


		//fixed menu
		$(window).scroll(function () {
			if($(this).scrollTop() > $('section').height()) {
				$('#fixed-menu').addClass('down-menu');
			}
			if($(this).scrollTop() <= 400 && $('#fixed-menu').hasClass('down-menu')) {
				$('#fixed-menu').removeClass('down-menu');
			}
		});

		//modal header
		$('.callback-btn').click(function() {$('#callback-modal').arcticmodal();});
		$('#consult-btn, .consult-fixed, .fixed-zapis').click(function(e) {
			e.preventDefault();
			$('#write-modal').arcticmodal();
		});
		$('#politics').click(function(e) {
			e.preventDefault();
			$('#pol-conf').arcticmodal();
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
		$('.send-write-modal').click(function(event) {
			if($('.person-name-write').val() == '' || $('.person-tel-write').val() == '') {
				event.preventDefault();
				$('#error-modal').arcticmodal();
				if($('.person-name-write').val() == '') {$('.person-name-write').css({'box-shadow': '0 0 4px 1px #F02D0E'});}
				if($('.person-tel-write').val() == '') {$('.person-tel-write').css({'box-shadow': '0 0 4px 1px #F02D0E'});}
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
		$('.send-form-conference').click(function(event) {
			if($('.person-name-conference').val() == '' || $('.person-tel-conference').val() == '' || $('.person-email-conference').val() == '') {
				event.preventDefault();
				$('#error-modal').arcticmodal();
				if($('.person-name-conference').val() == '') {$('.person-name-conference').css({'box-shadow': '0 0 4px 1px #F02D0E'});}
				if($('.person-tel-conference').val() == '') {$('.person-tel-conference').css({'box-shadow': '0 0 4px 1px #F02D0E'});}
				if($('.person-email-conference').val() == '') {$('.person-email-conference').css({'box-shadow': '0 0 4px 1px #F02D0E'});}
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

		// удаление бордер боттом у предыдущего элемента
		$( "#ans-right li.active" ).prev().css( "border-bottom", "none" );

		//плавный переход меню
		$('.menu a').click(function(e){
		  e.preventDefault();
		  $("html, body").animate({ scrollTop: $($(this).attr('href')).offset().top}, 1000);
		  $('body').css({
		  	'overflow-y': 'scroll',
		  	'padding-right': 0
		  });
		  $('.menu').removeClass('down');
		    // $('.menu-btn').removeClass('as-close');
		    $('.close-menu').fadeOut('100');
		});
		
		//bxSlider
		$('.bxslider').bxSlider({
			infiniteLoop: true,
			// nextSelector:'#sld1r',
			// prevSelector:'#sld1l',
			nextText: '<img src="img/right-mob.png" id="sld1r" alt="right">',
			prevText: '<img src="img/left-mob.png" id="sld1l" alt="left">',
			controls: true,
			touchEnabled: true,
			pager:true,
			auto: false,
			speed: 500,
			minSlides: 1,
			maxSlides: 1,
			moveSlides: 1,
			onSlideNext:function($slideElement, oldIndex, newIndex){
				$('.reviews .video-block').html('<img src="img/video-btn.png" alt="btnv">');
			},
			onSlidePrev:function($slideElement, oldIndex, newIndex){
				$('.reviews .video-block').html('<img src="img/video-btn.png" alt="btnv">');
			}
		});
		
		$('.bxslider2-1').bxSlider({
			infiniteLoop: true,
			nextSelector:'#sld2-1r',
			prevSelector:'#sld2-1l',
			nextText: '',
			prevText: '',
			controls: true,
			touchEnabled: true,
			pager:true,
			auto: false,
			speed: 500,
			minSlides: 1,
			maxSlides: 1,
			moveSlides: 1,
			onSlideNext:function($slideElement, oldIndex, newIndex){
				// $('.bxslider2-1 .descr').css('opacity', '0');
				$('.bxslider2-1 .spec-slide').addClass('fadeouted');
				$('.bxslider2-1 .spec-slide').removeClass('active');
				$('.bxslider2-1 .spec-slide[data-sld="'+newIndex+'"]').removeClass('fadeouted');
				$('.bxslider2-1 .spec-slide[data-sld="'+newIndex+'"]').addClass('active');
			},
			onSlidePrev:function($slideElement, oldIndex, newIndex){
				// $('.bxslider2-1 .descr').css('opacity', '0');
				$('.bxslider2-1 .spec-slide').addClass('fadeouted');
				$('.bxslider2-1 .spec-slide').removeClass('active');
				$('.bxslider2-1 .spec-slide[data-sld="'+newIndex+'"]').removeClass('fadeouted');
				$('.bxslider2-1 .spec-slide[data-sld="'+newIndex+'"]').addClass('active');
			},
			onSliderLoad:function(){
				$('.bxslider2-1 .spec-slide.active.bx-clone').removeClass('active');
				$('.bxslider2-1 .spec-slide').addClass('fadeouted');
				$('.bxslider2-1 .spec-slide.active').removeClass('fadeouted');
				$('.bxslider2-1').addClass('loaded-slider');
				// $('.bxslider2-1 .first-slide .descr').css('opacity', '1');
			}
		});
		$('.bxslider2-2').bxSlider({
			infiniteLoop: true,
			nextSelector:'#sld2-2r',
			prevSelector:'#sld2-2l',
			nextText: '',
			prevText: '',
			controls: true,
			touchEnabled: true,
			pager:true,
			auto: false,
			speed: 500,
			minSlides: 1,
			maxSlides: 1,
			moveSlides: 1,
			onSlideNext:function($slideElement, oldIndex, newIndex){
				// $('.bxslider2-2 .descr').css('opacity', '0');
				$('.bxslider2-2 .spec-slide').addClass('fadeouted');
				$('.bxslider2-2 .spec-slide').removeClass('active');
				$('.bxslider2-2 .spec-slide[data-sld="'+newIndex+'"]').removeClass('fadeouted');
				$('.bxslider2-2 .spec-slide[data-sld="'+newIndex+'"]').addClass('active');
			},
			onSlidePrev:function($slideElement, oldIndex, newIndex){
				// $('.bxslider2-2 .descr').css('opacity', '0');
				$('.bxslider2-2 .spec-slide').addClass('fadeouted');
				$('.bxslider2-2 .spec-slide').removeClass('active');
				$('.bxslider2-2 .spec-slide[data-sld="'+newIndex+'"]').removeClass('fadeouted');
				$('.bxslider2-2 .spec-slide[data-sld="'+newIndex+'"]').addClass('active');
			},
			onSliderLoad:function(){
				$('.bxslider2-2 .spec-slide.active.bx-clone').removeClass('active');
				$('.bxslider2-2 .spec-slide').addClass('fadeouted');
				$('.bxslider2-2 .spec-slide.active').removeClass('fadeouted');
				$('.bxslider2-2').addClass('loaded-slider');
				// $('.bxslider2-2 .first-slide .descr').css('opacity', '1');
			}
		});
		$('.bxslider2-3').bxSlider({
			infiniteLoop: true,
			nextSelector:'#sld2-3r',
			prevSelector:'#sld2-3l',
			nextText: '',
			prevText: '',
			controls: true,
			touchEnabled: true,
			pager:true,
			auto: false,
			speed: 500,
			minSlides: 1,
			maxSlides: 1,
			moveSlides: 1,
			onSlideNext:function($slideElement, oldIndex, newIndex){
				// $('.bxslider2-3 .descr').css('opacity', '0');
				$('.bxslider2-3 .spec-slide').addClass('fadeouted');
				$('.bxslider2-3 .spec-slide').removeClass('active');
				$('.bxslider2-3 .spec-slide[data-sld="'+newIndex+'"]').removeClass('fadeouted');
				$('.bxslider2-3 .spec-slide[data-sld="'+newIndex+'"]').addClass('active');
			},
			onSlidePrev:function($slideElement, oldIndex, newIndex){
				// $('.bxslider2-3 .descr').css('opacity', '0');
				$('.bxslider2-3 .spec-slide').addClass('fadeouted');
				$('.bxslider2-3 .spec-slide').removeClass('active');
				$('.bxslider2-3 .spec-slide[data-sld="'+newIndex+'"]').removeClass('fadeouted');
				$('.bxslider2-3 .spec-slide[data-sld="'+newIndex+'"]').addClass('active');
			},
			onSliderLoad:function(){
				$('.bxslider2-3 .spec-slide.active.bx-clone').removeClass('active');
				$('.bxslider2-3 .spec-slide').addClass('fadeouted');
				$('.bxslider2-3 .spec-slide.active').removeClass('fadeouted');
				$('.bxslider2-3').addClass('loaded-slider');
				// $('.bxslider2-3 .first-slide .descr').css('opacity', '1');
			}
		});
		$('.bxslider2-4').bxSlider({
			infiniteLoop: true,
			nextSelector:'#sld2-4r',
			prevSelector:'#sld2-4l',
			nextText: '',
			prevText: '',
			controls: true,
			touchEnabled: true,
			pager:true,
			auto: false,
			speed: 500,
			minSlides: 1,
			maxSlides: 1,
			moveSlides: 1,
			onSlideNext:function($slideElement, oldIndex, newIndex){
				// $('.bxslider2-4 .descr').css('opacity', '0');
				$('.bxslider2-4 .spec-slide').addClass('fadeouted');
				$('.bxslider2-4 .spec-slide').removeClass('active');
				$('.bxslider2-4 .spec-slide[data-sld="'+newIndex+'"]').removeClass('fadeouted');
				$('.bxslider2-4 .spec-slide[data-sld="'+newIndex+'"]').addClass('active');
			},
			onSlidePrev:function($slideElement, oldIndex, newIndex){
				// $('.bxslider2-4 .descr').css('opacity', '0');
				$('.bxslider2-4 .spec-slide').addClass('fadeouted');
				$('.bxslider2-4 .spec-slide').removeClass('active');
				$('.bxslider2-4 .spec-slide[data-sld="'+newIndex+'"]').removeClass('fadeouted');
				$('.bxslider2-4 .spec-slide[data-sld="'+newIndex+'"]').addClass('active');
			},
			onSliderLoad:function(){
				$('.bxslider2-4 .spec-slide.active.bx-clone').removeClass('active');
				$('.bxslider2-4 .spec-slide').addClass('fadeouted');
				$('.bxslider2-4 .spec-slide.active').removeClass('fadeouted');
				$('.bxslider2-4').addClass('loaded-slider');
				// $('.bxslider2-4 .first-slide .descr').css('opacity', '1');
			}
		});
		$('.bxslider2-5').bxSlider({
			infiniteLoop: true,
			nextSelector:'#sld2-5r',
			prevSelector:'#sld2-5l',
			nextText: '',
			prevText: '',
			controls: true,
			touchEnabled: true,
			pager:true,
			auto: false,
			speed: 500,
			minSlides: 1,
			maxSlides: 1,
			moveSlides: 1,
			onSlideNext:function($slideElement, oldIndex, newIndex){
				// $('.bxslider2-5 .descr').css('opacity', '0');
				$('.bxslider2-5 .spec-slide').addClass('fadeouted');
				$('.bxslider2-5 .spec-slide').removeClass('active');
				$('.bxslider2-5 .spec-slide[data-sld="'+newIndex+'"]').removeClass('fadeouted');
				$('.bxslider2-5 .spec-slide[data-sld="'+newIndex+'"]').addClass('active');
			},
			onSlidePrev:function($slideElement, oldIndex, newIndex){
				// $('.bxslider2-5 .descr').css('opacity', '0');
				$('.bxslider2-5 .spec-slide').addClass('fadeouted');
				$('.bxslider2-5 .spec-slide').removeClass('active');
				$('.bxslider2-5 .spec-slide[data-sld="'+newIndex+'"]').removeClass('fadeouted');
				$('.bxslider2-5 .spec-slide[data-sld="'+newIndex+'"]').addClass('active');
			},
			onSliderLoad:function(){
				$('.bxslider2-5 .spec-slide.active.bx-clone').removeClass('active');
				$('.bxslider2-5 .spec-slide').addClass('fadeouted');
				$('.bxslider2-5 .spec-slide.active').removeClass('fadeouted');
				$('.bxslider2-5').addClass('loaded-slider');
				// $('.bxslider2-5 .first-slide .descr').css('opacity', '1');
			}
		});

		//MAPS OVER
		$('.kak-dobrat').click(function() {
			$('.wrap-for-map .tabs__content.active .overmap').addClass('hidden');
			$('.wrap-for-map .tabs__content.active .overmap-descr').removeClass('hidden');
		});
		$('.back').click(function() {
			$('.wrap-for-map .tabs__content.active .overmap').removeClass('hidden');
			$('.wrap-for-map .tabs__content.active .overmap-descr').addClass('hidden');
		});

		//CUSTOM SCROLL
		$(".mScroll").mCustomScrollbar({
			theme: "rounded-dark",
			mouseWheel: {scrollAmount: 50},
			scrollInertia: 200
		});


		// // отправка формы
		$("form").submit(function() {
		    event.preventDefault();
		    var form_data = $(this).serialize(); //собераем все данные из формы
		    $.ajax({
		        type: "POST",
		        url: "mail.php",
		        data: form_data,
		        success: function() {
		            $('#success-modal').arcticmodal();
		            $('input[type=text],input[type=tel],input[type=email]').val('');
		            $('#callback-modal .arcticmodal-close, #write-modal .arcticmodal-close').trigger('click');
		            $('body').css({'overflow-y': 'scroll'});
		        }
		    });
		});
		$('.arcticmodal-close').click(function() {
			$('body').css({'overflow-y': 'scroll'});
		});

			//ACCORDION
			$(".set > a").on("click", function(e) {
				e.preventDefault();
				if ($(this).hasClass('active')) {
					$(this).removeClass("active");
					$(this).siblings('.content-accord').slideUp(200);
				} else {
					$(".set > a").removeClass("active");
					$(this).addClass("active");
					$('.content-accord').slideUp(200);
					$(this).siblings('.content-accord').slideDown(200);
				}
			});

			$('.set a').click(function() {
				$('.set .ans-video').html('<img src="img/video-btn.png" alt="btnv">');
			});





//==========EoF==============
	}); //doc.ready

	// ТАБЫ
	$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
		$(this)
		.addClass('active').siblings().removeClass('active')
		.closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
		$("#ans-right li:not(.active)" ).css( {'border-bottom': '1px solid #cdcdcd'});
		$("#ans-right li.active" ).prev().css( "border-bottom", "none");
	});


});//function


