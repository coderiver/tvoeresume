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

	var elClass;

	$('.js-bg').click(function(e){

		e.preventDefault();

		var parent = $(this).closest('.js-parent'),
			el     = $(this),
			elData = $(this).data('class');

		$('.js-bg').removeClass('active');
		el.addClass('active');

		setTimeout(function(){
			if(typeof elClass === 'string'){
				parent.removeClass(elClass);
			}

			parent.addClass(elData);
			elClass = elData;

		}, 0);

	});

	//datepicker
	$(function(){
		$.datepicker.setDefaults(
			$.extend($.datepicker.regional["ru"])
		);
		$(".datepicker").datepicker({
			changeMonth: true,
			changeYear: true,
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

	$('.js-list').scroll(function(){
		var scroll = $(".js-list").scrollTop(),
			wrapHeight = $('.js-wrap').height(),
			elHeight = $('.js-list')[0].scrollHeight;

		if(scroll > 0){
			$('.js-up').addClass('is-visible');
		} else{
			$('.js-up').removeClass('is-visible');
		}

		if(scroll >= elHeight - wrapHeight){
			$('.js-down').removeClass('is-visible');
		} else{
			$('.js-down').addClass('is-visible');
		}

	});

	$(".js-down").click(function() {
		$('.js-list').animate({
			scrollTop: $(".js-list").scrollTop() + $('.js-wrap').height()
		 }, 300);
	});

	$(".js-up").click(function() {
		$('.js-list').animate({
			scrollTop: $(".js-list").scrollTop() - $('.js-wrap').height()
		 }, 300);
	});

	function course(){

		var wrap  	  = $('.courses__wrap'),
			block     = wrap.find('.js-clone'),
			title     = wrap.find('.slide__subttl').outerHeight(true),
			list 	  = wrap.find('.js-list'),
			arrowUp   = wrap.closest('.js-parent').find('.js-up'),
			arrowDown = wrap.closest('.js-parent').find('.js-down'),
			height    = block.outerHeight() + title;

		if(block.length <= 3){
			wrap.css({'height': block.length * height});
			list.css({'overflow-y': 'hidden'});
			arrowUp.removeClass('is-visible');
			arrowDown.removeClass('is-visible');
		} else{
			wrap.css({'height': '850px'});
			list.css({'overflow-y': 'auto'});
		}
	}
	course();

	//tags
	$(".js-tags").select2({
		tags: true,
		tokenSeparators: [',', ' '],
		templateSelection: format,
		escapeMarkup: function(m) { return m; },
		minimumInputLength: 2,
		language: 'ru'
	});

	$(".js-select").select2({
		minimumResultsForSearch: Infinity
	});

	function format(opt) {
		var data  = $(opt.element).data('icon');
		if (opt.id && data) {
		   return'<img src="img/svg/' + data + '-h.svg" class="option_ico" /> ' + '<span class="option__text">' + opt.text + '</span>';
		} else {
		   return opt.text;
		}
	}

	function tagMove(el){

		var el 	 	= el,
			elValue = el.data('val');

		if($(".js-tags").length > 0){
			setTimeout(function(){
				var tags = $(".js-tags").val();

				if(tags.indexOf(elValue) == -1){
					tags.push(elValue);
					$(".js-tags").val(tags).trigger('change');
				}
			}, 0);
		}

	}

	$(".item__link").on("click", function (e) {
		e.preventDefault();

		var elValue = $(this).data('val');

		tagMove($(this));
		$(this).closest('.js-parent').find('.js-input').val(elValue);
	});

	$(".item__bl").on("click", function (e) {
		e.preventDefault();
		tagMove($(this));
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

	//tooltip
	$(function () {
		$('.icon-error').tooltip({
			animation: true,
			template: '<div class="tooltip error" role="tooltip"><div class="tooltip-wrap"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div></div>',
			trigger: 'hover'
		});
		// $('.icon-error').tooltip('show');
	})

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