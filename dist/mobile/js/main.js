
function getURLParameter(name) {return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;} 
function run_geo(geo_url){
	$.ajax({type: 'GET',url: geo_url,dataType: 'xml',
		success: function(xml) {$(xml).find('ip').each(function(){
			var city = $(this).find('city').text();
			var region = $(this).find('region').text();
			if(city!=region){var ipg = city+', '+region;}else{var ipg = city;}
			$('<input type="hidden" />').attr({name: 'location', class: 'location', value:ipg}).appendTo("form");
		});}});
}

function submit_track_event(event){
    if (yaCounter) {yaCounter.reachGoal(event);}
    if (ga) {ga('send','event','submit',event);}
}




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
			$(this).html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/7y2WOzSyk4w?autoplay=1;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>')
		});

		$('.frame-3d').click(function(e){
			e.preventDefault();
			$(this).html('<iframe width="100%" height="100%" src="http://rehabfamily.ru/flash/flash/pixiq_rehabclinic.html" frameborder="0" allowfullscreen></iframe>')
		});

		$('#video-patient .video-block.alko').click(function(e){
			e.preventDefault();
			$(this).html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/HtlUUKpobes?autoplay=1;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>');
		});
		$('#video-patient .video-block.narko').click(function(e){
			e.preventDefault();
			$(this).html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/XwG0U0quaIA?autoplay=1;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>');
		});
		$('#video-patient .video-block.psiho').click(function(e){
			e.preventDefault();
			$(this).html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/fidDqjvPmZ0?autoplay=1;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>');
		});

		$('#answers .vid-1').click(function(e){
			e.preventDefault();
			$(this).html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/e7wjmR8vMP8?autoplay=1;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>');
		});
		$('#answers .vid-2').click(function(e){
			e.preventDefault();
			$(this).html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/-Rl558Y3Uag?autoplay=1;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>');
		});
		$('#answers .vid-3').click(function(e){
			e.preventDefault();
			$(this).html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/V0SIvVYKzZs?autoplay=1;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>');
		});
		$('#answers .vid-4').click(function(e){
			e.preventDefault();
			$(this).html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/GCTtu1zNv_A?autoplay=1;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>');
		});
		$('#answers .vid-5').click(function(e){
			e.preventDefault();
			$(this).html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/sM3MDtjBIXA?autoplay=1;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>');
		});
		$('#answers .vid-6').click(function(e){
			e.preventDefault();
			$(this).html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/YxyZ467eQYA?autoplay=1;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>');
		});
		$('#answers .vid-7').click(function(e){
			e.preventDefault();
			$(this).html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/YxyZ467eQYA?autoplay=1;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>');
		});
		$('#answers .vid-8').click(function(e){
			e.preventDefault();
			$(this).html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/YqISf4TYe_c?autoplay=1;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>');
		});
		$('#answers .vid-9').click(function(e){
			e.preventDefault();
			$(this).html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/Mtf8lSz2jTk?autoplay=1;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>');
		});



		$('#answers .vid-1').click(function(e){
			e.preventDefault();
			$(this).html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/U0KDPswPyqg?autoplay=1;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>');
		});
		$('#answers .vid-2').click(function(e){
			e.preventDefault();
			$(this).html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/sEBVSnJeXq0?autoplay=1;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>');
		});
		$('#answers .vid-3').click(function(e){
			e.preventDefault();
			$(this).html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/mC5RB1FCE58?autoplay=1;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>');
		});
		$('#answers .vid-4').click(function(e){
			e.preventDefault();
			$(this).html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/FyCh3OQ_BZE?autoplay=1;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>');
		});
		$('#answers .vid-5').click(function(e){
			e.preventDefault();
			$(this).html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/lBvdF0Zm6kg?autoplay=1;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>');
		});
		$('#answers .vid-6').click(function(e){
			e.preventDefault();
			$(this).html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/OKLp83j7tLg?autoplay=1;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>');
		});


		$('#reviews .vid-1').click(function(e){
			e.preventDefault();
			$(this).html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/AXf2W_Em2mo?autoplay=1;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>');
		});
		$('#reviews .vid-2').click(function(e){
			e.preventDefault();
			$(this).html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/m6v8ROKH1Yg?autoplay=1;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>');
		});
		$('#reviews .vid-3').click(function(e){
			e.preventDefault();
			$(this).html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/qTOGRR5CN5c?autoplay=1;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>');
		});
		$('#reviews .vid-4').click(function(e){
			e.preventDefault();
			$(this).html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/UEDir9glviw?autoplay=1;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>');
		});
		$('#reviews .vid-5').click(function(e){
			e.preventDefault();
			$(this).html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/ON0wf8r2xwU?autoplay=1;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>');
		});
		$('#reviews .vid-6').click(function(e){
			e.preventDefault();
			$(this).html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/KxPJ-DIWwZw?autoplay=1;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>');
		});

		$('.simptom .tabs__caption li').click(function() {$('.wrap-content-psiho .ans-video').html('<div class="video-btn"></div>');});
		$('#ans-right li').click(function() {$('#ans-left .ans-video').html('<div class="video-btn"></div>');});


		//fixed menu
		$(window).scroll(function () {
			if($(this).scrollTop() > 100) {
				$('#fixed-menu').addClass('down-menu');
			}
			// if($(this).scrollTop() <= 50 && $('#fixed-menu').hasClass('down-menu')) 
			else {
				$('#fixed-menu').removeClass('down-menu');
			}
		});

		//modal header
		// $('.callback-btn').click(function() {$('#callback-modal').arcticmodal();});
		$('#consult-btn, .consult-fixed, .fixed-zapis').click(function(e) {
			e.preventDefault();
			$('#write-modal').arcticmodal();
			$('#close-menu').trigger('click');
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
		$('.menu .menu-list a.navig').click(function(e){
		  e.preventDefault();
		  $("html, body").animate({ scrollTop: $($(this).attr('href')).offset().top}, 1000);
		  $('body').css({
		  	'overflow-y': 'scroll',
		  	'padding-right': 0
		  });
		  $('.menu').removeClass('down');
		    // $('.menu-btn').removeClass('as-close');
		    $('.close-menu').fadeOut('100');
		    // $('#close-menu').trigger('click');
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
				$('.reviews .video-block').html('<div class="video-btn"></div>');
			},
			onSlidePrev:function($slideElement, oldIndex, newIndex){
				$('.reviews .video-block').html('<div class="video-btn"></div>');
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
		// $("form").submit(function() {
		//     event.preventDefault();
		//     var form_data = $(this).serialize(); //собераем все данные из формы
		//     $.ajax({
		//         type: "POST",
		//         url: "mail.php",
		//         data: form_data,
		//         success: function() {
		//             $('#success-modal').arcticmodal();
		//             $('input[type=text],input[type=tel],input[type=email]').val('');
		//             $('#callback-modal .arcticmodal-close, #write-modal .arcticmodal-close').trigger('click');
		//             $('body').css({'overflow-y': 'scroll'});
		//         }
		//     });
		// });

		//bag firefox
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
				$('.set .ans-video').html('<div class="video-btn"></div>');
			});





		// $("form").submit(function() {
		// 	event.preventDefault();
		// 	var form_data = $(this).serialize(); //собераем все данные из формы
		// 	$.ajax({
		// 		type: "POST",
		// 		url: "/mail.php",
		// 		data: form_data,
		// 		success: function() {
		// 			$('#success-modal').arcticmodal();
		// 			$('input[type=text],input[type=tel],input[type=email]').val('');
		// 			$('#callback-modal .arcticmodal-close, #write-modal .arcticmodal-close').trigger('click');
		// 			$('body').css({'overflow-y': 'scroll'});
		// 		},
		// 		complete: function(response) {
		// 			if (response.readyState === 4 && response.status === 200) {
		// 				alert(response.responseText);
		// 			}
		// 		},
		// 		beforeSend: function(jqXHR, settings) {
		// 			var credentials = Comagic.getCredentials();
		// 			settings.data += '&' + $.param(credentials);
		// 		}
		// 	});
		// });




		$("form").submit(function(event) {
			event.preventDefault();

			// var phone_p1 = $(this).find('.inp-tel-1').val();
			// var phone_p2 = $(this).find('.inp-tel-2').val();
			// var phone_p3 = $(this).find('.inp-tel-3').val();

			// if(phone_p1 == '') {$(this).find('.inp-tel-1').css({'box-shadow': '0 0 4px 1px #F02D0E'});}
			// if(phone_p2 == '') {$(this).find('.inp-tel-2').css({'box-shadow': '0 0 4px 1px #F02D0E'});}
			// if(phone_p3 == '') {$(this).find('.inp-tel-3').css({'box-shadow': '0 0 4px 1px #F02D0E'});}
			// if(phone_p1 == '' || phone_p2 == '' || phone_p3 == '' || phone_p2.length < 3) {
			// 	$('#error-modal').arcticmodal();
			// 	if(phone_p2.length < 3) {
			// 		$(this).find('.inp-tel-2').css({'box-shadow': '0 0 4px 1px #F02D0E'});
			// 	}
			// 	return 0;
			// } else {
			// 	var full_phone = '+' + phone_p1 + ' (' + phone_p2 + ') ' + phone_p3;
			// 	$(this).find('.full_phone').val(full_phone);
			// }

			var form_data = $(this).serialize(); //собераем все данные из формы
			var type=$(this).attr('method');
			var track_event=$(this).find('input[name="event"]').val();

			$.ajax({
				type: "POST",
				url: "/mail.php",
				data: form_data,
				success: function() {
					$('#success-modal').arcticmodal();
					$('input[type=text],input[type=tel],input[type=email]').val('');
					$('#callback-modal .arcticmodal-close, #write-modal .arcticmodal-close').trigger('click');
					$('body').css({'overflow-y': 'scroll'});

					// submit_track_event(track_event);
					yaCounter42910834.reachGoal(track_event);
					ga('send','event','submit',track_event);
				},
				// complete: function(response) {
				// 	if (response.readyState === 4 && response.status === 200) {
				// 		// alert(response.responseText);
				// 	}
				// },
				beforeSend: function(jqXHR, settings) {
					var credentials = Comagic.getCredentials();
					settings.data += '&' + $.param(credentials);
				}
			});
			window.history.pushState(null, null, 'lid.php');
		});




		//UTM GEO
		$.get("http://ipinfo.io", function(response) {geo_url='http://ipgeobase.ru:7020/geo?ip='+response.ip; run_geo(geo_url);}, "jsonp");
		utm=[];$.each(["utm_source","utm_medium","utm_campaign","utm_term",'source_type','source','position_type','position','added','creative','matchtype'],function(i,v){$('<input type="hidden" />').attr({name: v, class: v, value: function(){if(getURLParameter(v) == undefined)return '-'; else return getURLParameter(v)}}).appendTo("form")});
		$('<input type="hidden" />').attr({name: 'url', value: document.location.href}).appendTo("form");
		$('<input type="hidden" />').attr({name: 'title', value: document.title}).appendTo("form");





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


