$(document).ready(function() {

   //style input
   var $inputs = $(".input-form input, .input-form textarea");

   $inputs.on('focus', function() {
     var $self =  $(this);
     $self.prev().addClass('active');
   });

   $inputs.on('focusout', function() {
     var $self =  $(this);
     $self.val() == "" ? $self.prev().removeClass('active') : "";
   });
   
   //form steps
  $('#step1 .btn-form').click(function() {
      $('#step1').hide();
      $('#step2').show();
  });

  $('#step2 .btn-form').click(function() {
    $(' #step2').hide();
    $('#step3').show();
  });

  $('#backStep1').click(function() {
    $(' #step2').hide();
    $('#step1').show();
  });

  $('#backStep2').click(function() {
    $(' #step3').hide();
    $('#step2').show();
  });

  $('.arrow-down').click(function() {
    $('.content-desc__list ul li').slideToggle();
    $('.arrow-down').toggleClass('active');
  });

  $( function() {
    $( "#datepicker" ).datepicker({
        currentText: 'Сьогодні',
        monthNames: [ 'Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'],
        monthNamesShort: ['Січ', 'Лют', 'Бер', 'Квіт', 'Трав', 'Черв', 'Лип', 'Серп', 'Вер', 'Жовт', 'Лист', 'Груд'],
        dayNames: ['неділя', 'понеділок', 'вівторок', 'среда', 'четвер', 'п\'ятница', 'субота'],
        dayNamesShort: ['нд', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
        dayNamesMin: ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        weekHeader: 'Ти',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    });

  });

  $('.btn-menu').click(function() {
    $('.menu').slideToggle();
  });


  $('div.icon-box').click(function() {
		let findArticle = $(this).next().next('.show-printer');
		
		if( findArticle.is(':visible')){
			findArticle.slideUp(400);
		}
		else{
			$('.show-printer').slideUp();
			findArticle.slideDown();
		}
  });
  
  $('.icon-sort').click(function() {
    $('.sort-box').slideToggle();
  });


});