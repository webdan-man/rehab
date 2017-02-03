"use strict";

$(function(){

	$(document).ready(function(){

		
		$.mCustomScrollbar.defaults.theme="light-2"; //set "light-2" as the default theme
		
		$(".demo-y").mCustomScrollbar();
		
		$(".demo-x").mCustomScrollbar({
			axis:"x",
			advanced:{autoExpandHorizontalScroll:true}
		});
		
		$(".demo-yx").mCustomScrollbar({
			axis:"yx"
		});
		
		$(".scrollTo a").click(function(e){
			e.preventDefault();
			var $this=$(this),
				rel=$this.attr("rel"),
				el=rel==="content-y" ? ".demo-y" : rel==="content-x" ? ".demo-x" : ".demo-yx",
				data=$this.data("scroll-to"),
				href=$this.attr("href").split(/#(.+)/)[1],
				to=data ? $(el).find(".mCSB_container").find(data) : el===".demo-yx" ? eval("("+href+")") : href,
				output=$("#info > p code"),
				outputTXTdata=el===".demo-yx" ? data : "'"+data+"'",
				outputTXThref=el===".demo-yx" ? href : "'"+href+"'",
				outputTXT=data ? "$('"+el+"').find('.mCSB_container').find("+outputTXTdata+")" : outputTXThref;
			$(el).mCustomScrollbar("scrollTo",to);
			output.text("$('"+el+"').mCustomScrollbar('scrollTo',"+outputTXT+");");
		});
		

		// стабилизация
		var isMobile = false; //initiate as false
		// device detection
		if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
		    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;

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
			$(this).html('<iframe width="100%" height="100%" src="http://rehabfamily.ru/flash/flash/pixiq_rehabclinic.html" frameborder="0" allowfullscreen></iframe>')
		});

		$('.video-block, .vid-1').click(function(e){
			e.preventDefault();
			$(this).html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/ogjkRFi810w?autoplay=1;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>')
		});

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
		$('#consult-btn, .consult-fixed').click(function(e) {
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
		
		

		//bxSlider
		$('.bxslider').bxSlider({
			infiniteLoop: true,
			// nextSelector:'#sld1r',
			// prevSelector:'#sld1l',
			nextText: '<img src="img/rev-r.png" id="sld1r" alt="right">',
			prevText: '<img src="img/rev-l.png" id="sld1l" alt="left">',
			controls: true,
			touchEnabled: false,
			pager:false,
			auto: false,
			speed: 500,
			minSlides: 1,
			maxSlides: 1,
			moveSlides: 1
		});
		
		$('.bxslider2-1').bxSlider({
			infiniteLoop: true,
			nextSelector:'#sld2-1r',
			prevSelector:'#sld2-1l',
			nextText: '',
			prevText: '',
			controls: true,
			touchEnabled: false,
			pager:false,
			auto: false,
			speed: 500,
			minSlides: 1,
			maxSlides: 1,
			moveSlides: 1,
			onSlideNext:function($slideElement, oldIndex, newIndex){
				$('.bxslider2-1 .descr').css('opacity', '0');
				$('.bxslider2-1 .spec-slide').addClass('fadeouted');
				$('.bxslider2-1 .spec-slide').removeClass('active');
				$('.bxslider2-1 .spec-slide[data-sld="'+newIndex+'"]').removeClass('fadeouted');
				$('.bxslider2-1 .spec-slide[data-sld="'+newIndex+'"]').addClass('active');
			},
			onSlidePrev:function($slideElement, oldIndex, newIndex){
				$('.bxslider2-1 .descr').css('opacity', '0');
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
				$('.bxslider2-1 .first-slide .descr').css('opacity', '1');
			}
		});
		$('.bxslider2-2').bxSlider({
			infiniteLoop: true,
			nextSelector:'#sld2-2r',
			prevSelector:'#sld2-2l',
			nextText: '',
			prevText: '',
			controls: true,
			touchEnabled: false,
			pager:false,
			auto: false,
			speed: 500,
			minSlides: 1,
			maxSlides: 1,
			moveSlides: 1,
			onSlideNext:function($slideElement, oldIndex, newIndex){
				$('.bxslider2-2 .descr').css('opacity', '0');
				$('.bxslider2-2 .spec-slide').addClass('fadeouted');
				$('.bxslider2-2 .spec-slide').removeClass('active');
				$('.bxslider2-2 .spec-slide[data-sld="'+newIndex+'"]').removeClass('fadeouted');
				$('.bxslider2-2 .spec-slide[data-sld="'+newIndex+'"]').addClass('active');
			},
			onSlidePrev:function($slideElement, oldIndex, newIndex){
				$('.bxslider2-2 .descr').css('opacity', '0');
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
				$('.bxslider2-2 .first-slide .descr').css('opacity', '1');
			}
		});
		$('.bxslider2-3').bxSlider({
			infiniteLoop: true,
			nextSelector:'#sld2-3r',
			prevSelector:'#sld2-3l',
			nextText: '',
			prevText: '',
			controls: true,
			touchEnabled: false,
			pager:false,
			auto: false,
			speed: 500,
			minSlides: 1,
			maxSlides: 1,
			moveSlides: 1,
			onSlideNext:function($slideElement, oldIndex, newIndex){
				$('.bxslider2-3 .descr').css('opacity', '0');
				$('.bxslider2-3 .spec-slide').addClass('fadeouted');
				$('.bxslider2-3 .spec-slide').removeClass('active');
				$('.bxslider2-3 .spec-slide[data-sld="'+newIndex+'"]').removeClass('fadeouted');
				$('.bxslider2-3 .spec-slide[data-sld="'+newIndex+'"]').addClass('active');
			},
			onSlidePrev:function($slideElement, oldIndex, newIndex){
				$('.bxslider2-3 .descr').css('opacity', '0');
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
				$('.bxslider2-3 .first-slide .descr').css('opacity', '1');
			}
		});
		$('.bxslider2-4').bxSlider({
			infiniteLoop: true,
			nextSelector:'#sld2-4r',
			prevSelector:'#sld2-4l',
			nextText: '',
			prevText: '',
			controls: true,
			touchEnabled: false,
			pager:false,
			auto: false,
			speed: 500,
			minSlides: 1,
			maxSlides: 1,
			moveSlides: 1,
			onSlideNext:function($slideElement, oldIndex, newIndex){
				$('.bxslider2-4 .descr').css('opacity', '0');
				$('.bxslider2-4 .spec-slide').addClass('fadeouted');
				$('.bxslider2-4 .spec-slide').removeClass('active');
				$('.bxslider2-4 .spec-slide[data-sld="'+newIndex+'"]').removeClass('fadeouted');
				$('.bxslider2-4 .spec-slide[data-sld="'+newIndex+'"]').addClass('active');
			},
			onSlidePrev:function($slideElement, oldIndex, newIndex){
				$('.bxslider2-4 .descr').css('opacity', '0');
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
				$('.bxslider2-4 .first-slide .descr').css('opacity', '1');
			}
		});
		$('.bxslider2-5').bxSlider({
			infiniteLoop: true,
			nextSelector:'#sld2-5r',
			prevSelector:'#sld2-5l',
			nextText: '',
			prevText: '',
			controls: true,
			touchEnabled: false,
			pager:false,
			auto: false,
			speed: 500,
			minSlides: 1,
			maxSlides: 1,
			moveSlides: 1,
			onSlideNext:function($slideElement, oldIndex, newIndex){
				$('.bxslider2-5 .descr').css('opacity', '0');
				$('.bxslider2-5 .spec-slide').addClass('fadeouted');
				$('.bxslider2-5 .spec-slide').removeClass('active');
				$('.bxslider2-5 .spec-slide[data-sld="'+newIndex+'"]').removeClass('fadeouted');
				$('.bxslider2-5 .spec-slide[data-sld="'+newIndex+'"]').addClass('active');
			},
			onSlidePrev:function($slideElement, oldIndex, newIndex){
				$('.bxslider2-5 .descr').css('opacity', '0');
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
				$('.bxslider2-5 .first-slide .descr').css('opacity', '1');
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
