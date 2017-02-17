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
	$(window).on('load', function(){
		$( ".ui-slider-handle" ).html( 5 );
		$('#5').css('opacity', '1');
	})
       $( ".slider" ).slider({
       			orientation: "vertical",
 	        	animate: 'fast',
              	range: "min",
              	value: 5,
              	min: 0,
              	max: 5,
	        step: 1,
	//Получаем значение и выводим его на странице
              	slide: function( event, ui ) {
                  		$( ".ui-slider-handle" ).html( ui.value );
                  		if (ui.value == 1) { 
                  			$('.human').css('opacity', '0');
                  			$('#1').css('opacity', '1');
                  		}
                  		if (ui.value == 2) { 
                  			$('.human').css('opacity', '0');
                  			$('#2').css('opacity', '1');
                  		}
                  		if (ui.value == 3) { 
                  			$('.human').css('opacity', '0');
                  			$('#3').css('opacity', '1');
                  		}
                  		if (ui.value == 4) { 
                  			$('.human').css('opacity', '0');
                  			$('#4').css('opacity', '1');
                  		}
                  		if (ui.value == 5) { 
                  			$('.human').css('opacity', '0');
                  			$('#5').css('opacity', '1');
                  		}
                  		
              	},

	//Обновляем скрытое поле формы, так что можно передать данные с помощью формы
              	change: function(event, ui) { 
              		$('#hidden').attr('value', ui.value);
              	}
	
});
       
}(jQuery));