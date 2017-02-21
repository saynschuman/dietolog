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

	$('main.content .mob-button').click(function(){
		$('main.content').toggleClass('toggle-header');
		$('header').toggleClass('opacity');
	})

// validation

  $("#request-popup").validate({
    rules:{
      name:{
        required: true,
        minlength: 2
      },
      password:{
        required: true,
        minlength: 5
      },
      'second-name': {
        required: true,
        minlength: 2
      },
      login: {
        required: true,
        minlength: 2
      },
      wmr: {
        required: true,
        minlength: 2  
      },
      email:{
        required: true
      },
      'password-again': {
        equalTo: "#password"
      }
    },
    messages:{
      name:{
        required: "Это поле обязательно для заполнения",
        minlength: jQuery.validator.format("Введите, как минимум, два символа")
      },
      'second-name': {
        required: "Это поле обязательно для заполнения",
        minlength: jQuery.validator.format("Введите, как минимум, два символа")
      },
      login:{
        required: "Это поле обязательно для заполнения",
        minlength: jQuery.validator.format("Введите, как минимум, два символа")
      },
      email: {
        required: "Это поле обязательно для заполнения",
        minlength: jQuery.validator.format("Введите, как минимум, два символа"),
        email: 'Email должен содержать символ "@" а также имя доменной зоны'
      },
      wmr: {
        required: "Это поле обязательно для заполнения",
        minlength: jQuery.validator.format("Введите, как минимум, два символа")
      },            
      password:{
        required: "Это поле обязательно для заполнения",
        minlength: jQuery.validator.format("Пароль должен содержать не менее 5-ти символов")
      },
      'password-again': {
        equalTo: "Пароли не совпадают"
      }     
      }           
        
  });

  $("#enter-popup").validate({
    rules:{
      login:{
        required: true,
        minlength: 2
      },
      password:{
        required: true,
        minlength: 5
      }
    },
    messages:{
      login:{
        required: "Это поле обязательно для заполнения",
        minlength: jQuery.validator.format("Введите, как минимум, два символа")
      },
      password:{
        required: "Это поле обязательно для заполнения",
        minlength: jQuery.validator.format("Хм.. с таким коротким паролем тебя быстро взломают")
      }
      }           
        
  });


  
}(jQuery));