head.ready(function() {

	//close on body click
	$(document).on("click", function(){
		$(".js-form").removeClass('is-visible');
		$('.select__list').removeClass('is-visible');
	});

	$('.js-sign').click(function(e){
		$(this).closest('.header__wrap').find('.js-form').toggleClass('is-visible');
		return false;
	});

	$(".js-form").click(function (e) {
		e.stopPropagation();
	});

	//make character small when another is hovered
	$('.js-hover').on('mouseenter', function () {
		$(this).parent().children('.js-hover').find('.character__img').addClass('is-small');
		$(this).find('.character__img').removeClass('is-small');
	});

	$('.js-hover').on('mouseleave', function () {
		$(this).parent().children('.js-hover').find('.character__img').removeClass('is-small');
	});

	//change bg
	$('.radiobox input').on('change', function () {

		var container = $('.content');

		if($(this).val() == 'boy'){
			container.removeClass('right-grey');
			container.addClass('left-grey');
		}
		if($(this).val() == 'girl'){
			container.removeClass('left-grey');
			container.addClass('right-grey');
		}
		if($(this).val() == 'teacher'){
			container.removeClass('left-grey');
			container.removeClass('right-grey');
		}
	});

	// //datepicker
	$(function(){
		$.datepicker.setDefaults(
			$.extend($.datepicker.regional["ru"])
		);
		$(".datepicker").datepicker({
			beforeShow: function(input, inst) {
				var widget = $(inst).datepicker('widget');
				widget.css('margin-left', $(input).outerWidth() - widget.outerWidth());
			}
		});
	});

	//scroll
	$('.js-scroll').jScrollPane();
	$('.tutor__in.js-scroll').jScrollPane({
		verticalDragMaxHeight: 35
	});

	//select dropdown
	$('.select').click(function(){
		$(this).find('.select__list').toggleClass('is-visible');
		return false;
	});

	$('.select a').click(function(e){
		e.preventDefault();

		var value        = $(this).parent('li').data('attr'),
			place        = $(this).closest('.select').find('.select__span'),
			placeWidth   = $(this).closest('.select').find('.select__span').width(),
			elementWidth = $(this).width();

		place.text(value);
		place.removeClass('is-placeholder');

		// console.log(placeWidth, elementWidth);
		// if(placeWidth < elementWidth){
		// 	place.addClass('is-overflow');
		// } else{
		// 	place.removeClass('is-overflow');
		// }
	});

	//dial
	$(function() {
		if($('body').hasClass('is-inner-girl')){
			$(".dial").knob({
				bgColor: "transparent",
				fgColor: "#ed6247"
			});
		} else{
			$(".dial").knob({
				bgColor: "transparent"
			});

		}
	});

	//hint
	$('.js-hint').click(function (e) {
		e.preventDefault();

		var tipWrap = $(this).parent().find('.js-tip');
		var message = $(this).parent().find('.js-tip').children();

		message.removeClass('is-hidden');
		tipWrap.addClass('is-visible');
	});

	$('.js-close').click(function (e) {
		e.preventDefault();
		$(this).parent().addClass('is-hidden');
	});

	//gradients on dashboard
	function gradient(){

		$('.gradients').each(function(){

			var width = $(this).attr('data-width');

			$(this).find('.js-width').css({
				'width': width
			});
			$(this).find('.js-width').addClass('is-load');

		});

	}

	gradient();

	//overlay
	if($('.overlay').length > 0){
		$('body').addClass('is-overflow');
	}

	//range
	$('.js-range').slider({
		range: true,
		min: 10000,
		max: 120000,
		values: [ 50000, 80000 ],
		step: 10000,
		slide: function( event, ui ){

			//low
			if(ui.values[0] < 40000 && ui.values[1] == 40000){
				$('.js-low').addClass('is-visible');
			} else{
				$('.js-low').removeClass('is-visible');
			}

			//middle
			if(ui.values[0] > 40000 && ui.values[1] == 80000){
				$('.js-middle').addClass('is-visible');
			} else{
				$('.js-middle').removeClass('is-visible');
			}

			//high
			if(ui.values[0] == 90000 && ui.values[1] == 120000){
				$('.js-high').addClass('is-visible');
			} else{
				$('.js-high').removeClass('is-visible');
			}
		}
	});

});