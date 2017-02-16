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

       $( ".slider" ).slider({
       			orientation: "vertical",
 	        	animate: true,
              	range: "min",
              	value: 50,
              	min: 10,
              	max: 100,
	        step: 10,
              
	//Получаем значение и выводим его на странице
              	slide: function( event, ui ) {
                  		$( "#slider-result" ).html( ui.value );
              	},

	//Обновляем скрытое поле формы, так что можно передать данные с помощью формы
              	change: function(event, ui) { 
              		$('#hidden').attr('value', ui.value);
              	}
	
});


}(jQuery));