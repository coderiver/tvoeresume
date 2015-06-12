head.ready(function() {

	//popup sign
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

	//select dropdown
	$('.select').click(function(){
		$(this).find('.select__list').toggleClass('is-visible');
		return false;
	});

	$('.select a').click(function(e){
		e.preventDefault();

		var value = $(this).parent('li').data('attr'),
			place = $(this).closest('.select').find('.select__span');

		place.text(value);
	});
});