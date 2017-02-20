(function ($) {

	// start placeholder

	$('input').focus(function(){
		$(this).data('placeholder',$(this).attr('placeholder'))
		$(this).attr('placeholder','');
	});
	$('input').blur(function(){
		$(this).attr('placeholder',$(this).data('placeholder'));
	});		

	// end placeholder
	// start sub-menu
	$('.parrent').click(function(){
		$(this).toggleClass('opened');
	})
	// end sub-menu

	//start styler
	$('input').styler();
	// end styler


	$(window).on('load click', function(){
		$( ".ui-slider-handle" ).html( 0 );		
		$('#5').css('opacity', '1');
	})
       $( ".slider" ).slider({
       			orientation: "vertical",

              	range: "min",
              	value: 5,
              	min: 0,
              	max: 5,
	        step: 1,
	//Получаем значение и выводим его на странице
              	slide: function( event, ui ) {
                  		if (ui.value == 5) { 
                  			$('#_1').css('opacity', '.9');
                  			$( ".ui-slider-handle" ).html( '0' );
                  			$('.inner').css('height', '0');
                  		}
                  		if (ui.value == 4) { 
                  			$('#_1').css('opacity', '.8');
                  			$( ".ui-slider-handle" ).html( '1' );
                  			$('.inner').css('height', '20%');
                  		}
                  		if (ui.value == 3) { 
                  			$('#_1').css('opacity', '.6');
                  			$( ".ui-slider-handle" ).html( '2' );
                  			$('.inner').css('height', '40%');
                  		}
                  		if (ui.value == 2) { 
                  			$('#_1').css('opacity', '.4');
                  			$( ".ui-slider-handle" ).html( '3' );
                  			$('.inner').css('height', '60%');
                  		}
                  		if (ui.value == 1) { 
                  			$('#_1').css('opacity', '.2');
                  			$( ".ui-slider-handle" ).html( '4' );
                  			$('.inner').css('height', '80%');
                  		}
                  		if (ui.value == 0) { 
                  			$('#_1').css('opacity', '.0');
                  			$( ".ui-slider-handle" ).html( '5' );
                  			$('.inner').css('height', '100%');
                  		}
                  		
              	},

	//Обновляем скрытое поле формы, так что можно передать данные с помощью формы
              	change: function(event, ui) { 
              		// $('#hidden').attr('value', ui.value);
              	}
	
});

	// slider 
	$('.ar-top').click(function(){
		$('.inner').removeClass('translateY200');

	})
	$('.ar-bot').click(function(){
		$('.inner').addClass('translateY200');
	})

	//scale

	$('main.content .time-sc .right .scale .img-wr img').click(function(e){
		var div = $('main.content .time-sc .right .scale');
		$('main.content .time-sc .right .scale .b-6').addClass('gr');
		div.find('.no-gr').removeClass('no-gr');
		$(this).parent().addClass('no-gr');
		div.find('.b img').attr('src', 'img/el-bl.png');
		div.find('.w img').attr('src', 'img/el-wh.png');
		$(this).attr('src', 'img/el-act.png');
		if($(this).attr('id') == 'b-1' || $(this).attr('id') == 'w-1' || $(this).attr('id') == 'w-2' || $(this).attr('id') == 'w-3') {
			$('main.content .time-sc .left .datas .l img').attr('src', 'img/ww-85.png');
		}
		if($(this).attr('id') == 'b-2' || $(this).attr('id') == 'w-4' || $(this).attr('id') == 'w-5' || $(this).attr('id') == 'w-6' || $(this).attr('id') == 'w-7') {
			$('main.content .time-sc .left .datas .l img').attr('src', 'img/ww-75.png');
		}
		if($(this).attr('id') == 'b-3' || $(this).attr('id') == 'w-8' || $(this).attr('id') == 'w-9' || $(this).attr('id') == 'w-10') {
			$('main.content .time-sc .left .datas .l img').attr('src', 'img/ww-70.png');
		}
		if($(this).attr('id') == 'b-4' || $(this).attr('id') == 'w-11' || $(this).attr('id') == 'w-12') {
			$('main.content .time-sc .left .datas .l img').attr('src', 'img/ww-65.png');
		}
		if($(this).attr('id') == 'b-5'  || $(this).attr('id') == 'w-13') {
			$('main.content .time-sc .left .datas .l img').attr('src', 'img/ww-60.png');
		}
		if($(this).attr('id') == 'b-6') {
			$('main.content .time-sc .left .datas .l img').attr('src', 'img/ww-55.png');
		}
		
	})

	$('main.content .mob-button').click(function(){
		$('main.content').toggleClass('toggle-header');
		$('header').toggleClass('opacity');
	})
}(jQuery));